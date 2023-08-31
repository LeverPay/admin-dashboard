import React from 'react';
import logo from '../../assets/LeverPayGold.png';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };
  return (
    <div className="bg-white w-full text-[#0F261D ] p-5">
      <div className="w-[150px] h-auto">
        <img src={logo} alt="leverpay logo" />
      </div>

      <div className="flex items-center justify-between h-[90vh] ">
        <div>
          <h2 className="text-green-950 text-[40px] font-normal leading-normal">
            Change Password
          </h2>
          <p className="text-gray-800 text-sm font-normal leading-none">
            Password must contain:{' '}
          </p>
          <p className="text-gray-800 text-sm font-normal leading-none">
            At least 10 characters
          </p>
          <p className="text-gray-800 text-sm font-normal leading-none">
            At least 1 Upper case letter (A-Z)
          </p>
          <p className="text-gray-800 text-sm font-normal leading-none">
            At least 1 lower case letter (A-Z)
          </p>
          <p className="text-gray-800 text-sm font-normal leading-none">
            At least 1 number (0-9)
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex items-start flex-col">
            <label className="text-gray-800 text-base font-normal leading-tight">
              Old Password
            </label>
            <input className="w-[568px] h-14 pl-2.5 rounded-[10px] border border-gray-800 border-opacity-20 outline-none" />
          </div>
          <div className="flex items-start flex-col">
            <label className="text-gray-800 text-base font-normal leading-tight">
              New Password{' '}
            </label>
            <input className="w-[568px] h-14 pl-2.5 rounded-[10px] border border-gray-800 border-opacity-20 outline-none" />
          </div>
          <div className="flex items-start flex-col">
            <label className="text-gray-800 text-base font-normal leading-tight">
              Confirm Password{' '}
            </label>
            <input className="w-[568px] h-14 pl-2.5 rounded-[10px] border border-gray-800 border-opacity-20 outline-none" />
          </div>
          <div
            className="w-[568px] h-14 p-2.5 bg-blue-600 rounded-[10px] justify-center cursor-pointer items-center gap-2.5 inline-flex"
            onClick={navigateToLogin}
          >
            <div className="text-white text-lg font-bold leading-normal">
              Change Password
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
