import React, { Component } from 'react';
import './Perfil.css';
import {Table, Row, Col, Button, Typography, Tag, Space} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';


const baseUrl = "https://api-gfpedro.cloud.okteto.net/api/v1/users/";
const cookies = new Cookies();

    class Perfil extends Component {

        deleteUser = async () => {
            const id = cookies.get('id');
            axios.delete(baseUrl + id)
                .then(async respuesta => {
                    if (respuesta) {
                        this.cerrarSesion();
                        alert(`Usuario eliminado correctamente`);
                    } else {
                        alert('No ha sido posible eliminar el usuario y sus suscripciones');
                    }
                })
                .catch(error => {
                    console.log(error);
                    alert('No ha sido posible eliminar el usuario y sus suscripciones');
                })
    
        }

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
            
                  <Tag color='geekblue'>
                    Aviso: Al eliminar un usuario también eliminarás las suscripciones que este tenga.
                  </Tag>
                  <br/><br/>
            <button onClick={()=>this.deleteUser()}>Eliminar usuario</button>
    
            <br/><br/>
                    <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
            );
        }
    }
    
    export default Perfil;