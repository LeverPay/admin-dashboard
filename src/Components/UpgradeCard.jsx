import React from 'react';
import request from '../assets/request-vector.svg';

const UpgradeCard = ({ title, number, color }) => {
  const cardStyle = {
    backgroundColor: color,
    width: '254px',
    height: '120px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    padding: '2px 5px',
    justifyContent: 'space-between',
  };

  return (
    <div style={cardStyle}>
      <img src={request} alt="" />
      <div className="flex items-end justify-end flex-col justify-items-end">
        <h2 className="text-white text-lg font-bold leading-normal">{title}</h2>
        <h2 className="text-white text-base font-bold leading-normal">
          {number}
        </h2>
      </div>
    </div>
  );
};

export default UpgradeCard;
