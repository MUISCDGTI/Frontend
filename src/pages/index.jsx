import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Breadcrumb } from 'antd';
import Noticias from '../components/news';
import Usuario from '../components/usuario';

import CustomHeader from '../components/header';

const { Header, Content, Footer } = Layout;

const MainPage = () => {
    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Usuario</Breadcrumb.Item>
                    <Breadcrumb.Item>Inicio de sesión</Breadcrumb.Item>
                </Breadcrumb>
                <Usuario />
            </Content>
            <Footer style={{ textAlign: 'center' }}>FIS Design ©2022 Created by </Footer>
        </Layout>
    );
}

export default MainPage;