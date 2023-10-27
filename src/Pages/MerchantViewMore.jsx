import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import ProfileData from '../Components/ProfileData';
import UploadFiles from '../Components/UploadFiles';
import AccountBalance from '../Components/AccountBalance';
import UserMessage from '../Components/UserMessage';
import MerchantData from '../Components/MerchantData';
import MerchantBusinessData from '../Components/MerchantBusinessData';
import MerchantBankDetails from '../Components/MerchantBankDetails';
import MerchantUpload from '../Components/MerchantUpload';
import MerchantMessage from '../Components/MerchantMessage';
import MerchantWalletAdress from '../Components/MerchantWalletAdress';
import { baseUrl } from '../utils/constants';
import Cookies from 'js-cookie';
import axios from 'axios';
import MerchantApprove from '../Components/MerchantApprove';
import { useLocation } from 'react-router-dom';
import { tr } from 'date-fns/locale';

const onChange = (key) => {
  console.log(key);
};

const authToken = Cookies.get('authToken');

const MerchantViewMore = () => {
  const [merchantData, setMerchantData] = useState([]);
  const [data, setData] = useState(false)
  const location = useLocation()
  const {state} = location
  const uuid = state
  console.log(uuid)
  // function extractIdFromCurrentURL() {
  //   // Get the current URL
  //   const currentURL = window.location.href;

  //   // Split the URL by '/'
  //   const parts = currentURL.split('/');

  //   // Get the last part of the URL (the UUID-like string)
  //   const id = parts[parts.length - 1];

  //   return id;
  // }

  // Call the function to extract the ID from the current URL
  // const extractedId = extractIdFromCurrentURL();
  // console.log(extractedId)

  useEffect(() => {
    // Define your API URL and headers
    // const apiUrl = `${baseUrl}/v1/admin/get-user/${uuid}`;
    const apiUrl = `${baseUrl}v1/admin/get-merchant-details/${uuid}`;
    const headers = {
      accept: '*/*',
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': '0JOsbnxa95Uu5iRjosgcbTRJs0QphDZKY3PqfYP9',
    };

    // Fetch data from the API
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setMerchantData(response.data.data);
        setData(true)
        console.log(response)
        // setData(response.data.data.filter(user => user.uuid === uuid))
      })
      .catch((error) => {
        console.error('Error:', error);
        setData(false)
      });
  }, []);
    console.log(merchantData)

  // const selectedMerchant =
  //   merchantData &&
  //   merchantData?.find((merchant) => merchant.uuid === extractedId);

  const items = [
    {
      key: '1',
      label: (
        <h2 className="text-center text-white text-sm font-bold">
          Director’s Data
        </h2>
      ),
      children: <MerchantData selectedMerchant={data ? merchantData: ''} />,
    },
    {
      key: '2',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Upload files & ID Cards
        </h2>
      ),
      children: <MerchantUpload merchantData={data ? merchantData: ''} />,
    },
    {
      key: '3',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Business Profile
        </h2>
      ),
      children: <MerchantBusinessData merchantData={data ? merchantData: ''} />,
    },
    {
      key: '4',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Bank Details
        </h2>
      ),
      children: <MerchantBankDetails merchantData={data ? merchantData: ''} />,
    },
    {
      key: '5',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Wallet Address
        </h2>
      ),
      children: <MerchantWalletAdress merchantData={data ? merchantData: ''} />,
    },
    {
      key: '6',
      label: (
        <h2 className="text-center text-white text-sm font-bold">Message</h2>
      ),
      children: <MerchantMessage merchantData={data ? merchantData: ''} />,
    },
    {
      key: '7',
      label: (
        <h2 className="text-center text-white text-sm font-bold">Approve</h2>
      ),
      children: <MerchantApprove merchantData={data ? merchantData: ''} uuid={uuid} />,
    },
  ];
  return (
    <div className="bg-slate-900 p-0">
      <div className="p-10">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};
export default MerchantViewMore;
