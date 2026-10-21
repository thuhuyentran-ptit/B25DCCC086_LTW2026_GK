import React from 'react';
import { GROUPS } from '../data';

const FilterBar = ({ search, setSearch, group, setGroup }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="search-input">Tìm kiếm: </label>
      <input
        id="search-input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nhập tên hoặc SĐT..."
        style={{ marginRight: '20px', padding: '5px' }}
      />

      <label htmlFor="group-select">Nhóm: </label>
      <select
        id="group-select"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        style={{ padding: '5px' }}
      >
        <option value="Tất cả">Tất cả</option>
        {GROUPS.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;