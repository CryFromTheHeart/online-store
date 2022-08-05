import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../slices';

const FiltersBox = () => {
  const dispatch = useDispatch();
  const { addFilter } = actions;

  const handleChangeFilter =
    (type) =>
    ({ target }) => {
      const { value } = target;
      dispatch(addFilter({ type, value }));
    };

  return (
    <div>
      <select onChange={handleChangeFilter('processor')}>
        <option value="">Все</option>
        <option value="amd">Amd</option>
        <option value="intel">Intel</option>
      </select>
      <select onChange={handleChangeFilter('ram')}>
        <option value="">Все</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
    </div>
  );
};

export default FiltersBox;
