import React, { Component } from 'react';
import './Registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = "https://api-gfpedro.cloud.okteto.net";
const cookies = new Cookies();

class Registro extends Component {

    state = {
        form: {
            name: '',
            email: '',
            password: ''
        }
    }


    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    registrar = async () => {
        const user = this.state.form.name;
        const pass = this.state.form.password;
        axios.post(baseUrl + '/api/v1/users', { name: user, email: this.state.form.email, password: pass })
            .then(async respuesta => {
                if (respuesta) {
                    axios.post(baseUrl + '/login', { username: user, password: pass })
                        .then(respuestaLogin => {
                            if (respuestaLogin) {
                                cookies.set('accessToken', respuestaLogin.data.accessToken, { path: "/" });
                                cookies.set('id', respuestaLogin.data.userInfo.id, { path: "/" });
                                cookies.set('username', respuestaLogin.data.userInfo.name, { path: "/" });
                                cookies.set('email', respuestaLogin.data.userInfo.email, { path: "/" });
                                alert(`Bienvenido ${respuestaLogin.data.userInfo.name}`);
                                window.location.href = "./perfil";
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            alert('El usuario o la contraseña no son correctos');
                        });
                } else {
                    alert('No puede registrarse con ese usuario');
                }
            })
            .catch(error => {
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