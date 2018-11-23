import React from 'react';

export default function SearchBar({ search, onSearch }) {
  return (
    <div className="SearchBar">
      <form>
        <input
          type="text"
          name="search" placeholder="Search"
          value={search}
          onChange={onSearch} />
        <br />
      </form>
    </div>
  )
};

