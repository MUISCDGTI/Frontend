import { Fragment, useEffect, useState } from 'react';
import {Table, Row, Col, Button, Typography, Tag, Space} from 'antd';
import Alert from './Alert.js';
import FilmsApi from '../../services/films-service.js';
import {useNavigate, generatePath} from 'react-router-dom';

function Films(props){
    const navigate = useNavigate();
    const [message,setMessage]=useState(null);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [films, setFilms] = useState([]);
    const {Title} = Typography;
    const columns = [
        {
            title: 'id',
            dataIndex: '_id',
            key: '_id',
        },
        {
          title: 'Título',
          dataIndex: 'title',
          key: 'title',
          render: (text, film) =>
          <a onClick={function(e) {e.preventDefault();
              navigate(generatePath("/films/:id", { id:film._id }))}}
              >
              {text}
        </a>,
        },
        {
          title: 'Género',
          dataIndex: 'genre',
          key: 'genre',
          render: genre => (
            <>
              {genre.map(genr => {
                let color = 'geekblue';
                return (
                  <Tag color={color} key={genr}>
                    {genr.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Fecha de emisión',
          dataIndex: 'released_at',
          key: 'released_at',
          render: text => {return text.substring(0,10)}
        },
        {
          title: 'Poster',
          dataIndex: 'poster',
          key: 'poster',
        },
        {
          title: 'Director',
          dataIndex: 'director',
          key: 'director',
        },
        {
          title: 'Idioma Original',
          dataIndex: 'original_language',
          key: 'original_language',
        },
        {
          title: 'Análisis',
          dataIndex: 'overview',
          key: 'overview',
        },
        {
            title: 'Action',
            key: 'actions',
            dataIndex: 'actions',
            render: (text, film) => (
            <Space size="middle">
                <Button loading={loadingDelete} danger ghost onClick={()=> deleteFilm(film._id)}>Eliminar</Button>
            </Space>
            ),
          },
    ];

    useEffect(() => {
        async function fetchFilms(){
            try{
                const f = await FilmsApi.getAllFilms();
                setFilms(f);
            } catch(error){
                setMessage('Could not connect with server');
            }
        }
        fetchFilms();
    }, []);
    
    const deleteFilm = async (id) => {
        setLoadingDelete(true);
        await FilmsApi.deleteFilm(id);
        setTimeout(async () => {
          const f = await FilmsApi.getAllFilms();
          setFilms(f);
        }, 300);
        setLoadingDelete(false);
    };

    function onAlertClose(){
        setMessage(null);
    }

    const handleClick = () => {
        navigate('/addFilm');
    }
    return (
        <Fragment>
            <Alert message={message} onClose={onAlertClose}/>
            <div>
                <Row gutter={[40, 0]}>
                <Col span={18}>
                    <Title level={2}>
                    Lista de Películas
                    </Title>
                    </Col>
                <Col span={6}>
                <Button onClick={handleClick} primary block>Añadir Película</Button>
                </Col>
                </Row>
                <Row gutter={[40, 0]}>
                <Col span={24}>
                <Table columns={columns.filter(col => col.dataIndex !== '_id')}
                dataSource={films}
                rowKey="_id"/>
                </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default Films;