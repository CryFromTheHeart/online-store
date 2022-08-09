import React, { useRef } from 'react';
import { Pagination } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { getStorePageInfo } from '../selectors';
import { actions } from '../slices';
import ModalAddItem from './ModalAddItem';

function Item({
  id, name, desc, price,
}) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(actions.addToCart({ id, price }));
  };

  return (
    <div className="d-flex flex-wrap row border-top mx-3">
      <div className="col">
        <img
          src="https://cdn.coderons.com/general/tagsall/451d7704-a8b6-45f8-88a8-3fb8e11871be.png"
          alt="Пример картинки"
          className="d-block img-expample"
        />
      </div>
      <div className="col">
        <h3 className="border-bottom p-2">{name}</h3>
        <ul>
          {Object.values(desc).map(({ name, value }) => (
            <li key={value}>
              {name}
              {': '}
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex col flex-column p-3">
        <div className="d-flex justify-content-end fw-bold fs-2">
          {price}
          {' '}
          Р
        </div>
        <div className="d-flex justify-content-end">
          <Button onClick={handleAddToCart} className="">
            <AddShoppingCartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ItemBox() {
  const { page, chunkItems: items, pageCount } = useSelector(getStorePageInfo);

  const dispatch = useDispatch();

  const { openModal } = actions;

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const scrollRef = useRef();

  const handleChangePage = (event, value) => {
    dispatch(actions.setPage(value));
    scrollRef.current.scrollTop = 0;
  };

  return (
    <section ref={scrollRef} className="d-flex flex-column">
      <ModalAddItem />
      <div className="d-flex justify-content-between bg-light my-4 p-3 shadow-sm">
        <h2 className="text-muted">Товары</h2>
        <Button onClick={handleOpenModal}>
          <AddIcon />
        </Button>
      </div>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          desc={item.desc}
          price={item.price}
        />
      ))}
      <div>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          className="d-flex justify-content-center p-3"
          size="large"
        />
      </div>
    </section>
  );
}

export default ItemBox;
