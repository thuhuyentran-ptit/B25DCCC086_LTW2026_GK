import React from 'react';
import { Link } from 'react-router-dom';

const ContactRow = ({ contact, onToggleFavorite, onDelete }) => {
  const isFavorite = contact.favorite;

  return (
    <tr 
      style={{ background: isFavorite ? '#fff9db' : 'transparent' }}
      onMouseEnter={(e) => e.currentTarget.style.background = '#e7f5ff'}
      onMouseLeave={(e) => e.currentTarget.style.background = isFavorite ? '#fff9db' : 'transparent'}
    >
      <td>
        <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
      </td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>{contact.group}</td>
      <td>
        <button onClick={() => onToggleFavorite(contact.id)} style={{ marginRight: '5px' }}>
          {isFavorite ? 'Bỏ yêu thích' : 'Yêu thích'}
        </button>
        <button onClick={() => onDelete(contact.id)}>Xóa</button>
      </td>
    </tr>
  );
};

export default ContactRow;