import {useState, Fragment} from 'react';
import {Row, Col, Typography, Input, Form, Button, 
Slider, Select, DatePicker} from 'antd';
import {useNavigate} from 'react-router-dom';
import FilmsApi from '../../services/films-service.js';
const dateFormat = 'YYYY-MM-DD';

function AddFilm(props){
    const [useForm] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [Title] = useState(Typography);
      const initValues = {
        title: '',
        genre: [],
        released_at:'',
        poster:'',
        director:'',
        original_language:'',
        overview:'',
        rating:0
    };

      const onSubmit = async () => {
        setLoading(true);
        try{
            let res = await FilmsApi.postFilm(useForm);
            console.log(res);
            if(res.status===201){
                navigate('/films');
            }
        } catch(error){
            console.log("No se ha podido conectar con el servidor " + error);
        }
        setTimeout(async () => {
          }, 300);
        setLoading(false);
        useForm.resetFields();
        navigate('/films');
      };

    const form =(
            <Form 
            name="basic"
            initialValues={initValues}
            form={useForm}
            autoComplete="off"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
                <Form.Item name="title" label="Título"
                rules={[
                  {
                    required: true,
                    message: 'Please input a title',
                  }
                ]}
                >
                <Input placeholder="Por favor, introduce un Título" />
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

                <Form.Item name="released_at" label="Fecha de emisión"
                rules={[
                    {
                      required: true,
                      message: 'Por favor, introduce una fecha de emisión'
                    }
                  ]}>
                    <DatePicker format={dateFormat}/>
                </Form.Item>
                
                <Form.Item name="poster" label="Poster"
                rules={[
                  {
                    required: false,
                    type:"string"
                  }
                ]}
                >
                <Input placeholder="Url del poster de la película" />
                </Form.Item>

                <Form.Item name="director" label="Director"
                rules={[
                  {
                    required: false,
                    type:"string"

                  }
                ]}
                >
                <Input placeholder="Director de la película" />
                </Form.Item>

                <Form.Item name="original_language" label="Idioma Original"
                rules={[
                  {
                    required: false,
                    type:"string"

                  }
                ]}
                >
                <Input placeholder="Idioma original de la película" />
                </Form.Item>

                <Form.Item name="overview" label="Análisis"
                rules={[
                  {
                    required: false,
                    type:"string"

                  }
                ]}
                >
                <Input placeholder="Análisis de la película" />
                </Form.Item>

                <div style={{textAlign: "right"}}>
                    <Button type="primary" loading={loading} onClick={onSubmit}>
                        Save
                    </Button>{' '}
                    <Button type="danger" htmlType="button" onClick={() => navigate('/films')}>
                        Back
                    </Button>
                </div>
              </Form>
    );

    return (
        <Fragment>
            <div>
                <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{textAlign: 'center'}} level={2}>
                      Rellena los datos de la película
                    </Title>
                    </Col>
                </Row>
                <Row gutter={[40, 0]}>
                <Col span={18}>
                
                </Col>
                </Row>
            </div>
            {form}
        </Fragment>
        
      );
}
export default AddFilm;