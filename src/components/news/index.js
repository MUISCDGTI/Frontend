import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card, List, Avatar, Space, Button } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const Noticias = () => {
    const newsList = [];

    newsList.push({
        href: './news/id',
        title: `Luces y sombras del segundo final de La casa de papel`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'La serie se despide convertida en el mayor éxito global de la ficción televisiva española',
        content:
            '',
        url: 'https://imagenes.elpais.com/resizer/GLfCZ8oOlfil2w-XpWWl99j8sT8=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/W5O4QHHCMBHQ5DHXSDSIPAVNFY.jpg',
    })

    for (let i = 0; i < 23; i++) {
        newsList.push({
            href: 'https://ant.design',
            title: `Luces y sombras del segundo final de La casa de papel`,
            avatar: 'https://joeschmoe.io/api/v1/random',
            description:
                'La serie se despide convertida en el mayor éxito global de la ficción televisiva española',
            content:
                '',
            url:
                'https://imagenes.elpais.com/resizer/GLfCZ8oOlfil2w-XpWWl99j8sT8=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/W5O4QHHCMBHQ5DHXSDSIPAVNFY.jpg',
        });
    }

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );


    return (
        <div>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={newsList}

                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.url}
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                        <Button type="primary" >Editar</Button>  &nbsp;&nbsp;
                        <Button type="primary" danger="True">Eliminar</Button>
                    </List.Item>
                )}
            />

        </div>
    );
}



export default Noticias;