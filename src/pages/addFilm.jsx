import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import CustomHeader from '../components/header';
import AddFilm from '../components/films/CreateFilm.js';

const { Header, Content, Footer } = Layout;

const AddFilmPage = () => {
    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">

                <AddFilm />

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
export default AddFilmPage;