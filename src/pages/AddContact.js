import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GROUPS } from '../data';

const AddContact = ({ contacts, onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState(GROUPS[1]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin phía dưới form và không thêm.');
      return;
    }

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError('Số điện thoại phải gồm 10 chữ số và bắt đầu bằng số 0');
      return;
    }

    if (!email.includes('@')) {
      setError('Email không hợp lệ');
      return;
    }

    setError('');
    const maxId = contacts.length > 0 ? Math.max(...contacts.map(c => Number(c.id))) : 0;
    const newContact = {
      id: maxId + 1,
      name,
      phone,
      email,
      group,
      favorite: false
    };

    onAddContact(newContact);
    navigate('/contacts', { replace: true });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto 30px 0px', padding: '60px', backgroundColor: '#f6f3f3', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', fontSize: '20px' }}>
      <h2>Thêm mới liên hệ</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name-input">Họ tên: </label>
          <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="phone-input">Số điện thoại: </label>
          <input id="phone-input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email-input">Email: </label>
          <input id="email-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="group-input">Nhóm: </label>
          <select id="group-input" value={group} onChange={(e) => setGroup(e.target.value)}>
            {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddContact;