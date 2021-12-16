import {useState} from "react";
import { Input } from 'antd';

function CreateNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    function onClick() {
        const newNews ={
            title: title,
            description: description
        };
        const result = props.onAddNews(newNews);
        

        if (result) {
            setTitle('');
            setDescription('');
        }

        props.onAddNews(newNews);
    }
//            <input className="form-control" name="description" value={description}  onChange={(event) => setDescription(event.target.value)}/>
    return (
        <div>
            <Input placeholder="Título de la noticia" className="form-control" name="title" value={title}  onChange={(event) => setTitle(event.target.value)} style={{ width: '40%' }}/>
            <br />
            <Input.TextArea placeholder="Cuerpo de la noticia" name="description" value={description} allowClear onChange={(event) => setDescription(event.target.value)} style={{ width: '40%' }} />
            <br />
            <button className="btn brn-primary" onClick={onClick}> Crear noticia </button>
        </div>
    )
}

export default CreateNews;