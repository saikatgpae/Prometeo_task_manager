import React from 'react';

export default function Filter(prop) {
  const { titleSearch } = prop;
  return (

    <select data-testid="select-menu-input" onChange={titleSearch} className="filter-menu" id="filter-menu">
      <option>all</option>
      <option>complete</option>
      <option>incomplete</option>
    </select>

  );
}
