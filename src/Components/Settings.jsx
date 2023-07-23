import React, { useState } from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import { TransactionTable } from '../css/TransactionStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/SettingsStyles.css';
import Toggle from './Toggle';
import SettingsContainer from './SettingsContainer';
import VendorStore from './VendorStore';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  return (
    <DashboardView>
      <DashboardNavView>
        <Link to="/basic_information" className="profile-img flex-end">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
          />
        </Link>
      </DashboardNavView>
      <TransactionTable>
        <div className="transaction__table">
          <div className="TransactionTitle">
            <p>Settings</p>
            <div className="search_input">
              <div className="left__input">
                <input type="text" name="" id="" placeholder="Search" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
        </div>
      </TransactionTable>

      <form className="settingsContainer">
        <div className="settingsContent">
          <SettingsContainer
            headerText="Admin area access"
            text="Disallow vendor and customers from accessing the wp-admin dashboard
            area"
          />

          <SettingsContainer
            headerText="Disable welcome wizard"
            text="Disable welcome wizard for newly registered vendors"
          />

          <SettingsContainer
            headerText="Log ShipStation Api requests"
            text="Log all ShipStation Api interactions"
          />

          <SettingsContainer
            headerText="Data Clear"
            text="Delete all data and tables related to Dokan and Dokan Pro while deleting the Dokan plugin"
            warningText="Learn More"
          />
          <VendorStore />
        </div>

        <div className="settingsContent">
          <div className="settings-title">
            <h2>Vendor Store Options </h2>
            <p>
              Configure your vendor store settings and setup your store policy
              for vendor . <Link to="#">Learn More</Link>
            </p>
          </div>
          <SettingsContainer
            headerText="Store terms and conditions"
            text="Enable terms and conditions for  vendor store"
          />
          <SettingsContainer
            headerText="Enable terms and conditions"
            text="Enable terms and conditions check on registration"
          />
          <SettingsContainer headerText="Enable single seller mode " text="" />
          <SettingsContainer
            headerText="Data Clear"
            text="Delete all data and tables related to Dokan and Dokan Pro while deleting the Dokan plugin"
            warningText="Learn More"
          />
          <div className="adminArea">
            <div className="admin-area">
              <h2>Store products per page</h2>
              <p>
                Set how many products to display per page on the vendor store
                page . It will affect only if the vendor isnt set this value on
                their vendor setting page
              </p>
            </div>
            <div className="vendor-input">
              <input type="number" name="" id="" placeholder="12" />
            </div>
          </div>

          {/* CATEGORY */}

          <div className="adminArea">
            <div className="admin-area">
              <h2>Category</h2>
              <p>Choose your store category provider for vendors</p>
            </div>
            <div className="vendor-input">
              <select name="" id="">
                <option value="Multiple">Multiple</option>
              </select>
            </div>
          </div>
        </div>
        <div className='save-changes-btn-container'>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </DashboardView>
  );
};

export default Settings;
