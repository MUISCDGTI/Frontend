import { Fragment, useEffect, useState } from 'react';
import {Table, Row, Col, Button, Typography, Tag, Space} from 'antd';
//import EditableFilm from './EditableFilm.js';
import Alert from './Alert.js';
//import NewFilm from './NewFilm.js';
import FilmsApi from './FilmsApi.js';
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
          title: 'Title',
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
          title: 'Genre',
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
          title: 'Released at',
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
          title: 'Original language',
          dataIndex: 'original_language',
          key: 'original_language',
        },
        {
          title: 'Overview',
          dataIndex: 'overview',
          key: 'overview',
        },
        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating',
        },
        {
            title: 'Action',
            key: 'actions',
            dataIndex: 'actions',
            render: (text, film) => (
            <Space size="middle">
                <Button loading={loadingDelete} danger ghost onClick={()=> deleteFilm(film._id)}>Delete</Button>
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

    function onFilmDelete(film) {
        setFilms((prevFilms) => {
            return prevFilms.filter((f) => f.title !== film.title);
        });
    }

    function onFilmEdit(newFilm, oldFilm) {
        const validation = validateFilmTitle(newFilm);
        if (! validation) {
            return false;
        }

        if (newFilm.title !== oldFilm.title) {
            setMessage('Cannot change title');
            return false;
        }

        setFilms((prevFilms) => {
            const newFilms = prevFilms.map((f) => f.title === oldFilm.title ? newFilm : f);
            return newFilms
        })

        return true;
    }

    function validateFilmTitle(film) {
        if (film.title === '') {
            setMessage('A title must be provided');
            return false;
        }
        return true;
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
                    Film List
                    </Title>
                    </Col>
                <Col span={6}>
                <Button onClick={handleClick} block>Add Film</Button>
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