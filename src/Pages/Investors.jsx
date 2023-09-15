import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DashboardView } from '../css/DashboardPageStyles';
import SidebarLayout from '../Layouts/SidebarLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UpgradeCard from '../Components/UpgradeCard';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Investors = () => {
  const navigate = useNavigate();
  return (
    <SidebarLayout>
      <DashboardView>
        <div className="m-3 sticky top-0 right-0 bg-inherit p-2 z-10">
          <div className="flex items-center space-x-2 justify-between">
            <h2 className="text-indigo-950 text-2xl font-bold font-['Inter'] leading-normal">
              Investors Profile
            </h2>
            <Link to="/basic_information" className="profile-img flex-end">
              <img
                src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="profile-img"
              />
            </Link>
          </div>
        </div>
        <div className="px-5">
          <div className="flex items-end justify-end w-full">
            <div className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input className="search-input" placeholder="Search" />
            </div>
          </div>

          <div className="flex items-center justify-between my-5">
            <UpgradeCard title="Regsiter" number="2000" color="#0B0230" />
            <UpgradeCard title="Invested" number="302" color="#0C6904" />
            <UpgradeCard title="Failed" number="20" color="#F40909EB" />
          </div>

          <div className="row">
            <div className="col-12 mt-5">
              <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title={'Sent'}>
                  <div className="users__tab__paddin">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Date
                            </span>
                          </th>
                          <th scope="col">
                            <span className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Name
                            </span>
                          </th>
                          <th scope="col">
                            <span className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Email
                            </span>
                          </th>
                          <th scope="col">
                            <span className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Amount{' '}
                            </span>
                          </th>
                          <th scope="col">
                            <span className="text-orange-600 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </span>
                          </th>
                          <th scope="col">
                            <span className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              View
                            </span>
                          </th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              01/11/23
                            </p>
                          </th>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Patrick Oludare
                            </p>
                          </td>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] underline leading-3 tracking-tight">
                              willz@leverpay.io
                            </p>
                          </td>
                          <td>
                            <p className="text-green-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              700
                            </p>
                          </td>
                          <td>
                            <p className="text-orange-600 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Failed
                            </p>
                          </td>
                          <td className="font__approved">
                            <div
                              onClick={() => navigate('/leverpay-investors')}
                              className="view-more-btn"
                            >
                              {' '}
                              <span className="text-yellow-500 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                                More
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Patrick Oludare
                            </p>
                          </td>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] underline leading-3 tracking-tight">
                              willz@leverpay.io
                            </p>
                          </td>
                          <td>
                            <p className="text-green-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              700
                            </p>
                          </td>
                          <td>
                            <p className="text-orange-600 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Failed
                            </p>
                          </td>
                          <td className="font__pending">
                            <div
                              onClick={() => navigate('/leverpay-investors')}
                              className="view-more-btn"
                            >
                              {' '}
                              <span className="text-yellow-500 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                                More
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Patrick Oludare
                            </p>
                          </td>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] underline leading-3 tracking-tight">
                              willz@leverpay.io
                            </p>
                          </td>
                          <td>
                            <p className="text-green-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              700
                            </p>
                          </td>
                          <td>
                            <p className="text-green-900 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Invested
                            </p>
                          </td>
                          <td className="font__failed">
                            <div
                              onClick={() => navigate('/leverpay-investors')}
                              className="view-more-btn"
                            >
                              {' '}
                              <span className="text-yellow-500 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                                More
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Patrick Oludare
                            </p>
                          </td>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] underline leading-3 tracking-tight">
                              willz@leverpay.io
                            </p>
                          </td>
                          <td>
                            <p className="text-green-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              700
                            </p>
                          </td>
                          <td>
                            <p className="text-green-900 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Invested
                            </p>
                          </td>
                          <td className="font__approved">
                            <div
                              onClick={() => navigate('/leverpay-investors')}
                              className="view-more-btn"
                            >
                              {' '}
                              <span className="text-yellow-500 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                                More
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="second" title={'Received'}>
                  <div className="users__tab__padding">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Date
                            </span>
                            /Time
                          </th>
                          <th scope="col">Sender ID</th>
                          <th scope="col">Receiver ID</th>
                          <th scope="col">
                            <span className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Amount{' '}
                            </span>
                          </th>
                          <th scope="col">
                            <span className="text-orange-600 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              01/11/23
                            </p>
                          </th>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Patrick Oludare
                            </p>
                          </td>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] underline leading-3 tracking-tight">
                              willz@leverpay.io
                            </p>
                          </td>
                          <td>
                            <p className="text-green-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              700
                            </p>
                          </td>
                          <td>
                            <p className="text-indigo-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Registered
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Patrick Oludare
                            </p>
                          </td>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] underline leading-3 tracking-tight">
                              willz@leverpay.io
                            </p>
                          </td>
                          <td>
                            <p className="text-green-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              700
                            </p>
                          </td>
                          <td>
                            <p className="text-orange-600 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Failed
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="third" title="Pending">
                  <div className="users__tab__padding">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Date
                            </span>
                            /Time
                          </th>
                          <th scope="col">LaverPay ID</th>
                          <th scope="col">Currency</th>
                          <th scope="col">Source</th>
                          <th scope="col">
                            <span className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Amount{' '}
                            </span>
                          </th>
                          <th scope="col">
                            <span className="text-orange-600 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              01/11/23
                            </p>
                          </th>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Patrick Oludare
                            </p>
                          </td>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] underline leading-3 tracking-tight">
                              willz@leverpay.io
                            </p>
                          </td>
                          <td>
                            <p className="text-green-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              700
                            </p>
                          </td>
                          <td>
                            <p className="text-orange-600 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Failed
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="fifth" title="Fail">
                  <div className="users__tab__padding">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Date
                            </span>
                            /Time
                          </th>
                          <th scope="col">LaverPay ID</th>
                          <th scope="col">Currency</th>
                          <th scope="col">
                            <span className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Amount{' '}
                            </span>
                          </th>
                          <th scope="col">Current Balance</th>
                          <th scope="col">
                            <span className="text-orange-600 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              01/11/23
                            </p>
                          </th>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Patrick Oludare
                            </p>
                          </td>
                          <td>
                            <p className="text-black text-xs font-bold font-['Inter'] underline leading-3 tracking-tight">
                              willz@leverpay.io
                            </p>
                          </td>
                          <td>
                            <p className="text-green-600 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              700
                            </p>
                          </td>
                          <td>
                            <p className="text-orange-600 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Failed
                            </p>
                          </td>
                          <td className="font__amount">540USDT</td>
                          <td>1110USDT</td>
                          <td className="font__failed">FAILED</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </DashboardView>
    </SidebarLayout>
  );
};

export default Investors;
