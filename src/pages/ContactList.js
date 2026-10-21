import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import ContactTable from '../components/ContactTable';

const ContactList = ({ contacts, onToggleFavorite, onDelete }) => {
  const [search, setSearch] = useState('');
  const [group, setGroup] = useState('Tất cả');

  const filteredContacts = contacts.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search);
    const matchGroup = group === 'Tất cả' || c.group === group;
    return matchSearch && matchGroup;
  });

  return (
    <div>
      <h2>Danh sách liên hệ</h2>
      <FilterBar search={search} setSearch={setSearch} group={group} setGroup={setGroup} />
      <p>
        {filteredContacts.length > 0 
          ? `Tìm thấy ${filteredContacts.length} liên hệ` 
          : 'Không có dữ liệu'}
      </p>
      {filteredContacts.length > 0 && (
        <ContactTable
          contacts={filteredContacts}
          onToggleFavorite={onToggleFavorite}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default ContactList;