import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '30px', background: '#f9eeee', marginBottom: '30px', fontSize: '18px' }}>
      <NavLink to="/" end style={{ marginRight: '15px' }}>Trang chủ</NavLink>
      <NavLink to="/contacts" style={{ marginRight: '15px' }}>Danh sách</NavLink>
      <NavLink to="/contacts/new">Thêm mới</NavLink>
    </nav>
  );
};

export default NavBar;