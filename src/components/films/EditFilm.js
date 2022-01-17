import { useState } from "react";
import { Input, Form, Typography, Button, Select } from 'antd';
import {useNavigate} from 'react-router-dom';

function EditFilm(props) {
    const[title, setTitle] = useState(props.film.title);
    const[genre, setGenre] = useState(props.film.genre);
    const[poster, setPoster] = useState(props.film.poster);
    const[director, setDirector] = useState(props.film.director);
    const[original_language, setOriginalLanguage] = useState(props.film.original_language);
    const[overview, setOverview] = useState(props.film.overview);
    
    const { Title } = Typography;

    const navigate = useNavigate();

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
            setTitle(title);
            setGenre('');
            setPoster('');
            setDirector('');
            setOriginalLanguage('');
            setOverview('');
        }

        props.updateFilm(editFilms);

        setTimeout(async () => {
        }, 300);

        navigate('/films');
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
                    layout="horizontal">Editar la película </Title>
                <Form.Item
                    name="title"
                    label="Título"
                    initialValue={title} 
                    rules={[
                        { required: false , message:'El título no puede estar vacío' }
                        ,{ type: 'string', min: 4 , message:'El título debe tener al menos 4 caracteres.'}
                ]}
                >
                    <Input 
                    placeholder="Título de la película"
                    onChange={(event) => setTitle(event.target.value)}
                    defaultValues={title}
                    />
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
                    onChange={(event) => setPoster(event.target.value)}
                    defaultValues={poster}
                />
                </Form.Item>

                <Form.Item name="director" label="Director" initialValue={director} 
                rules={[
                  {
                    required: false,
                    type:"string"
                  }
                ]}
                >
                <Input 
                    placeholder="Director de la película" 
                    onChange={(event) => setDirector(event.target.value)}
                    defaultValues={director}
                />
                </Form.Item>

                <Form.Item name="original_language" label="Idioma Original" initialValue={original_language} 
                rules={[
                  {
                    required: false,
                    type:"string"
                  }
                ]}
                >
                <Input 
                    placeholder="Idioma original de la película" 
                    onChange={(event) => setOriginalLanguage(event.target.value)}
                    defaultValues={original_language}
                />
                </Form.Item>

                <Form.Item name="overview" label="Análisis" initialValue={overview} 
                rules={[
                  {
                    required: false,
                    type:"string"
                  }
                ]}
                >
                <Input 
                    placeholder="Análisis de la película" 
                    onChange={(event) => setOverview(event.target.value)}
                    defaultValues={overview}
                />
                </Form.Item>

                <Button type="primary" onClick={onClick}> Editar Película </Button>
            </Form>
        </div>
    )
}

export default EditFilm;
