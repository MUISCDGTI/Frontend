import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';
import RatingsList from '../list-ratings';

const Noticias = () => {
    return (
        <div>
            <Card title="Default size card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <RatingsList page='user' id='11' username='emicolalc' />
        </div>
    );
}

export default Noticias;