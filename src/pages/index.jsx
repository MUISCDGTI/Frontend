import 'antd/dist/antd.css';
import './index.css';
import { Layout, Breadcrumb } from 'antd';
import Noticias from '../components/news';
import Usuario from '../components/usuario';
import CustomHeader from '../components/header';
import EtiquetaGenero from '../components/etiquetaGenero';

import Films from '../components/films/Films.js';

const { Header, Content, Footer } = Layout;

const MainPage = () => {
    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                
                <div className="site-layout-content">

                <Films />

                </div>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default MainPage;