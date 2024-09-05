import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Sidebar.css'; // เพิ่มไฟล์ CSS สำหรับการจัดการรูปแบบ

const Sidebar = ({ isOpen, onClose, isLoggedIn, user }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      {isLoggedIn ? (
        <>
          <Link to="/Profile">
            <img src={user.image ? `data:image/jpeg;base64,${user.image}` : 'default-image-url'} alt="Profile" className="avatar" />
          </Link>
          <Link to="/Login" onClick={() => {
            localStorage.removeItem('token'); // ลบ token ออกจาก localStorage
            window.location.reload(); // รีเฟรชหน้าเพื่อลบสถานะล็อกอิน
          }}>Logout</Link>
        </>
      ) : (
        <Link to="/Login">Login</Link>
      )}
    </div>
  );
}

export default Sidebar;