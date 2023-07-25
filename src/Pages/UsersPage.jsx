import React from 'react';
import SidebarLayout from "../Layouts/SidebarLayout";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../css/UsersPageStyles.css';
import {
  DashboardView,
  DashboardNavView,
  DashboardBody,
} from '../css/DashboardPageStyles';
import Header from '../Components/Header/Header';
import DashboardStat from '../Components/DashboardStat';
import DataTable from '../Components/DataTable';

const UsersPage = () => {
  const count = 10;
  return (
      <SidebarLayout>
          <DashboardView>
            <DashboardNavView>
                  <Link to="/basic_information" className="profile-img flex-end">
                    <img
                      src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="profile-img"
                    />
                  </Link>
            </DashboardNavView>
            <div className='users__tab'>
              <Tabs defaultActiveKey="second">
                <Tab eventKey="first" title={"All Users " + count}>
                   <div className='users__tab__padding'>
                     <DataTable />
                   </div>
                </Tab>
                <Tab eventKey="second" title="Active Users">
                  <div className='users__tab__padding'>
                     <DataTable />
                   </div>
                </Tab>
                <Tab eventKey="third" title="Inactive Users">
                      <div className='users__tab__padding'>
                        <DataTable />
                      </div>
                </Tab>
                <Tab eventKey="fourth" title="Pending">
                      <div className='users__tab__padding'>
                        <DataTable />
                      </div>
                </Tab>
                <Tab eventKey="fifth" title="Suspended">
                      <div className='users__tab__padding'>
                        <DataTable />
                      </div>
                </Tab>
              </Tabs>
            </div>
          </DashboardView>
      </SidebarLayout>
  )
}

export default UsersPage