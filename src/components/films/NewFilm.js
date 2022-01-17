import {useState} from 'react';

function NewFilm(props){
    const[title, setTitle]=useState('');
    const[genre, setGenre]=useState('');
    const[released_at, setReleased_at]=useState('');
    const[poster, setPoster]=useState('');
    const[director, setDirector]=useState('');
    const[original_language, setOriginal_language]=useState('');
    const[overview, setOverview]=useState('');

    function onClick() {
        const newFilm = {
            title: title,
            genre: genre,
            released_at: released_at,
            poster: poster,
            director: director,
            original_language: original_language,
            overview: overview
        };
        const result = props.onAddFilm(newFilm);

        if (result) {
            setTitle('');
            setGenre('');
            setReleased_at('');
            setPoster('');
            setDirector('');
            setOriginal_language('');
            setOverview('');
        }
    }

    return (
        <tr>
            <td><input className="form-control" name="title" value={title} onChange={(event) => setTitle(event.target.value)}/></td>
            <td><input className="form-control" name="director" value={director} onChange={(event) => setDirector(event.target.value)}/></td>
            <td><input className="form-control" name="released_at" value={released_at} onChange={(event) => setReleased_at(event.target.value)}/></td>
            <td><input className="form-control" name="original_language" value={original_language} onChange={(event) => setOriginal_language(event.target.value)}/></td>
            <td><input className="form-control" name="poster" value={poster} onChange={(event) => setPoster(event.target.value)}/></td>
            <td><input className="form-control" name="overview" value={overview} onChange={(event) => setOverview(event.target.value)}/></td>
            <td>&nbsp;</td>
            <td><button className="btn btn-primary" onClick={onClick}>Add film</button></td>
        </tr>
    )
}
export default NewFilm;