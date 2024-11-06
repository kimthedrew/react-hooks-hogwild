import React from 'react';

const Sorting = ({ setSortCriteria }) => {
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };
  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
};

export default Sorting;
