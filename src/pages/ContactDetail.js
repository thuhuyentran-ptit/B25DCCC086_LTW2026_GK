import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find(c => c.id === Number(id));

  const [isCalling, setIsCalling] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isCalling) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  if (!contact) {
    return <div>Không tìm thấy liên hệ.</div>;
  }

  const handleCall = () => {
    setSeconds(0);
    setIsCalling(true);
  };

  const handleEndCall = () => {
    setIsCalling(false);
  };

  return (
    <div>
      <h2>Trang chi tiết</h2>
      <p>Họ tên: {contact.name}</p>
      <p>Số điện thoại: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Nhóm: {contact.group}</p>
      <p>Yêu thích: {contact.favorite ? 'Có' : 'Không'}</p>

      {!isCalling ? (
        <button onClick={handleCall} style={{ marginRight: '10px' }}>Gọi</button>
      ) : (
        <button onClick={handleEndCall} style={{ marginRight: '10px' }}>Kết thúc</button>
      )}

      {isCalling && <p>Đang gọi... {seconds} giây</p>}

      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ContactDetail;