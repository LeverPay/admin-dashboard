import React, { useEffect, useState } from 'react';
import SidebarLayout from '../Layouts/SidebarLayout';
import { DashboardView } from '../css/DashboardPageStyles';
import CardLimitOptions from '../Components/CardLimitOptions';
import minilogo from '../assets/mini-logo.svg';
import { baseUrl } from '../utils/constants';

import { format } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import AppModal from '../Components/Modal';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import axios from 'axios';

const SetCardLimit = () => {
  const [show, setShow] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [limitLoading, setCardLimitLoading] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [defaultCardLimit, setDefaultCardLimit] = useState('');
  const [goldCardLimit, setGoldCardLimit] = useState('');
  const [diamondCardLimit, setDiamondCardLimit] = useState('');
  const [pinkLadyCardLimit, setPinkLadyCardLimit] = useState('');
  const [enterpriseCardLimit, setEnterpriseCardLimit] = useState('');
  const [limitResponse, setCardLimitResponse] = useState([]);

  const handleLimitChange = (value, setter) => {
    setter(value);
  };

  // Define a function to format the transactionDate
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'yyyy-MM-dd'); // Format date to 'yyyy-MM-dd'
  };

  React.useEffect(() => {
    document.title = 'Set Card Limit  | LeverPay Admin';
  }, []);

  const authToken = Cookies.get('authToken');

  // Card Limt Endpoint

  const handleLimitClick = async (e) => {
    e.preventDefault();
    setCardLimitLoading(true);

    // Check if all of the fields are empty
    if (
      !defaultCardLimit &&
      !goldCardLimit &&
      !diamondCardLimit &&
      !pinkLadyCardLimit &&
      !enterpriseCardLimit
    ) {
      toast.error('Please input atleast 1 before saving.');
      setCardLimitLoading(false);
      setShow(false);
      return; // Exit early if all field is empty
    }

    try {
      const data = {
        default: defaultCardLimit,
        gold: goldCardLimit,
        diamond: diamondCardLimit,
        pinklady: pinkLadyCardLimit,
        enterprise: enterpriseCardLimit,
      };

      const headers = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': 'SKMKbJYHs1nugaO4DNb4K4f1DMFzsGTKY2RSEoYt',
        accept: 'application/json',
      };

      const response = await axios.post(
        `${baseUrl}/v1/admin/update-card-limits`,
        data,
        { headers }
      );

      toast.success('Card Limit updated successfully');
    } catch (err) {
      toast.error('Failed to update card limit: ' + err.message);
    } finally {
      setCardLimitLoading(false);
      setShow(false);
    }
  };

  useEffect(() => {
    const getCardLimitsHistory = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}/v1/admin/get-card-limits-history`,
          {
            headers: {
              accept: '*/*',
              Authorization: `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          }
        );

        // Add a unique ID to each row
        const rowsWithIds = response?.data?.data.map((row) => ({
          ...row,
          id: uuidv4(), // Generate a unique ID
        }));

        // Update the state with rows containing unique IDs
        setCardLimitResponse(rowsWithIds);
      } catch (error) {
        // Handle errors here
        toast.error('Error:', error);
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
  }, []);

  const columns = [
    {
      field: 'created_at',
      renderHeader: (params) => (
        <h2 className="text-indigo-600 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
          Date/Time
        </h2>
      ),
      flex: 1,
      headerAlign: 'left',
      valueFormatter: (params) => formatDate(params.value), // Format the date
    },
    {
      field: 'default_card',
      renderHeader: (params) => (
        <h2 className="text-indigo-600 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
          Default
        </h2>
      ),
      flex: 1,
      headerAlign: 'left',
    },
    {
      field: 'gold_card',
      renderHeader: (params) => (
        <h2 className="text-indigo-600 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
          Gold{' '}
        </h2>
      ),
      flex: 1,
      headerAlign: 'left',
    },
    {
      field: 'diamond_card',
      renderHeader: (params) => (
        <h2 className="text-indigo-600 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
          Diamond.{' '}
        </h2>
      ),
      flex: 1,
      headerAlign: 'left',
    },
    {
      field: 'pink_lady_card',
      renderHeader: (params) => (
        <h2 className="text-indigo-600 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
          Pink Lady{' '}
        </h2>
      ),
      flex: 1,
      headerAlign: 'left',
    },
    {
      field: 'enterprise_card',
      renderHeader: (params) => (
        <h2 className="text-indigo-600 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
          Enterprise{' '}
        </h2>
      ),
      flex: 1,
      headerAlign: 'left',
    },
    {
      field: 'status',
      renderHeader: (params) => (
        <h2 className="text-indigo-600 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
          status{' '}
        </h2>
      ),
      flex: 1,
      headerAlign: 'left',
    },
  ];

  return (
    <SidebarLayout>
      <DashboardView>
        <div className="w-full p-2 flex items-end justify-end ">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
            className="w-10 h-10 rounded-full mr-4"
          />{' '}
        </div>
        <div className="p-3">
          <h2 className="text-indigo-950 text-2xl font-bold font-['Inter'] leading-normal">
            Set Card Limits
          </h2>
          <div className="flex flex-wrap items-center gap-3 md:gap-1 justify-between">
            <CardLimitOptions
              title="Default Card"
              limit={defaultCardLimit}
              handleLimitChange={(value) =>
                handleLimitChange(value, setDefaultCardLimit)
              }
            />
            <CardLimitOptions
              title="Gold Card"
              limit={goldCardLimit}
              handleLimitChange={(value) =>
                handleLimitChange(value, setGoldCardLimit)
              }
            />
            <CardLimitOptions
              title="Diamond Card"
              limit={diamondCardLimit}
              handleLimitChange={(value) =>
                handleLimitChange(value, setDiamondCardLimit)
              }
            />
            <CardLimitOptions
              title="Pink-Lady"
              limit={pinkLadyCardLimit}
              handleLmityChange={(value) =>
                handleLimitChange(value, setPinkLadyCardLimit)
              }
            />
            <CardLimitOptions
              title="Enterprise"
              limit={enterpriseCardLimit}
              handleLimitChange={(value) =>
                handleLimitChange(value, setEnterpriseCardLimit)
              }
            />

            <div className="flex items-center w-full justify-center">
              <button
                className="w-1/2 my-2 h-[52px] text-center text-white text-[15px] font-bold font-['Inter'] leading-[17.25px] rounded-[10px] bg-[#A312FB]"
                onClick={() => setShow(true)}
              >
                Save
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-5">
              <div className="users__tab__padding">
                {isLoading ? (
                  <div className="text-slate-500 text-sm font-normal font-['Agrandir'] leading-normal flex items-center justify-center">
                    Loading Set Limits History...{' '}
                  </div>
                ) : (
                  <DataGrid
                    sx={{
                      boxShadow: 2,
                      border: 0,
                      backgroundColor: 'white',
                      '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                      },
                    }}
                    rows={limitResponse}
                    columns={columns}
                    rowKeyField="id"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <AppModal
          visible={show}
          closable={true}
          handleCancel={() => setShow(false)}
        >
          <div className="py-5">
            <h2 className="text-center text-black text-base font-bold font-['Montserrat'] leading-normal">
              Are you sure you want to <br />
              save the New Card Limit?
            </h2>
            <div className="flex items-center justify-center gap-4 my-2">
              <div
                className="w-[134px] h-[51px] flex items-center justify-center bg-blue-600 rounded-[10px] cursor-pointer"
                onClick={handleLimitClick}
              >
                <span className=" w-max text-neutral-50 text-xl font-bold font-['Montserrat']">
                  {limitLoading ? '...' : 'Yes'}
                </span>
              </div>
              <div
                className="w-[134px] h-[51px]  flex items-center justify-center bg-[#FC0019] rounded-[10px] cursor-pointer"
                onClick={() => setShow(false)}
              >
                <span className="w-max text-neutral-50 text-xl font-bold font-['Montserrat']">
                  No
                </span>
              </div>
            </div>
          </div>
        </AppModal>

        {/* CONFIRMATION */}
        <AppModal
          visible={confirm}
          closable={true}
          handleCancel={() => setConfirm(false)}
        >
          <div className="py-3">
            <div className="flex items-end justify-end">
              <img src={minilogo} alt="" className="w-10 h-10" />
            </div>
            <div className="flex items-center justify-center flex-col">
              <svg
                width="240"
                height="170"
                viewBox="0 0 240 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7534_4609)">
                  <mask
                    id="mask0_7534_4609"
                    maskType="luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="240"
                    height="170"
                  >
                    <path
                      d="M240 0.298828H0.909088V169.921H240V0.298828Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_7534_4609)">
                    <g opacity="0.1">
                      <path
                        d="M120.455 18.5273C178.074 18.5273 224.857 48.2496 224.857 84.8569C224.857 121.464 178.074 151.186 120.455 151.186C62.8346 151.186 16.0517 121.464 16.0517 84.8569C16.0517 48.2496 62.8346 18.5273 120.455 18.5273Z"
                        fill="#5FCE2F"
                      />
                    </g>
                    <g opacity="0.2">
                      <path
                        d="M120.455 26.6289C171.037 26.6289 212.106 52.7211 212.106 84.8574C212.106 116.994 171.037 143.086 120.455 143.086C69.872 143.086 28.8029 116.994 28.8029 84.8574C28.8029 52.7211 69.872 26.6289 120.455 26.6289Z"
                        fill="#5FCE2F"
                      />
                    </g>
                    <path
                      d="M120.455 37.7676C161.36 37.7676 194.572 58.868 194.572 84.8563C194.572 110.845 161.36 131.945 120.455 131.945C79.549 131.945 46.3368 110.845 46.3368 84.8563C46.3368 58.868 79.549 37.7676 120.455 37.7676Z"
                      fill="#5FCE2F"
                    />
                    <path
                      d="M82.917 92.4279C90.8267 96.8806 106.647 105.785 106.647 105.785C106.647 105.785 140.948 80.1376 158.098 67.314"
                      stroke="white"
                      stroke-width="24.1073"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_7534_4609">
                    <rect
                      width="239.091"
                      height="169.622"
                      fill="white"
                      transform="translate(0.909088 0.298828)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="w-[354px] h-[38px] text-center text-lime-500 text-base font-extrabold font-['Montserrat']">
                The new card limit has been updated successfully
              </h2>

              <div
                className="w-[216px] flex items-center justify-center my-2  h-[57px] bg-blue-950 rounded-[5px] cursor-pointer"
                onClick={() => setConfirm(false)}
              >
                <span className="text-center text-white text-2xl font-extrabold font-['Montserrat']">
                  Close
                </span>
              </div>
            </div>
          </div>
        </AppModal>
      </DashboardView>
    </SidebarLayout>
  );
};

export default SetCardLimit;
