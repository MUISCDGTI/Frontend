import React, { Component } from 'react';
import './Perfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

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
                    <h1> {cookies.get('username')} </h1>
            <h3> Email: {cookies.get('email')} </h3>

            <br/><br/>
            <button onClick={()=>this.cerrarSesion()}>Eliminar usuario</button>
    
                    <br />
                    <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
            );
        }
    }
    
    export default Perfil;