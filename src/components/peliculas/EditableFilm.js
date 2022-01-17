import { useState } from "react";
import Film from "./Film.js";
import EditFilm from "./EditFilm.js";

function EditableFilm(props) {
    const [isEditing, setIsEditing] = useState(false);

    function saveFilm(film) {
        const result = props.onEdit(film);
        if (result) {
            setIsEditing(false);
        }
    }

    var filmRender;
    if (isEditing) {
        filmRender = <EditFilm film={props.film} onDelete={props.onDelete} onSave={saveFilm}/>;
    } else {
        filmRender = <Film film={props.film} onDelete={props.onDelete} onEdit={() => setIsEditing(true)}/>;
    }

    return filmRender;
}

export default EditableFilm;