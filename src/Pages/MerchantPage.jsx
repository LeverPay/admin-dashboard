import React from 'react';
import SidebarLayout from '../Layouts/SidebarLayout';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import '../css/UsersPageStyles.css';
import { DashboardView, DashboardNavView } from '../css/DashboardPageStyles';

import DataTable from '../Components/DataTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import UserDataTable from '../Components/UserDataTable';

import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import MerchantDataTable from '../Components/MerchantDataTable'

const MerchantPage = () => {
  const count = 10;
  return (
    <SidebarLayout>
      <DashboardView>
        <div className="m-3 sticky top-0 right-0 bg-inherit p-2 z-10">
          <Link to="/basic_information" className="profile-img flex-end">
            <img
              src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="profile-img"
            />
          </Link>
        </div>

        <div className="header-container">
          <div className="greeting-container">
            <div className="greeting">
              <MDBBtn outline className="mx-2" color="dark">
                <Link to="/add_merchant">
                  <FontAwesomeIcon icon={faUserGroup} />{' '}
                  <span>Add Merchant</span>{' '}
                </Link>
              </MDBBtn>
            </div>
            <div className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input className="search-input" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="users__tab">
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title={'All Merchant'}>
              <div className="users__tab__padding">
                <MerchantDataTable />
              </div>
            </Tab>
            <Tab eventKey="second" title={'Active Merchants - ' + count}>
              <div className="users__tab__padding">
                <MerchantDataTable />
              </div>
            </Tab>
            <Tab eventKey="third" title="Inactive Merchants">
              <div className="users__tab__padding">
                <MerchantDataTable />
              </div>
            </Tab>
            <Tab eventKey="fourth" title="Pending">
              <div className="users__tab__padding">
                <MerchantDataTable />
              </div>
            </Tab>
            <Tab eventKey="fifth" title="Suspended">
              <div className="users__tab__padding">
                <MerchantDataTable />
              </div>
            </Tab>
          </Tabs>
        </div>
      </DashboardView>
    </SidebarLayout>
  );
};

export default MerchantPage;
