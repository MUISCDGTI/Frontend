import React, { useEffect, useState } from "react";
import {
  List,
  Dropdown,
  Menu,
  Rate,
  Slider,
  DatePicker,
  Input,
  Collapse,
  Button,
  Avatar,
  Form,
  Modal,
  InputNumber,
} from "antd";
import Cookies from 'universal-cookie';
import { DownOutlined } from "@ant-design/icons";
import "./index.css";
import moment from "moment";
import RatingsService from "../../services/ratings-service";

const RatingApp = (props) => {
  const cookies = new Cookies();

  const [ratings, setRatings] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isRatingVisible, setIsRatingVisible] = useState(true);

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);

  const [ratingId, setId] = useState("");

  const [useform] = Form.useForm();

  useEffect(() => {
    async function fetchData() {
      const list = await RatingsService.getAllRatings();
      if (props.page === "film") {
        setRatings(list.filter((rating) => rating.film === props.id));
      } else if (props.page === "user") {
        setRatings(list.filter((rating) => rating.user === props.id));
      }
    }
    fetchData();
  }, [props.id, props.page]);

  const showModal = () => {
    setIsModalVisible(true);
    setIsDescriptionVisible(true);
    setIsRatingVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const updateRating = (rating) => {
    setId(rating);
    setIsModalVisible(true);
    setIsRatingVisible(true);
    setIsDescriptionVisible(false);
  };

  const updateDescription = () => {
    setIsModalVisible(true);
    setIsDescriptionVisible(true);
    setIsRatingVisible(false);
  };

  const deleteRating = async (rating) => {
    await RatingsService.deleteRating(rating);
    setTimeout(async () => {
      const list = await RatingsService.getAllRatings();
      if (props.page === "film") {
        setRatings(list.filter((rating) => rating.film === props.id));
      } else if (props.page === "user") {
        setRatings(list.filter((rating) => rating.user === props.id));
      }
    }, 300);
  };

  const onSubmit = async () => {
    if (isModalVisible) {
      if (isRatingVisible && isDescriptionVisible) {
        await RatingsService.createRating(useform, props.id, cookies.get('id'));
      } else if (isDescriptionVisible && !isRatingVisible) {
        await RatingsService.updateDescription(useform, ratingId);
      } else if (!isDescriptionVisible & isRatingVisible) {
        await RatingsService.updateRating(useform, ratingId);
      }
    }
    setTimeout(async () => {
      const list = await RatingsService.getAllRatings();
      if (props.page === "film") {
        setRatings(list.filter((rating) => rating.film === props.id));
      } else if (props.page === "user") {
        setRatings(list.filter((rating) => rating.user === props.id));
      }
      setIsModalVisible(false);
    }, 300);
  };

  const orderBy = async (order) => {
    const list = await RatingsService.orderBy(order);
    if (props.page === "film") {
      setRatings(list.filter((rating) => rating.film === props.id));
    } else if (props.page === "user") {
      setRatings(list.filter((rating) => rating.user === props.id));
    }
  };

  const getByDate = async (dates) => {
    const list = await RatingsService.getByDate(
      moment(dates[0]).format("YYYY-MM-DD") +
        ":" +
        moment(dates[1]).format("YYYY-MM-DD")
    );
    if (props.page === "film") {
      setRatings(list.filter((rating) => rating.film === props.id));
    } else if (props.page === "user") {
      setRatings(list.filter((rating) => rating.user === props.id));
    }
  };

  const getByRange = async (range) => {
    const list = await RatingsService.getByRange(range);
    if (props.page === "film") {
      setRatings(list.filter((rating) => rating.film === props.id));
    } else if (props.page === "user") {
      setRatings(list.filter((rating) => rating.user === props.id));
    }
  };

  const getByDescription = (description) => {
    console.log(description.nativeEvent.srcElement.defaultValue)
    setTimeout(async () => {
      var list = []
      if (
        description.nativeEvent.srcElement.defaultValue !== null &&
        description.nativeEvent.srcElement.defaultValue !== "undefined" &&
        description.nativeEvent.srcElement.defaultValue !== ''
      ) {
        list = await RatingsService.getByDescription(
          description.nativeEvent.srcElement.defaultValue
        );
        
      } else {
        list = await RatingsService.getAllRatings();
      }
      if (props.page === "film") {
        setRatings(list.filter((rating) => rating.film === props.id));
      } else if (props.page === "user") {
        setRatings(list.filter((rating) => rating.user === props.id));
      }
    }, 300);
  };

  const form = (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={useform}
    >
      {isRatingVisible ? (
        <Form.Item
          label="Puntuación"
          name="value"
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
              max: 5,
              message:
                "La puntuacion tiene que estar entre 0 y 5, y no estar vacía",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      ) : null}

      {isDescriptionVisible ? (
        <Form.Item
          label="Comentario"
          name="description"
          rules={[
            {
              required: true,
              type: "string",
              max: 500,
              message:
                "La introducción debe ser menor de 500 caracteres y no estar vacía",
            },
          ]}
        >
          <Input.TextArea placeholder="Esto es un comentario" />
        </Form.Item>
      ) : null}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );

  const modal = (
    <Modal
      visible={isModalVisible}
      title="Valoración"
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Volver
        </Button>,
      ]}
    >
      <div>{form}</div>
    </Modal>
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => orderBy("asc")}>Ascendente</span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={() => orderBy("des")}>Descendente</span>
      </Menu.Item>
    </Menu>
  );

  const { Search } = Input;
  const { RangePicker } = DatePicker;
  const { Panel } = Collapse;

  return (
    <div className="list">
      <h2 className="list-header">Valoraciones</h2>
      { props.page == "film"? (
        <Button type="primary" onClick={showModal}>
          Crear
        </Button>
      ) : null }
      <p></p>
      {modal}
      <Collapse>
        <Panel header="Filtros">
          <div className="filters">
            <Dropdown overlay={menu}>
              <span className="dropdown">
                Ordenar por <DownOutlined />
              </span>
            </Dropdown>
            <RangePicker
              placeholder={["Fecha inicio", "Fecha fin"]}
              onChange={(value) => getByDate(value)}
            />
            <span className="stars-range">
              Rango de estrellas
              <Slider
                range
                defaultValue={[1, 5]}
                max={5}
                min={1}
                onChange={(value) => getByRange(value)}
              />
            </span>
            <Search
              placeholder="Contenido en el comentario..."
              allowClear
              onChange={(value) => getByDescription(value)}
            />
          </div>
        </Panel>
      </Collapse>
      <List
        bordered="true"
        itemLayout="horizontal"
        pagination={{
          pageSize: 2,
        }}
        dataSource={ratings}
        renderItem={(rating) => (
          <List.Item
            key={rating._id}
            actions={
              props.page == "film" || props.page == "user"
                ? [
                    <Button
                      type="primary"
                      onClick={() => updateRating(rating._id)}
                      primary
                      ghost
                    >
                      Puntuación
                    </Button>,
                    <Button
                      type="primary"
                      onClick={() => updateDescription(rating._id)}
                      primary
                      ghost
                    >
                      Comentario
                    </Button>,
                    <Button
                      type="primary"
                      onClick={() => deleteRating(rating._id)}
                      danger
                      ghost
                    >
                      Borrar
                    </Button>,
                  ]
                : null
            }
          >
            {
              <List.Item.Meta
                className="item-meta"
                avatar={
                  <Avatar src="https://joeschmoe.io/api/v1/random" alt="user" />
                }
                title={[
                  props.username,
                  " ",
                  <Rate value={rating.value} disabled />,
                ]}
                description={
                  <span className="description">{rating.description}</span>
                }
              />
            }
            {<p className="date">{moment(rating.date).format("DD/MM/YYYY")}</p>}
          </List.Item>
        )}
      />
    </div>
  );
};

export default RatingApp;
