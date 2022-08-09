/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItemsForCart } from '../selectors';
import { actions } from '../slices';
import routes from '../routes';

function Item({ id, name, desc, price, count }) {
  const dispatch = useDispatch();
  const { removeFromCart, incrementCountById, decreamentCountById } = actions;

  const handleDeleteItemsFromCart = () => {
    dispatch(removeFromCart({ id, count, price }));
  };

  const handleIncrementCountItemsCart = () => {
    dispatch(incrementCountById({ id, price }));
  };

  const handleDecrementCountItemsCart = () => {
    dispatch(decreamentCountById({ id, price }));
  };

  return (
    <div className="d-flex flex-wrap row border-top mx-3">
      <div className="col">
        <img
          src="https://cdn.coderons.com/general/tagsall/451d7704-a8b6-45f8-88a8-3fb8e11871be.png"
          alt="Пример картинки"
        />
      </div>
      <div className="col">
        <h3 className="border-bottom p-2">{name}</h3>
        <ul>
          {Object.values(desc).map(({ name: propertyName, value }) => (
            <li key={value}>
              {propertyName}
              {': '}
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="col d-flex flex-column p-3">
        <div className="d-flex justify-content-end fw-bold fs-2">
          {price}
          {' Р'}
        </div>
        <div className="d-flex justify-content-end">
          <Button onClick={handleDeleteItemsFromCart} variant="danger">
            Удалить
          </Button>
        </div>
        <div className="d-flex justify-content-end p-3">
          <button
            type="button"
            onClick={handleDecrementCountItemsCart}
            className="border-0 bg-white"
            disabled={count === 1}
          >
            -
          </button>
          <div className="border-bottom p-1">{count}</div>
          <button
            type="button"
            onClick={handleIncrementCountItemsCart}
            className="border-0 bg-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function CartBox() {
  const { items, cost } = useSelector(getItemsForCart);

  return items.length !== 0 ? (
    <div className="row">
      <div className="bg-light my-4 p-3 shadow-sm small">
        <h2 className="text-muted">Корзина</h2>
      </div>
      <section className="d-flex flex-column col-9">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
            count={item.count}
          />
        ))}
      </section>
      <div className="float-right" style={{ width: '200px' }}>
        <aside
          className="bg-light my-4 p-3 d-inline-block float-right"
          style={{ width: '200px' }}
        >
          <h3>Стоимость</h3>
          <div>
            {cost}
            {' Р'}
          </div>
        </aside>
        <Button as={Link} to={routes.orderPagePath()}>
          Оформить заказ
        </Button>
      </div>
    </div>
  ) : (
    <div className="row">
      <section className="d-flex flex-column">
        <div className="bg-light my-4 p-3 shadow-sm small">
          <h2 className="text-muted">Корзина</h2>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <h1>Корзина пуста</h1>
        </div>
      </section>
    </div>
  );
}

export default CartBox;
