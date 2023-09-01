import React from 'react';
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
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: (
      <h2 className="text-center text-white text-sm font-bold">
        Director’s Data
      </h2>
    ),
    children: <MerchantData />,
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
const MerchantViewMore = () => (
  <div className="bg-slate-900 p-10">
    <div className="p-10">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  </div>
);
export default MerchantViewMore;
