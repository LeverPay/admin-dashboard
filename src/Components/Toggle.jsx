import React from 'react';

const Toggle = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`toggle w-11 h-[19px] ${isOn ? 'active' : ''}`}
      onClick={handleToggle}
    >
      <div
        className="toggle-handle w-3.5 h-[14.78px] "
        style={{ transform: isOn ? 'translateX(26px)' : 'translateX(0)' }}
      ></div>
    </div>
  );
};

export default Toggle;
