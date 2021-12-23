import {useState} from "react";
import CreateNews from "./CreateNews";
im

function EditableNews(props) {
    const [isEditing, setIsEditing] = useState(false);

    var newsRender;
    if (isEditing) {
        newsRender = <EditableNews news={props.news}/>;
    } else {
        newsRender = <CreateNews />
    }
    return(contactRender);
}
export default EditableNews;