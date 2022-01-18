import 'antd/dist/antd.css';
import './perfil.css';
import { Layout } from 'antd';
import CustomHeader from '../components/header';
import Perfil from '../components/usuario/Perfil.jsx';

const { Header, Content, Footer } = Layout;

const PerfilPage = () => {
    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">

                <Perfil />

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
export default PerfilPage;