import React,{useEffect,useState} from 'react';
import SidebarLayout from "../Layouts/SidebarLayout";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import {Tabs} from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import '../css/UsersPageStyles.css';
import {
  DashboardView,
  DashboardNavView,
} from '../css/DashboardPageStyles';

import DataTable from '../Components/DataTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import UserDataTable from '../Components/UserDataTable';
import axios from 'axios';
import Cookies from 'js-cookie';

import {
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

const UsersPage = () => {
  const [userData, setUserData] = useState([]);
  const authToken = Cookies.get('authToken');
  const [key,setKey]=useState('first')

  useEffect(()=>{
    getUserList()
  },[key])
  const getUserList = ( ) =>{
 
    // let uri
    // if (key==="first") {
    //   uri = 'https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=all'
    // }
    // else if (key==="second"){
    //   uri = 'https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=1'
    // }
    // else if (key==="fourth"){
    //   uri = 'https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=0'
    // }
    // else if (key==="third"){
    //   uri = 'https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=2'
    // }
    // else if (key==="fifth"){
    //   uri = 'https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=2'
    // }

    // console.log(uri);
    // axios
    // .get(uri,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${authToken}`,
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   }
    // )
    // .then((response) => {
    //   console.log(response,'......users list');
    //   setUserData(response.data.data)
    //   console.log(userData,'........user data two');
    // })
    // .catch((err) => console.log(err));
  }
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
        


            <div className="header-container">
              <div className="greeting-container">
                <div className="greeting">
                  <MDBBtn outline className='mx-2' color='dark'>
                    <Link to="/add_user"><FontAwesomeIcon icon={faUserGroup} /> <span>Add User</span>{' '}</Link>
                  </MDBBtn>
                </div>
                <div className="search">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <input className="search-input" placeholder="Search" />
                </div>
              </div>
            </div>

            
            <div className='users__tab'>
              <Tabs defaultActiveKey="first" 
              
              activeKey={key}
              onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="first" title={"All Users"}>
                   <div className='users__tab__padding'>
                     <UserDataTable filterType="all" />
                   </div>
                </Tab>
                 <Tab eventKey="second" title={"Active Users - " + count}>
                  <div className='users__tab__padding'>
                     <UserDataTable filterType="active"/>
                   </div>
                </Tab>
                <Tab eventKey="third" title="Inactive Users">
                      <div className='users__tab__padding'>
                       <UserDataTable filterType="inactive"/>
                      </div>
                </Tab>
                <Tab eventKey="fourth" title="Pending">
                      <div className='users__tab__padding'>
                        <UserDataTable filterType="pending" />
                      </div>
                </Tab>
                <Tab eventKey="fifth" title="Suspended"  >
                      <div className='users__tab__padding' >
                        <UserDataTable filterType="suspended" />
                      </div>
                </Tab>
              </Tabs>
            </div>
          </DashboardView>
      </SidebarLayout>
  )
}

export default UsersPage