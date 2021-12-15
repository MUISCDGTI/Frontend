import {useState} from "react";

function CreateNews(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function onClick2() {
        const newNews ={
            title: title,
            body: body
        };
        setTitle('');
        setBody('');

        props.onAddNews(newNews);
    }

    return (
        <div>
            <input className="form-control" name="title" value={title}/>
            <input className="form-control" name="body" value={body}/>
            <button className="btn brn-primary" onClick={onClick2} Crear noticia </button>
        </div>
    )
}

export default CreateContact;