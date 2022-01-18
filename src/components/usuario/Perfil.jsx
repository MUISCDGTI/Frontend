import React, { Component } from 'react';
import './Perfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl="https://api-gfpedro.cloud.okteto.net/logout";
const cookies = new Cookies();

    class Perfil extends Component {
        cerrarSesion=()=>{
            cookies.remove('accessToken', {path: "/"});
            cookies.remove('id', {path: "/"});
            cookies.remove('username', {path: "/"});
            cookies.remove('email', {path: "/"});
            window.location.href='./usuario';
        }
    
        componentDidMount() {
            if(!cookies.get('username')){
                window.location.href="./usuario";
            }
        }
    
        render() {
            console.log('accessToken: '+ cookies.get('accessToken'));
            console.log('id: '+cookies.get('id'));
            console.log('username: '+cookies.get('username'));
            console.log('email: '+cookies.get('email'));
            return (
                <div>
                    Perfil usuario
    
                    <br />
                    <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
            );
        }
    }
    
    export default Perfil;