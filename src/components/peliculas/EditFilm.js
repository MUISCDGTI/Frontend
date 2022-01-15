import { useState } from "react";

function EditFilm(props) {
    const[title, setTitle]=useState(props.film.title);
    const[director, setDirector]=useState(props.film.director);
    const[released_at, setReleased_at]=useState(props.film.released_at);
    const[original_language, setOriginal_language]=useState(props.film.original_language);
    const[poster, setPoster]=useState(props.film.poster);
    const[overview, setOverview]=useState(props.film.overview);
    const[rating, setRating]=useState(props.film.rating);

    return (
        <tr>
            <td><input className="form-control" name="title" value={title} onChange={(event) => setTitle(event.target.value)}/></td>
            <td><input className="form-control" name="director" value={director} onChange={(event) => setDirector(event.target.value)}/></td>
            <td><input className="form-control" name="released_at" value={director} onChange={(event) => setReleased_at(event.target.value)}/></td>
            <td><input className="form-control" name="original_language" value={director} onChange={(event) => setOriginal_language(event.target.value)}/></td>
            <td><input className="form-control" name="poster" value={director} onChange={(event) => setPoster(event.target.value)}/></td>
            <td><input className="form-control" name="overview" value={director} onChange={(event) => setOverview(event.target.value)}/></td>
            <td><input className="form-control" name="rating" value={director} onChange={(event) => setRating(event.target.value)}/></td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onSave({title: title, director:director, released_at:released_at, original_language:original_language,
                    poster:poster, overview:overview, rating:rating})}>Guardar</button>
                <button className="btn btn-primary" onClick={() => props.onDelete(props.film)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default EditFilm;