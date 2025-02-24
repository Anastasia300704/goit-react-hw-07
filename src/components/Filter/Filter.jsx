import React from 'react';
import { useDispatch } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Filter by name"
      />
    </div>
  );
};

export default Filter;
