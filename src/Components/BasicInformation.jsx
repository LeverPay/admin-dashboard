import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import { DashboardView } from '../css/DashboardPageStyles';
import { baseUrl } from '../utils/constants';

const BasicInformation = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const authToken = Cookies.get('authToken');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/v1/admin/admin-profile`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
            'X-CSRF-TOKEN': 'Lsvq6bmNqtgogj9pEvAjoSKmNw7dAoVLhPigy4LB',
          },
        });

        if (response.status === 200) {
          setData(response.data[0]);
        } else {
          console.error('Error:', response.data);
        }
      } catch (error) {
        console.error('Network error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [authToken]);

  useEffect(() => {
    document.title = 'Basic Information | LeverPay Admin';
  }, []);

  const renderProfileImage = () => {
    return (
      <img
        src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="profile"
        className="w-16 h-16 rounded-full"
      />
    );
  };

  const renderButtons = () => {
    return (
      <div className="flex items-center gap-3">
        {renderProfileImage()}
        <div className="w-max py-2 px-3 cursor-pointer gap-2 bg-blue-600 rounded-lg flex items-center justify-center text-neutral-50 text-sm font-semibold leading-[18px]">
          Change
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div className="w-max py-2 px-3 cursor-pointer gap-2 border border-indigo-800 rounded-lg flex items-center justify-center text-indigo-800 text-sm font-semibold leading-[18px]">
          Remove
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    );
  };

  const renderTextInput = (label, placeholder, value) => {
    return (
      <div className="my-2">
        <h2 className="text-black text-opacity-80 text-sm font-normal leading-tight">
          {label}
        </h2>
        <input
          type="text"
          name=""
          id=""
          placeholder={placeholder}
          value={value}
          className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
        />
      </div>
    );
  };

  const renderSelectInput = (label, value) => {
    return (
      <div className="my-2 w-1/2">
        <h2 className="text-black text-opacity-80 text-sm font-normal leading-normal">
          {label}
        </h2>
        <select
          name=""
          id=""
          value={value}
          className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
        >
          <option value="Nigeria">Nigeria</option>
        </select>
      </div>
    );
  };

  const renderPhoneNumberInput = (label, placeholder, value) => {
    return (
      <div className="my-2 w-1/2">
        <h2 className="w-[113.66px] text-black text-opacity-80 text-sm font-normal leading-normal">
          {label}
        </h2>
        <div className="input-phone flex items-center gap-1">
          <div className="w-[113.66px] h-[50px] flex items-center justify-center rounded bg-blue-600 bg-opacity-5 border border-slate-900">
            +234
          </div>
          <input
            type="number"
            placeholder={placeholder}
            name=""
            id=""
            value={value}
            className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
          />
        </div>
      </div>
    );
  };

  const renderEmailInput = (label, placeholder, value) => {
    return (
      <div className="my-2 w-1/2">
        <h2 className="w-[94.54px] text-black text-opacity-80 text-sm font-normal leading-normal">
          {label}
        </h2>
        <input
          type="email"
          name=""
          id=""
          placeholder={placeholder}
          value={value}
          className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
        />
      </div>
    );
  };

  const renderSubmitButton = () => {
    return (
      <div className="w-max py-2 px-3 cursor-pointer gap-2 bg-blue-600 rounded-lg flex items-center justify-center text-neutral-50 text-sm font-semibold leading-[18px]">
        Submit
      </div>
    );
  };

  return (
    <DashboardView>
      <div>
        <div className="m-5">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-900 text-lg font-medium leading-normal">
              Basic Information
            </h2>
            <div className="bg-white rounded-[10px] border border-blue-900 py-1 px-2">
              <input
                type="text"
                placeholder="Search"
                className="text-slate-400 text-xs font-normal leading-tight outline-none"
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="m-5 p-11 bg-white rounded-[10px] ">
          {isLoading ? (
            <p>Loading...</p>
          ) : data ? (
            <>
              {renderButtons()}
              <form action="" className="my-5">
                {renderTextInput(
                  'Full Name',
                  `${data?.first_name} ${data?.last_name}`,
                  ''
                )}
                {renderTextInput(
                  'Business Name',
                  'Center Focus Service Limited',
                  ''
                )}
                {renderSelectInput('Country', 'Nigeria')}
                {renderPhoneNumberInput('Phone number', data?.phone, '')}
                {renderEmailInput('Email address', data?.email, '')}
                {renderSubmitButton()}
              </form>
            </>
          ) : (
            <p>Data not available.</p>
          )}
        </div>
      </div>
    </DashboardView>
  );
};

export default BasicInformation;
