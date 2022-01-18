import 'antd/dist/antd.css';
import './login.css';
import { Layout } from 'antd';
import CustomHeader from '../components/header';
import Login from '../components/usuario/Login.jsx';

const { Header, Content, Footer } = Layout;

const LoginPage = () => {
    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">

                <Login />

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
export default LoginPage;