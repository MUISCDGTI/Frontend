import { Fragment, useEffect, useState } from 'react';
import EditableFilm from './EditableFilm.js';
import Alert from './Alert.js';
import NewFilm from './NewFilm.js';
import FilmsApi from './FilmsApi.js';

function Films(props){

    const [message,setMessage]=useState(null);
    const [films, setFilms] = useState([]);

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

    function onAddFilm(film){
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
    }

    return (
        <Fragment>
            <Alert message={message} onClose={onAlertClose}/>
            <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Released at</th>
                    <th>Original language</th>
                    <th>Poster_url</th>
                    <th>Overview</th>
                    <th>Rating</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <NewFilm onAddFilm={onAddFilm}/>
                {
                films.map((film) =>
                    <EditableFilm key={film.title} film={film} onEdit={(newFilm) => onFilmEdit(newFilm, film)} onDelete={onFilmDelete}/>             
                )}
            </tbody>
        </table>
        </Fragment>
    )
}

export default Films;