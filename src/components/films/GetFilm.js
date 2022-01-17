import {useState, Fragment, useEffect} from 'react';
import {Row, Col, Typography, Button, List} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
import FilmsApi from '../../services/films-service.js';
import RatingApp from '../ratings';
import EditFilm from './EditFilm.js';

const GetFilm = () => {
    const { id } = useParams();
    const [film, setFilm]=useState([]);
    const [newsList, setNewsList] = useState([]);
    const navigate = useNavigate();
    const [Title] = useState(Typography);
    const [isShowEdit, setIsShowEdit] = useState(false);

    const handleClick = () => {
        setIsShowEdit(true);
    };

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

    function updateFilm(newFilm, oldFilm){
        fetch('https://api-drorganvidez.cloud.okteto.net/api/v1/films/' + oldFilm._id + "?apikey=06271241-163c-4b95-bcb3-880be1e0be95", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFilm)
        })
            .then(console.log("NEW FILM" + JSON.stringify(newFilm)))
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(thing => console.log(thing))

        setNewsList((prevNewsList) => {
                return prevNewsList.map((n) => n.title === oldFilm.title ? newFilm : n);
            })
        return true;
    }

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
                    <EditFilm film={film} updateFilm={(newFilm) => updateFilm(newFilm,film)} onClick={handleClick}/>
                    <Button type="danger" htmlType="button" onClick={() => navigate('/films')}>
                        Back
                    </Button>
        </div>
        <RatingApp page='film' id={id} username='Gustavo' />
        </Fragment>
      );
}

export default GetFilm;
