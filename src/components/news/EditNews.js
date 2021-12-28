import {useState} from "react";
import { Input, Form, Typography, Button } from 'antd';

function EditNews(props) {

    const [title, setTitle] = useState(props.noticia.title);
    const [description, setDescription] = useState(props.noticia.description);
    const [text, setText] = useState(props.noticia.text);
    const [author, setAuthor] = useState(props.noticia.author);
    const [createdAt, setCreatedAt] = useState(props.noticia.createdAt);
    const [relatedMovies, setRelatedMovies] = useState(props.noticia.relatedMovies);
    const [urlImagen, setUrlImagen] = useState(props.noticia.urlImagen);

    const { Title } = Typography;

    function onClick() {
        const editNews ={
            title: title,
            description: description,
            text: text,
            author: author,
            createdAt: createdAt,
            relatedMovies: relatedMovies,
            urlImagen: urlImagen,
        };
        const result = props.onNewsEdit(editNews);
        

        if (result) {
            setTitle('');
            setDescription('');
            setText('');
            setAuthor('Autor de EJEMPLO');
            setCreatedAt('Fecha de creación de EJEMPLO');
            setRelatedMovies('');
            setUrlImagen('');
        }

        props.onNewsEdit(editNews);
    }
//            <input className="form-control" name="description" value={description}  onChange={(event) => setDescription(event.target.value)}/>
    return (
        <div>
            <br/><br/><br/>
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Title level={3}
                    layout="horizontal">Editando noticia </Title>
                <Form.Item
                    name="title"
                    label="Título"
                    rules={[{ required: true }, { type: 'string', min: 4 }]}
                >
                    <Input 
                    placeholder="Título de la noticia" 
                    className="form-control" 
                    name="title" 
                    value={title}  
                    defaultValue={title}
                    onChange={(event) => setTitle(event.target.value)} 
                    style={{ width: '60%' }}/>
                </Form.Item>
                
                <Form.Item
                    name="description"
                    label = "Subtítulo"
                    rules={[{ required: true }, { type: 'string', min: 4 }]}
                >
                    <Input.TextArea 
                    placeholder="Subtítulo de la noticia" 
                    name="description" 
                    value={description} 
                    defaultValue={description} 
                    allowClear 
                    onChange={(event) => setDescription(event.target.value)} 
                    style={{ width: '60%' }} />
                </Form.Item>
                
                <Form.Item
                    name="text"
                    label = "Cuerpo de la noticia"
                    rules={[{ required: true }, { type: 'string', min: 4 }]}
                >
                    <Input.TextArea 
                    placeholder="Cuerpo de la noticia" 
                    name="text" 
                    value={text} 
                    defaultValue={text} 
                    allowClear 
                    onChange={(event) => setText(event.target.value)} 
                    style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    name="urlImagen"
                    label = "Enlace de la imagen"
//                    rules={[{ required: true }]}            
                >
                    <Input type="url" 
                    placeholder="http://www.imagen.com/id1" 
                    name="urlImagen" 
                    value={urlImagen} 
                    defaultValue={urlImagen} 
                    allowClear 
                    onChange={(event) => setUrlImagen(event.target.value)} 
                    style={{ width: '60%' }} />
                </Form.Item>

                <Button type="primary" onClick={onClick}> Editar noticia </Button>
            </Form>
        </div>
    )
}

export default EditNews;