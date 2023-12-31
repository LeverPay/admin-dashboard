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
import { Link } from 'react-router-dom';

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


  useEffect(() => {
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
      children: <MerchantData selectedMerchant={merchantData ? merchantData : ''} />,
    },
    {
      key: '2',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          KYC
        </h2>
      ),
      children: <MerchantUpload merchantData={merchantData} />,
    },
    {
      key: '3',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
         Business Profile
        </h2>
      ),
      children: <MerchantBusinessData merchantData={merchantData} />,
    },
    {
      key: '4',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Bank Details
        </h2>
      ),
      children: <MerchantBankDetails merchantData={merchantData} />,
    },
    {
      key: '5',
      label: (
        <h2 className="w-[155px] text-center text-white text-sm font-bold">
          Wallet Address
        </h2>
      ),
      children: <MerchantWalletAdress merchantData={merchantData} />,
    },
    {
      key: '6',
      label: (
        <h2 className="text-center text-white text-sm font-bold">Message</h2>
      ),
      children: <MerchantMessage merchantData={merchantData} />,
    },
    {
      key: '7',
      label: (
        <h2 className="text-center text-white text-sm font-bold">Approve</h2>
      ),
      children: <MerchantApprove merchantData={merchantData} uuid={uuid} />,
    },
  ];
  return (
    <div className="bg-slate-900 p-0">
      {
        merchantData && <>
          <p>
        <Link to='/merchant' style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        color: 'white',
        fontWeight: '600'
      }}>
        <img src="/images/back.png" alt="" width={25} /> Go back
        </Link>
      </p>
      <div style={{padding: "0 2rem", minHeight: '100vh'}} >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
        </>
      }
      
    </div>
  );
};
export default MerchantViewMore;
