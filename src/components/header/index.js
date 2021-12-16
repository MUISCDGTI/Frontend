import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const CustomHeader = () => {
    return (
        <div>
            <div className="logo" >
                <Link to="/" >
                    Rotten Potatoes
                </Link>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key='films'>Películas</Menu.Item>
                <Menu.Item key='news'>Noticias</Menu.Item>
                <Menu.Item key='user'>Usuario</Menu.Item>
                <Link to="/ratings" >
                <Menu.Item key='ratings'>Valoraciones</Menu.Item>
                </Link>
            </Menu>
        </div>
    );
}

export default CustomHeader;