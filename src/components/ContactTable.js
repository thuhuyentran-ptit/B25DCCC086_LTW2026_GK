import React from 'react';
import ContactRow from './ContactRow';

const ContactTable = ({ contacts, onToggleFavorite, onDelete }) => {
  return (
    <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Họ tên</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Nhóm</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onToggleFavorite={onToggleFavorite}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;