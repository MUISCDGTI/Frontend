import React, { Component } from 'react';
import './Registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const baseUrl="https://api-gfpedro.cloud.okteto.net/api/v1/users";

class Registro extends Component {
    
    state={
        form:{
            name: '',
            email: '',
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

    registrar=async()=>{
        await axios.post(baseUrl, {name: this.state.form.name, email: this.state.form.email, password: this.state.form.password})
        .then(respuesta=>{
            if(respuesta){
                alert(`Usuario creado ${respuesta.data.userInfo.name}, inicie sesión`);
                window.location.href="./login";
            }else{
                alert('No puede registrarse con ese usuario');
            }
        })
        .catch(error=>{
            console.log(error);
            alert('No puede registrarse con ese usuario');
        })

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
              name="name"
              onChange={this.handleChange}
            />
            <br />
            <label>Email: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
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
            <button className="btn btn-primary" onClick={() => this.registrar()}>Registrar</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Registro;