import React from 'react';
import {
  Form, Row, Col, Modal, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { uniqueId } from 'lodash';
import { getModalInfo } from '../selectors';
import { actions } from '../slices';

function ModalAddItem() {
  const dispatch = useDispatch();
  const {
    closeModal, addProperty, changePropertyInfo, addItem,
  } = actions;
  const { isOpen, propInfo } = useSelector(getModalInfo);

  const handleAddProperty = () => {
    dispatch(addProperty());
  };

  const handleChangePropretyInfo = (key, id) => ({ target }) => {
    const { value } = target;
    dispatch(changePropertyInfo({ key, id, value }));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Обязательное поле'),
      price: yup.string().required('Обязательное поле'),
    }),
    onSubmit: (values) => {
      const desc = Object.fromEntries(
        propInfo.map(({ title, value }) => [title, value]),
      );
      const item = { id: uniqueId(), desc, ...values };
      dispatch(addItem(item));
      formik.resetForm();
    },
  });

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление товара</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit} className="mt-3 mt-mb-0">
          <Form.Group className="mb-2">
            <Form.Label>Название товара</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              isInvalid={formik.errors.name && formik.touched.name}
              name="name"
              id="name"
            />
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              isInvalid={formik.errors.price && formik.touched.price}
              name="price"
              id="price"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Button onClick={handleAddProperty}>Добавить свойство</Button>
            {propInfo.map(({ title, value, id }) => (
              <Row key={id}>
                <Col>
                  <Form.Label />
                  <Form.Control
                    onChange={handleChangePropretyInfo('title', id)}
                    value={title}
                    placeholder="Введите название свойства"
                  />
                </Col>
                <Col className="">
                  <div>
                    <Form.Label />
                    <Form.Control
                      onChange={handleChangePropretyInfo('value', id)}
                      value={value}
                      placeholder="Введите значение свойства"
                    />
                  </div>
                  <div className="d-flex justify-content-end mt-1">
                    <Button variant="danger">удалить</Button>
                  </div>
                </Col>
              </Row>
            ))}
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit">Добавить</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddItem;
