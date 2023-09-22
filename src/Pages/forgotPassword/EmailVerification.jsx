import React from 'react';
import logo from '../../assets/LeverPayGold.png';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const navigate = useNavigate();
  const navigateToEmailVerification = () => {
    navigate('/change-password');
  };

  React.useEffect(() => {
    document.title = 'Email Verification | LeverPay Admin';
  }, []);

  return (
    <div className="bg-white w-full text-[#0F261D ] p-5">
      <div className="w-[150px] h-auto">
        <img src={logo} alt="leverpay logo" />
      </div>

      <div className="flex items-center justify-center h-[90vh] flex-col space-y-3">
        <h2 className="text-gray-800 text-2xl font-bold">Email Verification</h2>
        <p className="text-gray-800 text-xl font-normal leading-normal">
          Please enter the 4-digit code that was sent to your email{' '}
        </p>

        <div className="flex items-center justify-center gap-5">
          <input className="w-14 h-14 px-2.5 rounded-sm border border-gray-800 justify-start items-center gap-6 inline-flex" />
          <input className="w-14 h-14 px-2.5 rounded-sm border border-gray-800 justify-start items-center gap-6 inline-flex" />
          <input className="w-14 h-14 px-2.5 rounded-sm border border-gray-800 justify-start items-center gap-6 inline-flex" />
          <input className="w-14 h-14 px-2.5 rounded-sm border border-gray-800 justify-start items-center gap-6 inline-flex" />
        </div>

        <div
          className="w-[568px] h-14 p-2.5 my-5 text-center bg-blue-600 rounded-[10px] justify-center cursor-pointer items-center gap-2.5 flex"
          onClick={navigateToEmailVerification}
        >
          <div className="text-white text-lg font-bold leading-normal">
            {' '}
            Verify email address{' '}
          </div>
        </div>

        <div>
          <span className="text-gray-800 text-base font-normal leading-tight">
            Didn’t get a code?{' '}
          </span>
          <span className="text-blue-600 text-base font-bold underline leading-tight">
            Resend
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
