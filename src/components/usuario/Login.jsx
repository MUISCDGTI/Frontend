import React, { Component } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl="https://api-gfpedro.cloud.okteto.net/login";
const cookies = new Cookies();


class Login extends Component {
    
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.post(baseUrl, {username: this.state.form.username, password: this.state.form.password})
        .then(respuesta=>{
            if(respuesta){
                cookies.set('accessToken', respuesta.data.accessToken, {path: "/"});
                cookies.set('id', respuesta.data.userInfo.id, {path: "/"});
                cookies.set('username', respuesta.data.userInfo.name, {path: "/"});
                cookies.set('email', respuesta.data.userInfo.email, {path: "/"});
                alert(`Bienvenido ${respuesta.data.userInfo.name}`);
                window.location.href="./perfil";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
            alert('El usuario o la contraseña no son correctos');
        })

    }

    onClickRegistrar() {
        window.location.href="./registro";
    };

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./perfil";
        }
    }
    

    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>

            <button className="btn btn-primary" onClick={() => this.onClickRegistrar()}>Registrar usuario</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Login;