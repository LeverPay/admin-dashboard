import React from 'react';
import logo from '../../assets/LeverPayGold.png';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/constants';
import toast from 'react-hot-toast';

const EmailVerification = () => {
  const [token, setToken] = React.useState(['', '', '', '']);
  const inputRefs = React.useRef([]);
  const navigate = useNavigate();

  const navigateToEmailVerification = async () => {
    const enteredToken = token.join('');
    try {
      const response = await fetch(`${baseUrl}/v1/admin/admin-verify-email`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'X-CSRF-TOKEN': 'qdSGvov4yfN5oxhn6TI8JGrfXnvGu9OxKPeMFpbi',
        },
        body: `token=${enteredToken}`,
      });

      if (response.ok) {
        toast.success('Please enter your new password');
        navigate('/change-password');
      } else {
        // Handle errors here
        toast.error('Error: ' + response.message || 'Something went wrong');
      }
    } catch (error) {
      // Handle network errors
      toast.error('Network error:', error);
    }
  };

  React.useEffect(() => {
    document.title = 'Email Verification | LeverPay Admin';
    inputRefs.current[0].focus();
  }, []);

  const handleInputChange = (index, value) => {
    const newToken = [...token];
    newToken[index] = value;

    if (index < 3 && value !== '') {
      // Move focus to the next input field
      inputRefs.current[index + 1].focus();
    }

    setToken(newToken);
  };

  const navigateToBackToForgotPassword = () => {
    navigate('/forgot-password');
  };
  return (
    <div className="bg-white w-full text-[#0F261D ] p-3 md:p-5">
      <div className="w-[150px] h-auto">
        <img src={logo} alt="leverpay logo" />
      </div>

      <div className="flex items-center justify-center h-[90vh] flex-col space-y-3">
        <h2 className="text-gray-800 text-2xl font-bold">Email Verification</h2>
        <p className="text-gray-800 text-xl font-normal text-center leading-normal">
          Please enter the 4-digit code that was sent to your email{' '}
        </p>

        <div className="flex items-center justify-center gap-5">
          {token.map((digit, index) => (
            <input
              key={index}
              className="w-14 h-14 px-2.5 rounded-sm border border-gray-800 justify-start items-center gap-6 inline-flex"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              maxLength={1}
            />
          ))}
        </div>

        <div
          className="w-full md:w-[568px] h-14 p-2.5 my-3 md:my-5 text-center bg-blue-600 rounded-[10px] justify-center cursor-pointer items-center gap-2.5 flex"
          onClick={navigateToEmailVerification}
        >
          <div className="text-white text-lg font-bold leading-normal">
            {' '}
            Verify email address{' '}
          </div>
        </div>

        <div
          className="cursor-pointer"
          onClick={navigateToBackToForgotPassword}
        >
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
