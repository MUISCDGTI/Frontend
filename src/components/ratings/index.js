import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import { Card } from 'antd';
import CustomHeader from '../header';

const { Header, Content, Footer } = Layout;

const Ratings = () => {
    return (
        <Layout className="layout">
            <Header>
                <CustomHeader />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div>
                    <Card title="Default size card" style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Ratings;