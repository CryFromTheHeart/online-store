import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { actions } from '../slices';
import { getFilters } from '../selectors';

function FilterCheckBox({ type, info }) {
  const { name, filterList } = info;

  const dispatch = useDispatch();
  const { activeFilter } = actions;

  const handleChangeFilter =
    (type) =>
    ({ target }) => {
      const { value } = target;
      dispatch(activeFilter({ type, value }));
    };

  return (
    <div>
      <h5>{name}</h5>
      <select className="my-2" onChange={handleChangeFilter(type)}>
        <option value="">Все</option>
        {filterList.map((filterName) => (
          <option key={filterName} value={filterName}>
            {filterName}
          </option>
        ))}
      </select>
    </div>
  );
}

function FiltersBox() {
  const dispatch = useDispatch();
  const { resetFilters } = actions;

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const { filters } = useSelector(getFilters);

  return (
    <div className="d-flex flex-column">
      <Button onClick={handleResetFilters}>Отчистить фильтры</Button>
      {Object.entries(filters).map(([type, info]) => (
        <FilterCheckBox key={type} type={type} info={info} />
      ))}
    </div>
  );
}

export default FiltersBox;
