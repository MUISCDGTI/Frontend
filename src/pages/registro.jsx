import 'antd/dist/antd.css';
import './registro.css';
import { Layout } from 'antd';
import CustomHeader from '../components/header';
import Registro from '../components/usuario/Registro.jsx';

const { Header, Content, Footer } = Layout;

const RegistroPage = () => {
    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">

                <Registro />

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
export default RegistroPage;