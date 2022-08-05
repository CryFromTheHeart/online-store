import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices';
import items from '../../../__fixtures__/items';
import ItemBox from '../ItemBox';
import FiltersBox from '../FiltersBox';

const StorePage = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const { setInitialState, setSort } = actions;

  const handleClickSortButton = (name) => () => {
    dispatch(setSort(name));
  };

  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      dispatch(setInitialState(items));
      setLoaded(true);
    }, 1000);
  }, []);

  return loaded ? (
    <div className="container my-4">
      <div className="row">
        <div className="col-3 overflow-hidden border-end pt-5 px-4 bg-light">
          <div className="">Категории</div>
          <FiltersBox />
        </div>
        <div className="col">
          <div className="d-flex p-2 sortBox">
            <span className="text-muted">Сортировать по</span>
            <button
              className="sortButton"
              onClick={handleClickSortButton('LOWPRICE')}
            >
              <span>Сначала недорогие</span>
            </button>
            <button
              className="sortButton"
              onClick={handleClickSortButton('HIGHERPRICE')}
            >
              <span>Сначала дорогие</span>
            </button>
            <button
              className="sortButton"
              onClick={handleClickSortButton('NAME')}
            >
              <span>По названию</span>
            </button>
          </div>
          <div>
            <ItemBox />
          </div>
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
