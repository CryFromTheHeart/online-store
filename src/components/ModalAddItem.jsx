import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices';
import { getModalInfo } from '../selectors';

const ModalAddItem = () => {
  const dispatch = useDispatch();
  const { closeModal, addProperty, changePropertyInfo } = actions;
  const { isOpen, propInfo } = useSelector(getModalInfo);

  const handleAddProperty = () => {
    dispatch(addProperty());
  };

  const handleChangePropretyInfo =
    (key, id) =>
    ({ target }) => {
      const { value } = target;
      dispatch(changePropertyInfo({ key, id, value }));
    };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление товара</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mt-3 mt-mb-0">
          <Form.Group className="mb-2">
            <Form.Label>Название товара</Form.Label>
            <Form.Control></Form.Control>
            <Form.Label>Цена</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Form.Group className="mb-2">
            <Button onClick={handleAddProperty}>Добавить свойство</Button>
            {propInfo.map(({ title, value, id }) => (
              <Row key={id}>
                <Col>
                  <Form.Label></Form.Label>
                  <Form.Control
                    onChange={handleChangePropretyInfo('title', id)}
                    value={title}
                    placeholder="Введите название свойства"
                  ></Form.Control>
                </Col>
                <Col className="">
                  <div>
                    <Form.Label></Form.Label>
                    <Form.Control
                      onChange={handleChangePropretyInfo('value', id)}
                      value={value}
                      placeholder="Введите значение свойства"
                    ></Form.Control>
                  </div>
                  <div className="d-flex justify-content-end mt-1">
                    <Button variant="danger">удалить</Button>
                  </div>
                </Col>
              </Row>
            ))}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddItem;
