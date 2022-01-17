import { useState } from "react";
import { Input, Form, Typography, Button, Select } from 'antd';

function EditFilm(props) {
    const[title, setTitle] = useState(props.film.title);
    const[genre, setGenre] = useState(props.film.genre);
    const[poster, setPoster] = useState(props.film.poster);
    const[director, setDirector] = useState(props.film.director);
    const[original_language, setOriginal_language] = useState(props.film.original_language);
    const[overview, setOverview] = useState(props.film.overview);
    
    const { Title } = Typography;

    function onClick() {
        const editFilms ={
            title: title,
            genre: genre,
            poster: poster,
            director: director,
            original_language: original_language,
            overview: overview,
        };
        const result = props.updateFilm(editFilms);

        if (result) {
            setTitle('');
            setGenre('');
            setPoster('');
            setDirector('');
            setOriginal_language('');
            setOverview('');
        }

        props.updateFilm(editFilms);
    }
    return (
        <div>
            <br/><br/><br/>
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Title level={3}
                    layout="horizontal">Editando película </Title>
                <Form.Item
                    name="title"
                    label="Título"
                    initialValue={title} 
                    rules={[
                        { required: true , message:'El título no puede estar vacío' }
                        ,{ type: 'string', min: 4 , message:'El título debe tener al menos 4 caracteres.'}
                ]}
                >
                    <Input 
                    placeholder="Título de la noticia" 
                    value={title}  
                    onChange={(event) => setTitle(event.target.value)}/>
                </Form.Item>

                <Form.Item name="genre" label="Género"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, selecciona un género',
                    type: 'array'
                  }
                ]}
                >
                    <Select mode="multiple" placeholder="Por favor, selecciona los géneros">
                        <Select.Option value="action">Acción</Select.Option>
                        <Select.Option value="adventure">Aventura</Select.Option>
                        <Select.Option value="comedy">Comedia</Select.Option>
                        <Select.Option value="fantasy">Fantasía</Select.Option>
                        <Select.Option value="horror">Horror</Select.Option>
                        <Select.Option value="romance">Romance</Select.Option>
                        <Select.Option value="thriller">Misterio</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="poster" label="Poster" initialValue={poster} 
                rules={[
                  {
                    required: false,
                    type:"string"
                  }
                ]}
                >
                <Input 
                    placeholder="Url del poster de la película"
                    value={poster}  
                    onChange={(event) => setPoster(event.target.value)} 
                />
                </Form.Item>

                <Button type="primary" onClick={onClick}> Editar Película </Button>
            </Form>
        </div>
    )
}

export default EditFilm;
