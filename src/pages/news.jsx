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

    const newsList = [];
/*
    for (let i = 0; i < 3; i++) {
        newsList.push({
            href: './news/id',
            title: 'Luces y sombras del segundo final de La casa de papel'+i,
            avatar: 'https://joeschmoe.io/api/v1/random',
            description:
                'La serie se despide convertida en el mayor éxito global de la ficción televisiva española',
            content:
                '',
            url:
                'https://imagenes.elpais.com/resizer/GLfCZ8oOlfil2w-XpWWl99j8sT8=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/W5O4QHHCMBHQ5DHXSDSIPAVNFY.jpg',
        });
    }
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
                    <Noticias newsList={newsList} />
                    </div>
                
            </Content>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default NewsList;