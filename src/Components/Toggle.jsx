import React from 'react';

const Toggle = ({ isOn, handleToggle }) => {
  return (
    <div className={`toggle ${isOn ? 'active' : ''}`} onClick={handleToggle}>
      <div
        className="toggle-handle"
        style={{ transform: isOn ? 'translateX(26px)' : 'translateX(0)' }}
      ></div>
    </div>
  );
};

export default Toggle;
