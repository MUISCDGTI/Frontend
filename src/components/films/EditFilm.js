import { useState } from "react";

function EditFilm(props) {
    const[_id, set_id]=useState(props.film._id);
    const[title, setTitle]=useState(props.film.title);
    const[genre, setGenre]=useState(props.film.genre);
    const[released_at, setReleased_at]=useState(props.film.released_at);
    const[poster, setPoster]=useState(props.film.poster);
    const[director, setDirector]=useState(props.film.director);
    const[original_language, setOriginal_language]=useState(props.film.original_language);
    const[overview, setOverview]=useState(props.film.overview);
    const[rating, setRating]=useState(props.film.rating);

    return (
        <tr>
            <td><input name="_id" value={_id} onChange={(event) => set_id(event.target.value)}/></td>
            <td><input name="title" value={title} onChange={(event) => setTitle(event.target.value)}/></td>
            <td><input name="genre" value={genre} onChange={(event) => setGenre(event.target.value)}/></td>
            <td><input name="released_at" value={released_at} onChange={(event) => setReleased_at(event.target.value)}/></td>
            <td><input name="poster" value={poster} onChange={(event) => setPoster(event.target.value)}/></td>
            <td><input name="director" value={director} onChange={(event) => setDirector(event.target.value)}/></td>
            <td><input name="original_language" value={original_language} onChange={(event) => setOriginal_language(event.target.value)}/></td>
            <td><input name="overview" value={overview} onChange={(event) => setOverview(event.target.value)}/></td>
        </tr>
    )
}

export default EditFilm;