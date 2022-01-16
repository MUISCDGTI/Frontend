import {useState, Fragment, useEffect} from 'react';
import {Row, Col, Typography, Button, List} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
import FilmsApi from '../../components/peliculas/FilmsApi.js';

const GetFilm = (props) => {
    const { id } = useParams();
    const [film,setFilm]=useState([]);

    const navigate = useNavigate();
    const [Title] = useState(Typography);

    const data = [
        'id: '+ id,
      ];

    useEffect(() => {
        async function fetchFilm(){
            try{
                const f = await FilmsApi.getFilm(id);
                console.log(f);
                setFilm(f);
            } catch(error){
                console.log("Could not connect with server " + error);
            }
        }
        fetchFilm();
    }, []);

    const infoList = (<List
      size="large"
      header={<div>Película: {props.id}</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item >{item}</List.Item>}
    />)

    return (
        <Fragment>
            <div>
                <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{textAlign: 'center'}} level={2}>
                    Film information page
                    </Title>
                    </Col>
                </Row>
                <Row gutter={[40, 0]}>
                <Col span={18}>
                
                </Col>
                </Row>
            </div>
        {infoList}
        <div style={{textAlign: "right"}}>
                    <Button type="danger" htmlType="button" onClick={() => navigate('/films')}>
                        Back
                    </Button>
        </div>
        </Fragment>
      );
}
export default GetFilm;