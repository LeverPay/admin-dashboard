import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { DashboardView } from '../css/DashboardPageStyles';
import SettingsContainer from './SettingsContainer';

const Settings = () => {
  return (
    <DashboardView>
      <div className="m-3 sticky top-0 right-0 bg-inherit p-2 z-10">
        <Link to="/basic_information" className="profile-img flex-end">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
          />
        </Link>
      </div>
      <div className="m-3">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-900 text-lg font-medium leading-normal">
            Settings
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

      <form className="m-3 shadow-sm rounded bg-white">
        <div className="">
          {/* SettingsContainer Components */}
          <SettingsContainer
            headerText="Admin Area Access"
            text="Prevent vendor and customer access to the wp-admin dashboard area"
          />
          <SettingsContainer
            headerText="Disable Welcome Wizard"
            text="Turn off the welcome wizard for newly registered vendors"
          />
          <SettingsContainer
            headerText="Log ShipStation API Requests"
            text="Record all interactions with the ShipStation API"
          />
          <SettingsContainer
            headerText="Data Clear"
            text="Delete Dokan and Dokan Pro data and tables when uninstalling the Dokan plugin"
            warningText="Learn More"
          />
          {/* Vendor Store URL */}
          <div className="flex items-center justify-between border border-blue-900 p-3">
            <div className="">
              <h2 className="text-slate-900 text-sm font-bold">
                Vendor Store URL
              </h2>
              <p className="text-slate-900 text-[13.15px] font-normal m-0">
                Define the vendor store name in the URL
              </p>
              <p className="text-[#033AA3] font-normal cursor-pointer text-sm">
                (https://localhost/wordpress[this-text]/[vendor-name])
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="store name"
                className="p-2 rounded-[10px] bg-white shadow border border-stone-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Vendor Store Options */}
        <div className="m-3">
          <div className="my-3">
            <h2 className="text-black text-[22px] font-normal">
              Vendor Store Options
            </h2>
            <div className="flex items-center gap-1">
              <span className="text-black text-lg font-normal">
                Configure vendor store settings and store policies.
              </span>
              <Link to="#" className="text-blue-800 text-lg font-normal">
                Learn More
              </Link>
            </div>
          </div>
          {/* SettingsContainer Components */}
          <SettingsContainer
            headerText="Store Terms and Conditions"
            text="Require terms and conditions for vendor store operation"
          />
          <SettingsContainer
            headerText="Enable Terms and Conditions"
            text="Enable terms and conditions check during registration"
          />
          <SettingsContainer
            headerText="Enable Single Seller Mode"
            warningText="Learn More"
          />
          <SettingsContainer
            headerText="Data Clear"
            text="Delete Dokan and Dokan Pro data and tables when uninstalling the Dokan plugin"
            warningText="Learn More"
          />
          {/* Store Products Per Page */}
          <div className="p-3 flex items-center justify-between border border-blue-900">
            <div>
              <h2 className="text-black text-sm font-bold">
                Store Products per Page
              </h2>
              <p className="w-[463px] text-black text-[13.15px] font-normal">
                Set the number of products to display per page on the vendor
                store page. This setting affects vendors who haven't specified
                their value.
              </p>
            </div>
            <div>
              <input
                type="number"
                placeholder="12"
                className="p-2 rounded-[10px] bg-white shadow border border-stone-500 outline-none"
              />
            </div>
          </div>

          {/* Category */}
          <div className="p-3 flex items-center justify-between border border-blue-900">
            <div className="">
              <h2 className="text-black text-sm font-bold">Category</h2>
              <p className="text-black text-[13.15px] font-normal">
                Select your store category options available for vendors.
              </p>
            </div>
            <div>
              <select className="bg-white rounded shadow border border-stone-500 w-[117px] h-[34px]">
                <option value="Multiple">Multiple</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Changes */}
        <div className="flex items-center justify-end mr-5">
          <div className="my-5 w-[119.68px] h-[38.30px] text-center flex items-center justify-center bg-blue-400 rounded cursor-pointer">
            <div className="text-white text-[14.89px] font-normal">
              Save Changes
            </div>
          </div>
        </div>
      </form>
    </DashboardView>
  );
};

export default Settings;
