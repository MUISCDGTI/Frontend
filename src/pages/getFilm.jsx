import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import CustomHeader from '../components/header';
import GetFilm from '../components/films/GetFilm.js';

const { Header, Content, Footer } = Layout;

const GetFilmPage = () => {
    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">

                <GetFilm />

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
export default GetFilmPage;