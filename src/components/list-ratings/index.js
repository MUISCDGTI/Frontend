import React, { useState } from "react";
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
  InputNumber
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./index.css";
import moment from "moment";

const RatingApp = (props) => {

  var ratings = [
    {
      _id: "jsiodlekfn4",
      value: "1.5",
      description: "Mala pelicula",
      film: "1",
      user: "11",
      date: "2020-11-02T23:00:00.000+00:00",
    },
    {
      _id: "erogpiwnm5",
      value: "4.5",
      description: "Buena pelicula",
      film: "15",
      user: "19",
      date: "2021-12-02T23:00:00.000+00:00",
    },
    {
      _id: "srvwmpe1",
      value: "3",
      description: "Guay",
      film: "15",
      user: "11",
      date: "2021-12-16T17:00:00.000+00:00",
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isRatingVisible, setIsRatingVisible] = useState(true);

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);

  const updateRating = () => {
    setIsModalVisible(true);
    setIsRatingVisible(true);
    setIsDescriptionVisible(false);
  };

  const updateDescription = () => {
    setIsModalVisible(true);
    setIsDescriptionVisible(true);
    setIsRatingVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
    setIsDescriptionVisible(true);
    setIsRatingVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const form = (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      {isRatingVisible?
        <Form.Item
          label="Puntuación"
          name="rating"
          rules={[{ 
            required: true, 
            type: 'number',
            min: 0,
            max: 5,
            message: 'La puntuacion tiene que estar entre 0 y 5, y no estar vacía',
          }]}
        >
          <InputNumber />
        </Form.Item>
      :null}

      {isDescriptionVisible?
        <Form.Item
          label="Comentario"
          name="description"
          rules={[{ 
            required: true,
            type: 'string',
            max: 500, 
            message: 'La introducción debe ser menor de 500 caracteres y no estar vacía' 
          }]}
        >
          <Input.TextArea placeholder="Esto es un comentario" />
        </Form.Item>
      :null}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
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
        </Button>
      ]}
    >
      <p>{form}</p>
  </Modal>
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <span>Ascendente</span>
      </Menu.Item>
      <Menu.Item>
        <span>Descendente</span>
      </Menu.Item>
    </Menu>
  );

  const { Search } = Input;
  const { RangePicker } = DatePicker;
  const { Panel } = Collapse;

  if (props.page === "film") {
    ratings = ratings.filter((rating) => rating.film === props.id);
  } else if (props.page === "user") {
    ratings = ratings.filter((rating) => rating.user === props.id);
  }
  return (
    <div className="list">
      <h2 className="list-header">Valoraciones</h2>
      <Button type="primary" onClick={showModal}>
        Crear
      </Button>
      {modal}
      <p></p>
      <Collapse>
        <Panel header="Filtros">
          <div className="filters">
            <Dropdown overlay={menu}>
              <a className="dropdown">
                Ordenar por <DownOutlined />
              </a>
            </Dropdown>
            <RangePicker placeholder = {["Fecha inicio", "Fecha fin"]} />
            <span className="stars-range">Rango de estrellas<Slider range defaultValue={[1, 5]} max={5} min={1} /></span>
            <Search placeholder="Contenido en el comentario..." allowClear />
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
              props.page === "user"
                ? [
                    <Button type="primary" onClick={updateRating} primary ghost>
                      Puntuación
                    </Button>,
                    <Button type="primary" onClick={updateDescription} primary ghost>
                      Comentario
                    </Button>,
                    <Button type="primary" danger ghost>
                      Borrar
                    </Button>
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
