import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

function OrderBox() {
  const formik = useFormik({
    initialValues: {
      phonenumber: '',
      cardNumber: '',
      expairMounth: '',
      expairYear: '',
      cvv: '',
      address: '',
    },
    validationSchema: yup.object().shape({
      phonenumber: yup
        .string()
        .required('Обязательное поле')
        .matches(
          /^(\+7|8)[9][0-9]{9}$/,
          'Должно быть похоже на шаблон (+7|8)900 000 00 00'
        ),
      cardNumber: yup
        .string()
        .required('Обязательное поле')
        .matches(/^[0-9]{16}/, 'Должно содержать только цифры')
        .min(16, 'Слишком короткий номера карты'),
      expairMounth: yup
        .number()
        .required('Обязательное поле')
        .lessThan(13, 'Должно быть меньше 13'),
      expairYear: yup
        .number()
        .required('Обязательное поле')
        .moreThan(21, 'Должно быть больше 21'),
      cvv: yup.string().required('Обязательное поле'),
    }),
    onSubmit: (values) => {},
  });

  return (
    <section className="mx-2 shadow-sm p-5 mt-2">
      <Form onSubmit={formik.handleSubmit} className="col-md-6 mt-3 mt-mb-0">
        <h2>Информация о заказчике</h2>
        <Form.Group className="mb-4 form-floating">
          <Form.Control
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.errors.phonenumber && formik.touched.phonenumber}
            name="phonenumber"
            id="phonenumber"
            value={formik.values.phonenumber}
            placeholder="+79000000000"
            maxLength={12}
            type="tel"
          />
          <Form.Label htmlFor="phonenumber">Номер телефона</Form.Label>
          {formik.errors.phonenumber && formik.touched.phonenumber && (
            <Form.Control.Feedback type="invalid" tooltip>
              {formik.errors.phonenumber}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <h2>Информация о карте</h2>
        <Form.Group className="mb-4 form-floating">
          <Form.Control
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.errors.cardNumber && formik.touched.cardNumber}
            name="cardNumber"
            id="cardNumber"
            value={formik.values.cardNumber}
            type="numeric"
            maxLength={16}
          />
          <Form.Label htmlFor="cardNumber">Номер карты</Form.Label>
          {formik.errors.cardNumber && formik.touched.cardNumber && (
            <Form.Control.Feedback type="invalid" tooltip>
              {formik.errors.cardNumber}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="mb-4 form-floating">
          <Row>
            <Col>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.errors.expairMounth && formik.touched.expairMounth
                }
                name="expairMounth"
                id="expairMounth"
                placeholder="ММ"
                value={formik.values.expairMounth}
                maxLength={2}
              />
              {formik.errors.expairMounth && formik.touched.expairMounth && (
                <Form.Control.Feedback type="invalid" tooltip>
                  {formik.errors.expairMounth}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.errors.expairYear && formik.touched.expairYear
                }
                name="expairYear"
                id="expairYear"
                placeholder="ГГ"
                value={formik.values.expairYear}
                maxLength={2}
              />
              {formik.errors.expairYear && formik.touched.expairYear && (
                <Form.Control.Feedback type="invalid" tooltip>
                  {formik.errors.expairYear}
                </Form.Control.Feedback>
              )}
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-4 form-floating">
          <Form.Control
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.errors.cvv && formik.touched.cvv}
            name="cvv"
            id="cvv"
            maxLength={3}
            value={formik.values.cvv}
          />
          <Form.Label htmlFor="password">Cvv</Form.Label>
          {formik.errors.cvv && formik.touched.cvv && (
            <Form.Control.Feedback type="invalid" tooltip>
              {formik.errors.cvv}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <h2>Адрес</h2>
        <Form.Group className="mb-4 form-floating">
          <Form.Control
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.errors.address && formik.touched.address}
            name="address"
            id="address"
            maxLength={3}
            value={formik.values.address}
          />
          {formik.errors.address && formik.touched.address && (
            <Form.Control.Feedback type="invalid" tooltip>
              {formik.errors.address}
            </Form.Control.Feedback>
          )}
          <Form.Label htmlFor="password">Доставка</Form.Label>
        </Form.Group>
        <Button type="submit">Отправить</Button>
      </Form>
    </section>
  );
}

export default OrderBox;
