import React from 'react';
import { useNavigate } from "react-router-dom";
import SidebarLayout from '../Layouts/SidebarLayout';
import { DashboardNavView, DashboardView} from '../css/DashboardPageStyles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FundRequestStyle } from '../css/FundrequestStyle';
import allRequest from "../assets/all-request.svg";
import approvedRequest from "../assets/check.svg";
import pendingRequest from "../assets/pending.svg";
import failedRequest from "../assets/failed.svg";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function FundRequest() {
 
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
              <FundRequestStyle>
                <div className="transaction__table">
                    <div className='card fund__request__card'>
                          <div className='card-body'>
                            <div className='row'>
                                  <div className='col-12'>
                                    <div className="TransactionTitle">
                                        <div className="search_input">
                                            <div className="left__input">
                                                <input type="text" name="" id="" placeholder="Search" />
                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className='col'>
                                    <div className='card bg__custom__blue'>
                                          <div className='card-body'>
                                              <div className='row'>
                                                  <div className='col-3'>
                                                    <img src={allRequest} alt='all-request' />
                                                  </div>
                                                  <div className='col'>
                                                    <span><b>REQUEST</b></span>
                                                    <p><b>4</b></p>
                                                  </div>
                                              </div>
                                          </div>      
                                    </div>
                                  </div> 
                                  <div className='col'>
                                    <div className='card bg__custom__green'>
                                          <div className='card-body'>
                                              <div className='row'>
                                                  <div className='col-3'>
                                                    <img src={approvedRequest} alt='all-request' />
                                                  </div>
                                                  <div className='col'>
                                                    <span><b>APPROVED</b></span>
                                                    <p><b>2</b></p>
                                                  </div>
                                              </div>
                                          </div>      
                                    </div>
                                  </div> 
                                  <div className='col'>
                                    <div className='card bg__custom__yellow'>
                                          <div className='card-body'>
                                              <div className='row'>
                                                  <div className='col-3'>
                                                    <img src={pendingRequest} alt='all-request' />
                                                  </div>
                                                  <div className='col'>
                                                    <span><b>PENDING</b></span>
                                                    <p><b>1</b></p>
                                                  </div>
                                              </div>
                                          </div>      
                                    </div>
                                  </div> 
                                  <div className='col'>
                                    <div className='card bg__custom__red'>
                                          <div className='card-body'>
                                              <div className='row'>
                                                  <div className='col-3'>
                                                    <img src={failedRequest} alt='all-request' />
                                                  </div>
                                                  <div className='col'>
                                                    <span><b>FAILED</b></span>
                                                    <p><b>1</b></p>
                                                  </div>
                                              </div>
                                          </div>      
                                    </div>
                                  </div> 
                            </div>
                              
                            <div className='row'>
                                <div className='col-12 mt-5'>
                                    <Tabs defaultActiveKey="first">
                                        <Tab eventKey="first" title={"Request"}>
                                            <div className='users__tab__padding'>
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Date/Time</th>
                                                        <th scope="col">LaverPay ID</th>
                                                        <th scope="col">Currency</th>
                                                        <th scope="col">Source</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Current Balance</th>
                                                        <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>02/08/2023 12:53</td>
                                                            <td>Lvphhdhd01</td>
                                                            <td>Naira</td>
                                                            <td>Binance</td>
                                                            <td className='font__amount'>200USDT</td>
                                                            <td>210USDT</td>
                                                            <td className='font__approved'>
                                                                  <Link to={{
                                                                        pathname: `/approve_request/1`,
                                                                        state: { users: '' }
                                                                    }}className="view-more-btn"> APPROVED</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>02/08/2023 12:53</td>
                                                            <td>Lvphhdhd01</td>
                                                            <td>Stable Coin</td>
                                                            <td>Binance</td>
                                                            <td className='font__amount'>40USDT</td>
                                                            <td>910USDT</td>
                                                            <td className='font__pending'>
                                                                    <Link to={{
                                                                        pathname: `/approve_request/1`,
                                                                        state: { users: '' }
                                                                    }}className="view-more-btn"> PENDING</Link>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <th scope="row">3</th>
                                                            <td>02/08/2023 12:53</td>
                                                            <td>Lvphhdhd01</td>
                                                            <td>Stable Coin</td>
                                                            <td>Binance</td>
                                                            <td className='font__amount'>540USDT</td>
                                                            <td>1110USDT</td>
                                                            <td className='font__failed'>
                                                                    <Link to={{
                                                                        pathname: `/approve_request/1`,
                                                                        state: { users: '' }
                                                                    }}className="view-more-btn"> FAILED</Link>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <th scope="row">4</th>
                                                            <td>02/08/2023 12:53</td>
                                                            <td>Lvphhdhd01</td>
                                                            <td>Naira</td>
                                                            <td>Binance</td>
                                                            <td className='font__amount'>200USDT</td>
                                                            <td>210USDT</td>
                                                            <td className='font__approved'>
                                                                  <Link to={{
                                                                        pathname: `/approve_request/1`,
                                                                        state: { users: '' }
                                                                    }}className="view-more-btn"> APPROVED</Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="second" title={"Approve"}>
                                            <div className='users__tab__padding'>
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Date/Time</th>
                                                        <th scope="col">LaverPay ID</th>
                                                        <th scope="col">Currency</th>
                                                        <th scope="col">Source</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Current Balance</th>
                                                        <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>02/08/2023 12:53</td>
                                                            <td>Lvphhdhd01</td>
                                                            <td>Naira</td>
                                                            <td>Binance</td>
                                                            <td className='font__amount'>200USDT</td>
                                                            <td>210USDT</td>
                                                            <td className='font__approved'>APPROVED</td>
                                                        </tr>
                                                          <tr>
                                                            <th scope="row">2</th>
                                                            <td>02/08/2023 12:53</td>
                                                            <td>Lvphhdhd01</td>
                                                            <td>Naira</td>
                                                            <td>Binance</td>
                                                            <td className='font__amount'>200USDT</td>
                                                            <td>210USDT</td>
                                                            <td className='font__approved'>APPROVED</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="third" title="Pending">
                                            <div className='users__tab__padding'>
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Date/Time</th>
                                                        <th scope="col">LaverPay ID</th>
                                                        <th scope="col">Currency</th>
                                                        <th scope="col">Source</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Current Balance</th>
                                                        <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>02/08/2023 12:53</td>
                                                            <td>Lvphhdhd01</td>
                                                            <td>Stable Coin</td>
                                                            <td>Binance</td>
                                                            <td className='font__amount'>40USDT</td>
                                                            <td>910USDT</td>
                                                            <td className='font__pending'>PENDING</td>
                                                          </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="fourth" title="Fail">
                                            <div className='users__tab__padding'>
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Date/Time</th>
                                                        <th scope="col">LaverPay ID</th>
                                                        <th scope="col">Currency</th>
                                                        <th scope="col">Source</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Current Balance</th>
                                                        <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>                                                   
                                                          <tr>
                                                            <th scope="row">1</th>
                                                            <td>02/08/2023 12:53</td>
                                                            <td>Lvphhdhd01</td>
                                                            <td>Stable Coin</td>
                                                            <td>Binance</td>
                                                            <td className='font__amount'>540USDT</td>
                                                            <td>1110USDT</td>
                                                            <td className='font__failed'>FAILED</td>
                                                          </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>      
                            </div>
                          </div>      
                    </div>
                </div>
            </FundRequestStyle>
        </DashboardView>
    </SidebarLayout>
  )
}

export default FundRequest