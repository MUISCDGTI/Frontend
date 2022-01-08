import React, { useEffect, useState, Fragment, useCallback } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Typography, List, Avatar, Space, Button, Alert, message } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Item from 'antd/lib/list/Item';
import NewsApi from '../../NewsApi.js';
import CreateNews from './CreateNews.js';
import EditNews from './EditNews.js';
import { type } from 'os';

function Noticias() {


    const [newsList, setNewsList] = useState([]);

    const [mensaje, setMensaje] = useState("");

    const [createEscondido, setCreateEscondido] = useState("false");

    const [isShow, setIsShow] = useState("true");

    const [isShowEdit, setIsShowEdit] = useState(false);

    const [noticiaEditada, setIsNoticiaEditada] = useState();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    useEffect(() => {
        const fetchData = async () =>  {
            const listaNoticias = await NewsApi.getAllNews();            
            setNewsList(listaNoticias);
        }
        fetchData();
    }, []);
    
    const handleClick = () => {
        setIsShow(!isShow);
        setMensaje('');
    };

    function handleClickEdit(noticia) {
        setIsShowEdit(!isShowEdit);
        setIsNoticiaEditada(noticia.title);
        // if (isShowEdit) {
        //     onNewsEdit()
        // }
    }

    const { Text, Title } = Typography;



    function onAddNews(noticia) {
        noticia.avatar = "https://joeschmoe.io/api/v1/random"
        noticia.href = "./news/id"
        noticia.author = "Periquito Pérez"
        var hoy = new Date();

        const validation = validateNewsTitle(noticia);
        if (! validation){
            return false;
        }

        noticia.createdAt = hoy;

        noticia.createdAtFormat = hoy.getDay() + " de " + hoy.toLocaleString('default', { month: 'long' }) + " del " 
            + hoy.getFullYear() + " a las " + hoy.getHours() + ":" + hoy.getMinutes();

        setNewsList((prevNewsList) => {
            if (! prevNewsList.find(n=> n.title === noticia.title)){
                message.success('Noticia creada correctamente');
                setMensaje('');
                setIsShow(!isShow);

                fetch('/api/v1/news', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(noticia)
                })
                    .then(console.log(JSON.stringify(noticia)))
                    .catch(err => console.log(err))
                    .then(res => res.json())
                    .then(thing => console.log(thing))
                


                return [...prevNewsList, noticia];
            } else {
                return prevNewsList;
            }
        });
        return true;
    }

    function onNewsEdit(newNoticia, oldNoticia){
        /* Descomentar
        const validation = validateNewsTitle(newNoticia);
        if (! validation){
            return false;
        }

        if (newNoticia.title != oldNoticia.title){
            setMensaje('El título de la noticia no se puede cambiar');
            return false;
        }
        */
        console.log(newNoticia._id)
        fetch('/api/v1/news/' + newNoticia._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNoticia)
        })
            .then(console.log(JSON.stringify(newNoticia)))
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(thing => console.log(thing))


        setNewsList((prevNewsList) => {
                return prevNewsList.map((n) => n.title === oldNoticia.title ? newNoticia : n);
            })
        // setMensaje(newNoticia.title);
        return true;
    }

    function validateNewsTitle(noticia) {
        if (noticia.title === ''){
            setMensaje('El título no debe estar vacío');
            return false;
        }
        if (newsList.find(n => n.title === noticia.title)){
            setMensaje('La noticia ya existe');
            return false;
        }
        return true;
    }

    function onNewsDelete2(noticia){
        message.success('Noticia eliminada correctamente');
        console.log(noticia)
        console.log(noticia._id)
        fetch("/api/v1/news/" + noticia._id, {
            method: 'DELETE'
        })
        setNewsList((prevNewsList) => {
            return prevNewsList.filter((n) => n.title !== noticia.title);
        });
    }



    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    function onAlertClose() {
        setMensaje(null);
    }
    
    if (newsList === undefined) {
        return <> Cargando...  </> 
    }

    return (
        <Fragment>
            <Title level={2}>Lista de noticias</Title>

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
                                src={item.urlImagen}
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.text.length > 400 ? (<p>{item.text.substring(0,400).concat('...')}</p>) : (<p>{item.text}</p>)}
                        
                        {<><Text type="secondary"> Noticia creada el {item.createdAtFormat} por {item.author}</Text><br /><br /></>}
                        <Button type="primary" onClick={() => {
                            handleClickEdit(item)}}>
                            Editar
                        </Button>  &nbsp;&nbsp;
                        <Button type="primary" danger="True" onClick={() => {
                            return onNewsDelete2(item);}}>
                                Eliminar
                        </Button>
                        <>{isShowEdit && item.title === noticiaEditada  ?            
                            <>{isShowEdit}                            
                                <EditNews noticia={item} onNewsEdit={(newNoticia) => onNewsEdit(newNoticia,item)} />
                            </>
                            :
                            <>
                            </>}
                        </>
                    </List.Item>
                )
            }
            />
 
            <Button type="default" onClick={handleClick}> Escribir nueva noticia </Button>
            

            <>{ mensaje ==='' ?
                <></>
                :
                <><br/><br/>
                <Alert type="warning" message={mensaje}  showIcon 
                //onClose={onClose}
                /></>
            }</>

            <>{isShow ?            
                <></>
                :
                <CreateNews onAddNews={onAddNews}/>
                }
            </>
        </Fragment>
    );
}



export default Noticias;