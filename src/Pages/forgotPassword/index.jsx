import React from 'react';
import logo from '../../assets/LeverPayGold.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../utils/constants';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const navigateToEmailVerification = async () => {
    try {
      setLoading(true);
      // Make a POST request to the API endpoint for forgot password
      await axios.post(
        `${baseUrl}/v1/admin/admin-forgot-password`,
        {
          email: email,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'X-CSRF-TOKEN': 'NkqJL4ZZ3uo7Sp489LDOLWwx1Ocx13vZIfpVEzNo',
          },
        }
      );

      toast.success('Password reset instructions sent to your email.');
      navigate('/email-verification');
    } catch (error) {
      toast.error(error?.response?.data.message || 'Forgot Password failed');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    document.title = 'Forgot Password | LeverPay Admin';
  }, []);

  return (
    <div className="bg-white w-full text-[#0F261D ] p-5">
      <div className="w-[150px] h-auto">
        <img src={logo} alt="leverpay logo" />
      </div>

      <div className="flex items-center justify-center h-[90vh] flex-col">
        <h2 className="text-center text-green-950 text-[40px] font-normal leading-normal">
          Forgot Password
        </h2>
        <p className="w-[430px] h-[23px] text-gray-800 text-sm font-normal leading-none">
          Please enter the email address used to register with lever pay
        </p>

        <input
          className="w-[568px] h-14 px-2.5 rounded-[10px] border border-gray-800 border-opacity-20 justify-between items-center gap-[227px] inline-flex text-gray-800 text-opacity-50 text-base font-normal leading-tight outline-none"
          type="email"
          required
          placeholder="Enter your email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div
          className="w-[568px] h-14 p-2.5 my-5 text-center bg-blue-600 rounded-[10px] justify-center cursor-pointer items-center gap-2.5 flex"
          onClick={navigateToEmailVerification}
        >
          <div className="text-white text-lg font-bold leading-normal">
            {' '}
            {loading ? 'Loading...' : 'Reset Password'}{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
