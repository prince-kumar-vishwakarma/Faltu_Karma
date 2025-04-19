import React from 'react';
import './Card.css';

const Card = ({ icon, para, heading, isSelected, onClick }) => {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{
        border: isSelected ? '2px solid #007bff' : '1px solid #ccc',
        backgroundColor: isSelected ? '#f0f8ff' : '#fff',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        borderRadius: '10px',
        padding: '16px',
        boxShadow: isSelected ? '0 0 10px rgba(0, 123, 255, 0.2)' : 'none',
      }}
    >
      <div className="icon">{icon}</div>
      <h3>{heading}</h3>
      <p>{para}</p>
    </div>
  );
};

export default Card;
