import React from 'react';

const Home = ({ contacts }) => {
  const totalContacts = contacts.length;
  const favoriteContacts = contacts.reduce((acc, curr) => acc + (curr.favorite ? 1 : 0), 0);
  const gmailContacts = contacts.reduce((acc, curr) => acc + (curr.email && curr.email.endsWith('@gmail.com') ? 1 : 0), 0);

  return (
    <div style={{maxWidth:'700px', margin:'30px auto 30px 0px ', paddingLeft:'20px', backgroundColor:'#ffff', borderRadius: '12px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.08)', 
  border: '1px solid #e2e8f0', fontSize:'18px'}}>
      <h2>Trang chủ</h2>
      <p>Tổng số liên hệ: {totalContacts}</p>
      <p>Số liên hệ yêu thích: {favoriteContacts}</p>
      <p>Số liên hệ dùng Gmail: {gmailContacts}</p>
    </div>
  );
};

export default Home;