import React, { useState } from 'react';
import Toggle from './Toggle';

const SettingsContainer = ({ headerText, text, warningText }) => {
  const [isAdminAreaAllowed, setIsAdminAreaAllowed] = useState(true);

  const handleAdminAreaToggle = () => {
    setIsAdminAreaAllowed((prevIsAdminAreaAllowed) => !prevIsAdminAreaAllowed);
  };

  return (
    <div className="flex items-center justify-between  rounded border border-blue-900 px-4  ">
      <div className="">
        <h1 className="text-slate-900 text-sm font-bold pt-3">{headerText} </h1>
        <p className="text-slate-900 text-[13.15px] font-normal m-0">{text}</p>
        <p className="text-[#033AA3] font-normal cursor-pointer text-sm mt-0 mb-2">
          {warningText}
        </p>
      </div>
      <Toggle isOn={isAdminAreaAllowed} handleToggle={handleAdminAreaToggle} />
    </div>
  );
};

export default SettingsContainer;
