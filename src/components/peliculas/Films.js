import { Fragment, useEffect, useState } from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import EditableFilm from './EditableFilm.js';
import Alert from './Alert.js';
//import NewFilm from './NewFilm.js';
import FilmsApi from './FilmsApi.js';
import {useNavigate} from 'react-router-dom';

function Films(props){
    const navigate = useNavigate();
    const [message,setMessage]=useState(null);
    const [films, setFilms] = useState([]);
    const {Title} = Typography;

    const columns = [
        {
            title: 'id',
            dataIndex: '_id',
            key: '_id'
          },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title'
        },
        {
          title: 'Genre',
          dataIndex: 'genre',
          key: 'genre'

        },
        {
          title: 'Released at',
          dataIndex: 'released_at',
          key: 'released_at'
        },
        {
          title: 'Poster',
          dataIndex: 'poster',
          key: 'poster'

        },
        {
          title: 'Director',
          dataIndex: 'director',
          key: 'director'

        },
        {
          title: 'Original language',
          dataIndex: 'original_language',
          key: 'original_language'

        },
        {
          title: 'Overview',
          dataIndex: 'overview',
          key: 'overview'

        },
        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action'
          }
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
    
    const data = [{
    }];

    films.map((film) => {
    data.push({
        _id:film._id,
        title: film.title,
       genre: film.genre,
       released_at: film.released_at,
       poster: film.poster,
       director: film.director,
       original_language: film.original_language,
       overview: film.overview,
       rating: film.rating,
    
    })
    return films;
   });

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

    /*function onAddFilm(film){
        const validation = validateFilmTitle(film);
        if (! validation) {
            return false;
        }

        if (films.find(f => f.title === film.title)) {
            setMessage('Duplicated film');
            return false;
        }

        setFilms((prevFilms) => {
            if (! prevFilms.find(f => f.title === film.title)) {
                return [...prevFilms, film];
            } else {
                setMessage('Duplicated film');
                return prevFilms;
            }
        });
        return true;
    }*/

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
                dataSource={data}/>
                </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default Films;