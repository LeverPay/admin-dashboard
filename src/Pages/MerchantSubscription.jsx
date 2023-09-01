import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarLayout from '../Layouts/SidebarLayout';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FundRequestStyle } from '../css/FundrequestStyle';
import allRequest from '../assets/all-request.svg';
import approvedRequest from '../assets/check.svg';
import pendingRequest from '../assets/pending.svg';
import failedRequest from '../assets/failed.svg';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function MerchantSubscription() {
  return (
    <SidebarLayout>
      <DashboardView>
        <div className="m-3 sticky top-0 right-0 bg-inherit p-2 z-10">
          <div className="flex items-center justify-between">
            <h2 className="w-full text-indigo-950 text-xl font-bold leading-normal">
              Merchant Subscription{' '}
            </h2>
            <Link to="/basic_information" className="profile-img flex-end">
              <img
                src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="profile-img"
              />
            </Link>
          </div>
        </div>
        <FundRequestStyle>
          <div className="transaction__table">
            <div className="card fund__request__card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="TransactionTitle">
                      <div className="bg-white rounded-[10px] border border-blue-900 py-1 px-2">
                        <input
                          type="text"
                          placeholder="Search"
                          className="text-slate-400 text-xs font-normal leading-tight outline-none"
                        />
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          className="w-3 h-3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-3 w-full">
                    <div className="card bg__blue_600">
                      <div className="card-body">
                        <div className="row flex items-center gap-2">
                          <div className="col-3">
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25.0011 0L24.4214 0.430509C17.6484 5.49728 10.9828 8.8185 0.805032 10.5064L0 10.6345V11.4464C0 13.4761 0.901636 16.6489 2.37216 20.5373C3.83195 24.4365 5.89283 28.9552 8.27787 33.271C10.6715 37.5868 13.3657 41.6996 16.1994 44.7762C19.0009 47.8635 21.9419 50 25.0011 50C28.0602 50 31.0012 47.8635 33.8242 44.7762C36.6365 41.6996 39.3306 37.5868 41.735 33.271C44.1179 28.9552 46.168 24.4365 47.6386 20.5373C49.0984 16.6489 50 13.4761 50 11.4464V10.6345L49.2057 10.5064C39.0516 8.8185 32.3644 5.49728 25.5807 0.430509L25.0011 0ZM25.0011 2.37154C31.5594 7.18299 38.3539 10.5064 48.0143 12.2369C47.8103 13.8607 47.0482 16.6595 45.8353 19.875C45.3952 21.0287 44.9122 22.2466 44.3648 23.5071H28.4359V18.2833L35.3055 19.9925L25.0011 8.03226L14.6967 19.9925L21.5663 18.2833V23.5071H5.63415C5.09746 22.2466 4.60478 21.0287 4.1647 19.875C2.96252 16.6595 2.18969 13.8607 1.98575 12.2369C11.6483 10.5064 18.432 7.18299 25.0011 2.37154Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div className="col">
                            <span className="text-white text-xl font-bold leading-normal">
                              All
                            </span>
                            <p>
                              <span className="text-white text-base font-bold leading-normal">
                                2000
                              </span>{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg__custom__yellow">
                      <div className="card-body">
                        <div className="row flex items-center gap-2">
                          <div className="col-3">
                            <svg
                              width="42"
                              height="42"
                              viewBox="0 0 42 42"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.4167 23.9583C11.2847 23.9583 12.0229 23.6542 12.6313 23.0458C13.2396 22.4375 13.5431 21.7 13.5417 20.8333C13.5417 19.9653 13.2375 19.2271 12.6292 18.6188C12.0208 18.0104 11.2833 17.7069 10.4167 17.7083C9.54861 17.7083 8.81042 18.0125 8.20208 18.6208C7.59375 19.2292 7.29028 19.9667 7.29167 20.8333C7.29167 21.7014 7.59583 22.4396 8.20417 23.0479C8.8125 23.6563 9.55 23.9597 10.4167 23.9583ZM20.8333 23.9583C21.7014 23.9583 22.4396 23.6542 23.0479 23.0458C23.6563 22.4375 23.9597 21.7 23.9583 20.8333C23.9583 19.9653 23.6542 19.2271 23.0458 18.6188C22.4375 18.0104 21.7 17.7069 20.8333 17.7083C19.9653 17.7083 19.2271 18.0125 18.6188 18.6208C18.0104 19.2292 17.7069 19.9667 17.7083 20.8333C17.7083 21.7014 18.0125 22.4396 18.6208 23.0479C19.2292 23.6563 19.9667 23.9597 20.8333 23.9583ZM31.25 23.9583C32.1181 23.9583 32.8563 23.6542 33.4646 23.0458C34.0729 22.4375 34.3764 21.7 34.375 20.8333C34.375 19.9653 34.0708 19.2271 33.4625 18.6188C32.8542 18.0104 32.1167 17.7069 31.25 17.7083C30.3819 17.7083 29.6438 18.0125 29.0354 18.6208C28.4271 19.2292 28.1236 19.9667 28.125 20.8333C28.125 21.7014 28.4292 22.4396 29.0375 23.0479C29.6458 23.6563 30.3833 23.9597 31.25 23.9583ZM20.8333 41.6667C17.9514 41.6667 15.2431 41.1194 12.7083 40.025C10.1736 38.9306 7.96875 37.4465 6.09375 35.5729C4.21875 33.6979 2.73472 31.4931 1.64167 28.9583C0.548611 26.4236 0.00138889 23.7153 0 20.8333C0 17.9514 0.547222 15.2431 1.64167 12.7083C2.73611 10.1736 4.22014 7.96875 6.09375 6.09375C7.96875 4.21875 10.1736 2.73472 12.7083 1.64167C15.2431 0.548611 17.9514 0.00138889 20.8333 0C23.7153 0 26.4236 0.547222 28.9583 1.64167C31.4931 2.73611 33.6979 4.22014 35.5729 6.09375C37.4479 7.96875 38.9326 10.1736 40.0271 12.7083C41.1215 15.2431 41.6681 17.9514 41.6667 20.8333C41.6667 23.7153 41.1194 26.4236 40.025 28.9583C38.9306 31.4931 37.4465 33.6979 35.5729 35.5729C33.6979 37.4479 31.4931 38.9326 28.9583 40.0271C26.4236 41.1215 23.7153 41.6681 20.8333 41.6667ZM20.8333 37.5C25.4861 37.5 29.4271 35.8854 32.6562 32.6562C35.8854 29.4271 37.5 25.4861 37.5 20.8333C37.5 16.1806 35.8854 12.2396 32.6562 9.01042C29.4271 5.78125 25.4861 4.16667 20.8333 4.16667C16.1806 4.16667 12.2396 5.78125 9.01042 9.01042C5.78125 12.2396 4.16667 16.1806 4.16667 20.8333C4.16667 25.4861 5.78125 29.4271 9.01042 32.6562C12.2396 35.8854 16.1806 37.5 20.8333 37.5Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div className="col">
                            <span className="text-white text-xl font-bold leading-normal">
                              Pending
                            </span>
                            <p>
                              <span className="text-white text-base font-bold leading-normal">
                                2000
                              </span>{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 w-full">
                    <div className="card bg__custom__green">
                      <div className="card-body">
                        <div className="row flex items-center justify-center gap-2">
                          <div className="col-3">
                            <svg
                              width="42"
                              height="42"
                              viewBox="0 0 42 42"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M37.5 20.8334C37.5 25.2537 35.7441 29.4929 32.6184 32.6185C29.4928 35.7441 25.2536 37.5001 20.8333 37.5001C16.4131 37.5001 12.1738 35.7441 9.04822 32.6185C5.92261 29.4929 4.16667 25.2537 4.16667 20.8334C4.16667 16.4132 5.92261 12.1739 9.04822 9.04831C12.1738 5.92271 16.4131 4.16676 20.8333 4.16676C22.4167 4.16676 23.9583 4.39593 25.4167 4.81259L28.6875 1.54176C26.1965 0.515855 23.5273 -0.00805514 20.8333 9.36153e-05C18.0975 9.36153e-05 15.3884 0.538964 12.8608 1.58594C10.3331 2.63291 8.0365 4.16748 6.10194 6.10204C2.19493 10.009 0 15.3081 0 20.8334C0 26.3588 2.19493 31.6578 6.10194 35.5648C8.0365 37.4994 10.3331 39.0339 12.8608 40.0809C15.3884 41.1279 18.0975 41.6668 20.8333 41.6668C26.3587 41.6668 31.6577 39.4718 35.5647 35.5648C39.4717 31.6578 41.6667 26.3588 41.6667 20.8334M12.3125 16.8334L9.375 19.7918L18.75 29.1668L39.5833 8.33343L36.6458 5.37509L18.75 23.2709L12.3125 16.8334Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div className="col">
                            <span>
                              <b>Active</b>
                            </span>
                            <p>
                              <b>2</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card bg__custom__red">
                      <div className="card-body">
                        <div className="row flex items-center justify-center gap-2">
                          <div className="col-3">
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.9999 28.334L19.9999 22.334L25.9999 28.334L28.3333 26.0007L22.3333 20.0007L28.3333 14.0007L25.9999 11.6673L19.9999 17.6673L13.9999 11.6673L11.6666 14.0007L17.6666 20.0007L11.6666 26.0007L13.9999 28.334ZM19.9999 36.6673C17.6944 36.6673 15.5277 36.2295 13.4999 35.354C11.4721 34.4784 9.70825 33.2912 8.20825 31.7923C6.70825 30.2923 5.52103 28.5284 4.64659 26.5007C3.77214 24.4729 3.33436 22.3062 3.33325 20.0007C3.33325 17.6951 3.77103 15.5284 4.64659 13.5007C5.52214 11.4729 6.70936 9.70898 8.20825 8.20898C9.70825 6.70898 11.4721 5.52176 13.4999 4.64732C15.5277 3.77287 17.6944 3.3351 19.9999 3.33398C22.3055 3.33398 24.4721 3.77176 26.4999 4.64732C28.5277 5.52287 30.2916 6.7101 31.7916 8.20898C33.2916 9.70898 34.4794 11.4729 35.3549 13.5007C36.2305 15.5284 36.6677 17.6951 36.6666 20.0007C36.6666 22.3062 36.2288 24.4729 35.3533 26.5007C34.4777 28.5284 33.2905 30.2923 31.7916 31.7923C30.2916 33.2923 28.5277 34.4801 26.4999 35.3556C24.4721 36.2312 22.3055 36.6684 19.9999 36.6673ZM19.9999 33.334C23.7221 33.334 26.8749 32.0423 29.4583 29.459C32.0416 26.8756 33.3333 23.7229 33.3333 20.0007C33.3333 16.2784 32.0416 13.1257 29.4583 10.5423C26.8749 7.95898 23.7221 6.66732 19.9999 6.66732C16.2777 6.66732 13.1249 7.95898 10.5416 10.5423C7.95825 13.1257 6.66659 16.2784 6.66659 20.0007C6.66659 23.7229 7.95825 26.8756 10.5416 29.459C13.1249 32.0423 16.2777 33.334 19.9999 33.334Z"
                                fill="#F8F8F8"
                              />
                            </svg>
                          </div>
                          <div className="col">
                            <span>
                              <b>Cancelled</b>
                            </span>
                            <p>
                              <b>1</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 my-2">
                    <div className="card bg__custom__red">
                      <div className="card-body">
                        <div className="row flex items-center justify-center gap-2">
                          <div className="col-3">
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.7675 23.75L27.07 18.4475L25.3025 16.68L20.0025 21.9825L14.6975 16.6825L12.93 18.4475L18.2325 23.75L12.9325 29.05L14.6975 30.82L20 25.5175L25.3025 30.82L27.07 29.0525L21.77 23.75H21.7675ZM27.5 7.5H33.75V36.25H6.25V7.5H12.5V10H27.5V7.5ZM15 7.5V3.75H25V7.5H15Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div className="col">
                            <span>
                              <b>FAILED</b>
                            </span>
                            <p>
                              <b>1</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mt-5">
                    <Tabs defaultActiveKey="first">
                      <Tab eventKey="first" title={'All'}>
                        <div className="users__tab__paddin">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date/Time</th>
                                <th scope="col">User ID</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Description</th>
                                <th scope="col">Plan Type</th>
                                <th scope="col">Duration</th>
                                <th scope="col"></th>
                                {/* <th scope="col">End Date</th>
                                <th scope="col">Paid</th>
                                <th scope="col">Status</th>
                                <th scope="col">Detail Links</th> */}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>02/08/2023 12:53</td>
                                <td>Lvphhdhd01</td>
                                <td>Naira</td>
                                <td>Binance</td>
                                <td className="font__amount">200USDT</td>
                                <td>210USDT</td>
                                <td className="font__approved">
                                  <Link
                                    to={{
                                      pathname: `/merchant_subscription_details/1`,
                                      state: { users: '' },
                                    }}
                                    className="view-more-btn"
                                  >
                                    {' '}
                                    View More
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>02/08/2023 12:53</td>
                                <td>Lvphhdhd01</td>
                                <td>Stable Coin</td>
                                <td>Binance</td>
                                <td className="font__amount">40USDT</td>
                                <td>910USDT</td>
                                <td className="font__pending">
                                  <Link
                                    to={{
                                      pathname: `/merchant_subscription_details/1`,
                                      state: { users: '' },
                                    }}
                                    className="view-more-btn"
                                  >
                                    {' '}
                                    View More
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>02/08/2023 12:53</td>
                                <td>Lvphhdhd01</td>
                                <td>Stable Coin</td>
                                <td>Binance</td>
                                <td className="font__amount">540USDT</td>
                                <td>1110USDT</td>
                                <td className="font__failed">
                                  <Link
                                    to={{
                                      pathname: `/merchant_subscription_details/1`,
                                      state: { users: '' },
                                    }}
                                    className="view-more-btn"
                                  >
                                    {' '}
                                    View More
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">4</th>
                                <td>02/08/2023 12:53</td>
                                <td>Lvphhdhd01</td>
                                <td>Naira</td>
                                <td>Binance</td>
                                <td className="font__amount">200USDT</td>
                                <td>210USDT</td>
                                <td className="font__approved">
                                  <Link
                                    to={{
                                      pathname: `/merchant_subscription_details/1`,
                                      state: { users: '' },
                                    }}
                                    className="view-more-btn"
                                  >
                                    {' '}
                                    View More
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Tab>
                      <Tab eventKey="second" title={'Pending'}>
                        <div className="users__tab__padding">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date/Time</th>
                                <th scope="col">Sender ID</th>
                                <th scope="col">Receiver ID</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Previous Balance</th>
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
                                <td className="font__amount">200USDT</td>
                                <td>210USDT</td>
                                <td className="font__approved">APPROVED</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>02/08/2023 12:53</td>
                                <td>Lvphhdhd01</td>
                                <td>Naira</td>
                                <td>Binance</td>
                                <td className="font__amount">200USDT</td>
                                <td>210USDT</td>
                                <td className="font__approved">APPROVED</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Tab>
                      <Tab eventKey="third" title="Active">
                        <div className="users__tab__padding">
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
                                <td className="font__amount">40USDT</td>
                                <td>910USDT</td>
                                <td className="font__pending">PENDING</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Tab>
                      <Tab eventKey="fifth" title="Failed">
                        <div className="users__tab__padding">
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
                                <td className="font__amount">540USDT</td>
                                <td>1110USDT</td>
                                <td className="font__failed">FAILED</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Tab>
                      <Tab eventKey="fourth" title="Canceled">
                        <div className="users__tab__padding">
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
            </div>
          </div>
        </FundRequestStyle>
      </DashboardView>
    </SidebarLayout>
  );
}

export default MerchantSubscription;
