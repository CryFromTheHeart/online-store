import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';

const OrderBox = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {},
  });

  return (
    <section className="mx-2 shadow-sm p-5 mt-2">
      <Form className="col-md-6 mt-3 mt-mb-0">
        <h2>Информация о заказчике</h2>
        <Form.Group className="mb-2">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control
            placeholder="+79000000000"
            maxLength={12}
            type="tel"
          ></Form.Control>
        </Form.Group>
        <h2>Информация о карте</h2>
        <Form.Group className="mb-2">
          <Form.Label>Номер карты</Form.Label>
          <Form.Control maxLength={16}></Form.Control>
          <Form.Label>Период действия</Form.Label>
          <Row>
            <Col>
              <Form.Control placeholder="ГГ" maxLength={2}></Form.Control>
            </Col>
            <Col>
              <Form.Control placeholder="ММ" maxLength={2}></Form.Control>
            </Col>
          </Row>
          <Form.Label>Cvv</Form.Label>
          <Form.Control maxLength={3}></Form.Control>
        </Form.Group>
        <h2>Адрес</h2>
        <Form.Group className="mb-2">
          <Form.Label>Доставка</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
    </section>
  );
};

export default OrderBox;
