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

const onChange = (key) => {
  console.log(key);
};

const authToken = Cookies.get('authToken');

const MerchantViewMore = () => {
  const [merchantData, setMerchantData] = useState([]);

  function extractIdFromCurrentURL() {
    // Get the current URL
    const currentURL = window.location.href;

    // Split the URL by '/'
    const parts = currentURL.split('/');

    // Get the last part of the URL (the UUID-like string)
    const id = parts[parts.length - 1];

    return id;
  }

  // Call the function to extract the ID from the current URL
  const extractedId = extractIdFromCurrentURL();

  useEffect(() => {
    // Define your API URL and headers
    const apiUrl = `${baseUrl}/v1/admin/get-all-merchants`;
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
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  }, []);
  console.log('merchantData', merchantData);

  const selectedMerchant =
    merchantData &&
    merchantData?.find((merchant) => merchant.uuid === extractedId);

  const items = [
    {
      key: '1',
      label: (
        <h2 className="text-center text-white text-sm font-bold">
          Director’s Data
        </h2>
      ),
      children: <MerchantData selectedMerchant={selectedMerchant} />,
    },
    {
      key: '2',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Upload files & ID Cards
        </h2>
      ),
      children: <MerchantUpload />,
    },
    {
      key: '3',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Business Profile
        </h2>
      ),
      children: <MerchantBusinessData />,
    },
    {
      key: '4',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Bank Details
        </h2>
      ),
      children: <MerchantBankDetails />,
    },
    {
      key: '5',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Wallet Address
        </h2>
      ),
      children: <MerchantWalletAdress />,
    },
    {
      key: '6',
      label: (
        <h2 className="text-center text-white text-sm font-bold">Message</h2>
      ),
      children: <MerchantMessage />,
    },
  ];
  return (
    <div className="bg-slate-900 p-10">
      <div className="p-10">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};
export default MerchantViewMore;
