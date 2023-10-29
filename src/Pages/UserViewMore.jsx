import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import ProfileData from '../Components/ProfileData';
import UploadFiles from '../Components/UploadFiles';
import AccountBalance from '../Components/AccountBalance';
import UserMessage from '../Components/UserMessage';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import UserApprove from '../Components/UserApproval';
import { Link } from 'react-router-dom';

const onChange = (key) => {
  console.log(key);
};

const UserViewMore = () => {
  const [userData, setUserData] = useState([]);
  const authToken = Cookies.get('authToken');
  const location = useLocation()
  const {state} = location
  const user = state
  console.log(user)
  useEffect(() => {
    axios
      .get(
       ` https://leverpay-api.azurewebsites.net/api/v1/admin/get-user-details/${user}`
        ,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => setUserData(response.data.data))
      .catch((err) => console.log(err));
  }, [authToken]);

  console.log(userData)

  const items = [
    {
      key: '1',
      label: (
        <h2 className="w-[103px] text-black text-sm font-bold">
          Personal Data
        </h2>
      ),
      children: <ProfileData userData={userData} />,
    },
    {
      key: '2',
      label: (
        <h2 className="w-[155px] text-black text-sm font-bold">
          Upload files & ID Cards
        </h2>
      ),
      children: <UploadFiles userData={userData} />,
    },
    {
      key: '3',
      label: (
        <h2 className="w-[155px] text-blue-900 text-sm font-bold">
          Account Balance ( N )
        </h2>
      ),
      children: <AccountBalance userData={userData} />,
    },
    {
      key: '4',
      label: (
        <h2 className="w-[155px] text-blue-900 text-sm font-bold">Message</h2>
      ),
      children: <UserMessage userData={userData} />,
    },
    {
      key: '5',
      label: (
        <h2 className="w-[155px] text-blue-900 text-sm font-bold">Approve</h2>
      ),
      children: <UserApprove uuid={userData.uuid} />,
    }
  ];

  return (
    <div className="p-10">
            <p>
        <Link to='/users' style={{
        display: 'flex',
        gap:'5px',
        alignItems: 'center',
        color: 'black',
        fontWeight: '600'
      }}>
        <img src="/images/back1.png" alt="" width={20} /> Go back
        </Link>
      </p>
      <h2 className="text-neutral-700 text-2xl font-bold leading-normal">
        User Profile
      </h2>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
export default UserViewMore;
