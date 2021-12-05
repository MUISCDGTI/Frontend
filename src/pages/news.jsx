import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Breadcrumb } from 'antd';
import Noticias from '../components/news';
import CustomHeader from '../components/header';
import NewsItem from '../components/news/newsItem';
import NewsApi from '../NewsApi';

const { Header, Content, Footer } = Layout;

const NewsList = () => {

/*
    const[newsList, setNewsList] = useState([]);

    useEffect{() => {
        async function fetchNewsList() {
            try {
            const n = await NewsApi.getAllNews();
            setNewsList(newsList);
            } catch(error) {
                setMessage('No se pudo contactar con el servidor');
            }
        }
    }, []};
*/

    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <h1> Lista de noticias </h1>
                    <Noticias />
                    </div>
                
            </Content>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default NewsList;