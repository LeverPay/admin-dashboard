import React from 'react';
import logo from '../../assets/LeverPayGold.png';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { baseUrl } from '../../utils/constants';
import axios from 'axios';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'Change Password | LeverPay Admin';
  }, []);

  const navigateToLogin = async () => {
    // Password validation logic
    if (newPassword.length < 10) {
      toast.error('Password must be at least 10 characters long.');
      return;
    }

    if (!/[a-z]/.test(newPassword)) {
      toast.error('Password must contain at least one lowercase letter (a-z).');
      return;
    }

    if (!/[A-Z]/.test(newPassword)) {
      toast.error('Password must contain at least one uppercase letter (A-Z).');
      return;
    }

    if (!/[0-9]/.test(newPassword)) {
      toast.error('Password must contain at least one number (0-9).');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error('New Password and Confirm Password do not match.');
      return;
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(newPassword)) {
      toast.error(
        'Password must contain at least one symbol (!@#$%^&*()_+{}[]:;<>,.?~-).'
      );
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/v1/admin/admin-reset-password`,
        {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_new_password: confirmNewPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json', // Use JSON content type
            'X-CSRF-TOKEN': 'qdSGvov4yfN5oxhn6TI8JGrfXnvGu9OxKPeMFpbi',
          },
        }
      );

      if (response.status === 200) {
        toast.success('Password changed successfully');
        navigate('/login');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || 'Something went wrong');
      } else {
        toast.error('Network error');
      }
    }
  };

  return (
    <div className="bg-white w-full text-[#0F261D ] p-3 md:p-5">
      <div className="w-[150px] h-auto">
        <img src={logo} alt="leverpay logo" />
      </div>

      <div className="flex lg:items-center items-start md:mt-0 mt-4 lg:flex-row flex-col justify-between h-[90vh] ">
        <div>
          <h2 className="text-green-950 md:text-[50px] lg:text-[40px] font-normal leading-normal">
            Change Password
          </h2>
          <p className="text-gray-800 lg:text-sm md:text-xl text-sm font-normal leading-none">
            Password must contain:{' '}
          </p>
          <p className="text-gray-800 lg:text-sm md:text-xl text-sm font-normal leading-none">
            At least 10 characters
          </p>
          <p className="text-gray-800 lg:text-sm md:text-xl text-sm font-normal leading-none">
            At least 1 Upper case letter (A-Z)
          </p>
          <p className="text-gray-800 lg:text-sm md:text-xl text-sm font-normal leading-none">
            At least 1 lower case letter (A-Z)
          </p>
          <p className="text-gray-800 lg:text-sm md:text-xl text-sm font-normal leading-none">
            At least 1 number (0-9)
          </p>
          <p className="text-gray-800 lg:text-sm md:text-xl text-sm font-normal leading-none">
            At least 1 symbol
          </p>
        </div>

        <div className="md:space-y-5 space-y-3 w-full lg:w-auto">
          <div className="flex items-start flex-col">
            <label className="text-gray-800 text-base font-normal leading-tight">
              Old Password
            </label>
            <input
              className="lg:w-[568px] w-full   h-14 pl-2.5 rounded-[10px] border border-gray-800 border-opacity-20 outline-none"
              type="password"
              // placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start flex-col">
            <label className="text-gray-800 text-base font-normal leading-tight">
              New Password{' '}
            </label>
            <input
              className="lg:w-[568px] w-full h-14 pl-2.5 rounded-[10px] border border-gray-800 border-opacity-20 outline-none"
              type="password"
              // placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start flex-col">
            <label className="text-gray-800 text-base font-normal leading-tight">
              Confirm Password{' '}
            </label>
            <input
              className="lg:w-[568px] w-full h-14 pl-2.5 rounded-[10px] border border-gray-800 border-opacity-20 outline-none"
              // placeholder="Confirm Password"
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <div
            className="lg:w-[568px] w-full h-14 p-2.5 bg-blue-600 rounded-[10px] justify-center cursor-pointer items-center gap-2.5 inline-flex"
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
