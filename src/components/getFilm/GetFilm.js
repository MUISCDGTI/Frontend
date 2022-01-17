import {useState, Fragment, useEffect} from 'react';
import {Row, Col, Typography, Button, List} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
import FilmsApi from '../../components/peliculas/FilmsApi.js';
import RatingApp from '../list-ratings';

const GetFilm = () => {
    const { id } = useParams();
    const [film, setFilm]=useState([]);

    const navigate = useNavigate();
    const [Title] = useState(Typography);

    useEffect(() => {
        async function fetchFilm(){
            try{
                const film = await FilmsApi.getFilm(id);
                setFilm(film);
            } catch(error){
                console.log("Could not connect with server " + error);
            }
        }
        fetchFilm();
    }, []);

    const infoList = (
        <div>
          <p>Título: {film.title}</p>
          <p>Género: {film.genre}</p>
          <p>Poster: {film.poster}</p>
          <p>Director: {film.director}</p>
          <p>Original Language: {film.original_language}</p>
          <p>Overview: {film.overview}</p>
        </div>
    );

    return (
        <Fragment>
            <div>
                <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{textAlign: 'center'}} level={2}>
                    Film information page
                    </Title>
                    </Col>
                </Row>
                <Row gutter={[40, 0]}>
                    <Col span={18}>
                    </Col>
                </Row>
            </div>
        {infoList}
        <div style={{textAlign: "right"}}>
                    <Button type="danger" htmlType="button" onClick={() => navigate('/films')}>
                        Back
                    </Button>
        </div>
        <RatingApp page='film' id={id} username='Gustavo' />
        </Fragment>
      );
}

export default GetFilm;
