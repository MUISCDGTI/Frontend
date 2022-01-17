import {useState, Fragment} from 'react';
import {Row, Col, Typography, Input, Form, Button, 
Slider, Select, DatePicker} from 'antd';
import {useNavigate} from 'react-router-dom';
import FilmsApi from '../../components/peliculas/FilmsApi.js';
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
                <Form.Item name="title" label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please input a title',
                  }
                ]}
                >
                <Input placeholder="Please enter a title" />
                </Form.Item>

                <Form.Item name="genre" label="Genre" 
                rules={[
                  {
                    required: true,
                    message: 'Please select at least one genre',
                    type: 'array'
                  }
                ]}
                >
                    <Select mode="multiple" placeholder="Please enter the film genres">
                        <Select.Option value="action">Action</Select.Option>
                        <Select.Option value="adventure">Adventure</Select.Option>
                        <Select.Option value="comedy">Comedy</Select.Option>
                        <Select.Option value="fantasy">Fantasy</Select.Option>
                        <Select.Option value="horror">Horror</Select.Option>
                        <Select.Option value="romance">Romance</Select.Option>
                        <Select.Option value="thriller">Thriller</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="released_at" label="Released_at"
                rules={[
                    {
                      required: true,
                      message: 'Please enter release date'
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
                <Input placeholder="Film poster URL" />
                </Form.Item>

                <Form.Item name="director" label="Director"
                rules={[
                  {
                    required: false,
                    type:"string"

                  }
                ]}
                >
                <Input placeholder="Film director" />
                </Form.Item>

                <Form.Item name="original_language" label="Original Language"
                rules={[
                  {
                    required: false,
                    type:"string"

                  }
                ]}
                >
                <Input placeholder="Film original language" />
                </Form.Item>

                <Form.Item name="overview" label="Overview"
                rules={[
                  {
                    required: false,
                    type:"string"

                  }
                ]}
                >
                <Input placeholder="Film overview" />
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
    )

    return (
        <Fragment>
            <div>
                <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{textAlign: 'center'}} level={2}>
                    Fill with new film data
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