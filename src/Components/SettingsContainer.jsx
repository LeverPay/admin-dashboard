import React, { useState } from 'react';
import Toggle from './Toggle';

const SettingsContainer = ({ headerText, text, warningText }) => {
  const [isAdminAreaAllowed, setIsAdminAreaAllowed] = useState(true);

  const handleAdminAreaToggle = () => {
    setIsAdminAreaAllowed((prevIsAdminAreaAllowed) => !prevIsAdminAreaAllowed);
  };

  return (
    <div className="adminArea">
      <div className="admin-area">
        <h2>{headerText}</h2>
        <p>{text}</p>
        <p>{warningText}</p>
      </div>
      <Toggle isOn={isAdminAreaAllowed} handleToggle={handleAdminAreaToggle} />
    </div>
  );
};

export default SettingsContainer;
