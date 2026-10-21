import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import ContactList from './pages/ContactList';
import AddContact from './pages/AddContact';
import ContactDetail from './pages/ContactDetail';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('gk_contacts');
    if (saved) {
      try {
        setContacts(JSON.parse(saved));
        setLoading(false);
        return;
      } catch (e) {
        console.error(e);
      }
    }

    const controller = new AbortController();
    axios.get('/data/contacts.json', { signal: controller.signal })
      .then(res => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (!axios.isCancel(err)) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('gk_contacts', JSON.stringify(contacts));
    }
  }, [contacts, loading]);

  const handleToggleFavorite = (id) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, favorite: !c.favorite } : c));
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home contacts={contacts} />} />
        <Route path="contacts" element={<ContactList contacts={contacts} onToggleFavorite={handleToggleFavorite} onDelete={handleDelete} />} />
        <Route path="contacts/new" element={<AddContact contacts={contacts} onAddContact={handleAddContact} />} />
        <Route path="contacts/:id" element={<ContactDetail contacts={contacts} />} />
      </Route>
    </Routes>
  );
};

export default App;