import React, { useState, useEffect } from 'react';
import SidebarLayout from '../Layouts/SidebarLayout';
import { DashboardView } from '../css/DashboardPageStyles';

import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import axios from 'axios';
import Cookies from 'js-cookie';

import { baseUrl } from '../utils/constants';
import toast from 'react-hot-toast';

// Define a function to format the transactionDate
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, 'yyyy-MM-dd'); // Format date to 'yyyy-MM-dd'
};

const BankDetails = () => {
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchangeResponse, setExchangeResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      field: 'created_at',
      renderHeader: (params) => (
        <h2 className="w-[84.34px] text-white text-[15px] font-bold font-['Inter'] leading-3 tracking-tight">
          Date |Time
        </h2>
      ),
      flex: 1,
      headerAlign: 'left',
      headerClassName: 'bg-purple-950',
      valueFormatter: (params) => formatDate(params.value), // Format the date
    },
    {
      field: 'bank',
      renderHeader: (params) => (
        <h2 className="w-[84.34px] text-white text-[15px] font-bold font-['Inter'] leading-3 tracking-tight">
          Bank Name{' '}
        </h2>
      ),
      flex: 1,
      headerClassName: 'bg-purple-950',
      headerAlign: 'left',
    },
    {
      field: 'account_number',
      renderHeader: (params) => (
        <h2 className="w-[84.34px] text-white text-[15px] font-bold font-['Inter'] leading-3 tracking-tight">
          Account Number{' '}
        </h2>
      ),
      flex: 1,
      headerClassName: 'bg-purple-950',
      headerAlign: 'left',
    },
    {
      field: 'account_name',
      renderHeader: (params) => (
        <h2 className="w-[84.34px] text-white text-[15px] font-bold font-['Inter'] leading-3 tracking-tight">
          Account Name{' '}
        </h2>
      ),
      flex: 1,
      headerClassName: 'bg-purple-950',
      headerAlign: 'left',
    },
  ];

  const authToken = Cookies.get('authToken');

  const customRowStyle =
    'w-[123px] text-black text-sm font-bold font-["Inter"] leading-normal';

  useEffect(() => {
    setIsLoading(true);
    // Define your API URL and headers
    const apiUrl = `${baseUrl}/v1/admin/get-account-numbers`;
    const headers = {
      accept: '*/*',
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json', // Set content type to JSON
      'X-CSRF-TOKEN': 'Mz2LlEv9idAlFIpHpqNjMjTmTetXRznlihUkZmQW',
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setExchangeResponse(response?.data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both bank and accountNumber are provided
    if (!bank || !accountNumber) {
      toast.error('Please fill in the required fields');
      return;
    }

    // Define the request payload
    const requestData = {
      bank,
      account_number: accountNumber,
    };

    // Configure the request headers
    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': 'Mz2LlEv9idAlFIpHpqNjMjTmTetXRznlihUkZmQW',
    };

    // Set loading state to true
    setLoading(true);

    // Send the POST request
    axios
      .post(`${baseUrl}/v1/admin/add-account-number`, requestData, { headers })
      .then((response) => {
        // Handle a successful response
        toast.success('Account Created');
        console.log('Response:', response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
        toast.error('An error occurred while submitting.');
      })
      .finally(() => {
        // Set loading state to false, regardless of success or failure
        setLoading(false);
      });
  };

  return (
    <SidebarLayout>
      <DashboardView>
        <div className="w-full p-2 flex items-end justify-end">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
            className="w-10 h-10 rounded-full mr-4"
          />
        </div>

        <div className="px-3">
          <h2 className="text-indigo-950 text-xl md:text-2xl font-bold font-['Inter'] leading-normal">
            Set Bank Account Details
          </h2>
          <div className="bg-neutral-50 p-3 md:p-5 shadow-sm w-full  md:w-max h-max md:rounded-[44px]">
            <h3 className="text-left flex flex-col gap-2 md:flex-row text-black text-base md:text-xl font-bold font-['Inter'] leading-[10px] md:leading-[23px]">
              Account Name: <span> Leverchain Technology Limited</span>
            </h3>
            <form
              action=""
              className="grid grid-cols-1 gap-4"
              onSubmit={handleSubmit}
            >
              {renderFormField('Bank Name', bank, setBank, 'text')}
              {renderFormField(
                'Account Number',
                accountNumber,
                setAccountNumber,
                'number'
              )}
              {renderSaveButton({ loading })}
            </form>
          </div>

          {/* Table */}
          <div className="users__tab__padding">
            {isLoading ? (
              <div className="text-slate-500 text-sm font-normal font-['Agrandir'] leading-normal flex items-center justify-center">
                Loading Bank Account Details
              </div>
            ) : (
              <DataGrid
                getRowClassName={() => customRowStyle}
                sx={{
                  boxShadow: 2,
                  border: 0,
                  backgroundColor: 'white',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                  },
                }}
                rows={exchangeResponse}
                columns={columns}
                rowKeyField="id"
              />
            )}
          </div>
        </div>
      </DashboardView>
    </SidebarLayout>
  );
};

const renderFormField = (labelText, value, onChange, type) => (
  <div className="flex items-start  my-2 md:my-0 md:items-center  md:flex-row flex-col justify-between w-full">
    <label className="text-center text-black text-xl font-bold font-['Inter'] leading-[23px]">
      {labelText}:
    </label>
    <input
      className="w-full md:w-[452px] h-[55px] bg-zinc-300 ml-2 outline-none px-1"
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const renderSaveButton = ({ loading }) => (
  <div className="flex items-end justify-end">
    <button
      type="submit"
      disabled={loading}
      className="w-[242px] h-[52px] bg-blue-950 rounded-[10px] border-2 border-violet-950"
    >
      <span className="w-[121px] text-center text-white text-[15px] font-bold font-['Inter'] leading-[17.25px]">
        {loading ? 'Submitting...' : 'Save'}{' '}
      </span>
    </button>
  </div>
);

export default BankDetails;
