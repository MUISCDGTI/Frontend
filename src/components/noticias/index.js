import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

const Noticias = () => {
    return (
        <div>
            <Card title="Default size card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    );
}

export default Noticias;