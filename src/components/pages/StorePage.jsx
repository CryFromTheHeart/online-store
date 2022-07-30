import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices';
import items from '../../../__fixtures__/items';
import ItemBox from '../ItemBox';

const StorePage = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const { setInitialState } = actions;

  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      dispatch(setInitialState(items));
      setLoaded(true);
    }, 1000);
  }, []);

  return loaded ? (
    <div className="container shadow rounded my-4">
      <div className="row">
        <div className="col-3 overflow-hidden border-end pt-5 px-2">
          <div className="">Категории</div>
        </div>
        <div className="col">
          <ItemBox />
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Загрузка</span>
      </Spinner>
    </div>
  );
};

export default StorePage;
