import React, { useEffect, useState } from 'react';
import SidebarLayout from '../../Layouts/SidebarLayout';
import { DashboardNavView, DashboardView } from '../../css/DashboardPageStyles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FundRequestStyle } from '../../css/FundrequestStyle';
import axios from 'axios';
import './fundrequest.css'
import Loading from '../../Components/loading';
import Cookies from 'js-cookie';
import { baseUrl } from '../../utils/constants';
import { format } from 'date-fns';
import Pagination from '../../Components/Pagination';

function FundRequest() {
  const [fundRequestData, setFundRequestData] = useState(null);
  const [pending, setPending] = useState('pending')
  const authToken = Cookies.get('authToken');
  const [pendingRequest,setPendingRequest] =useState(null)
const [approvedRequest,setApprovedRequest] =useState(null)
const [declinedRequest,setDeclinedRequest] =useState(null)

  // Define a function to format the transactionDate
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'yyyy-MM-dd'); // Format date to 'yyyy-MM-dd'
  };

  React.useEffect(() => {
    document.title = 'Fund Request  | LeverPay Admin';
  }, []);

  useEffect(() => {
    getCurrentFundRequestData()
 
  }, []);

  const getCurrentFundRequestData=(page=1)=>{
    const apiUrl = `${baseUrl}/v1/admin/get-topup-requests?page=${page}`;
    const headers = {
      accept: '*/*',
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': 'VAjFe3gR4N6VeLZWsLPozlm4ttYquPC13KfprAim',
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        if (response.data) {
                  // Add a unique ID to each row
        setFundRequestData(response.data.data);
        const request = response.data.data.data
        let pending =request.filter(item => item.status === 0)
        let approved = request.filter(item => item.status === 1)
        let denied = request.filter(item => item.status === 2)

        setPendingRequest(pending)
        setApprovedRequest(approved)
        setDeclinedRequest(denied)


        }

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const amountformat = (request_amt) =>{
    const amt = parseFloat(request_amt).toFixed(2)
    return amt
}
 

  return (
    <SidebarLayout>
      <DashboardView>
        <div className="m-3 sticky top-0 right-0 bg-inherit p-2 z-10">
          <div className="flex items-center space-x-2 justify-between">
            <h2 className="text-slate-900 text-lg font-medium w-full leading-normal">
              Fund Request
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
                  <div className="col" onClick={()=>{
                      setPending('pending')
                    }} style={{cursor:'pointer'}}>
                    <div className="card bg__custom__blue">
                      <div className="card-body">
                        <div className="row flex items-center gap-2">
                          <div className="col-3">
                            <svg
                              width="50"
                              height="50"
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
                            <span>
                              <b>REQUEST</b>
                            </span>
                            <p>
                              <span className="text-white text-xl font-bold leading-normal">
                                {pendingRequest && pendingRequest.length}
                              </span>{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col" onClick={()=>{
                      setPending('approved')
                    }} style={{cursor:'pointer'}}>
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
                              <b>APPROVED</b>
                            </span>
                            <p>
                              <b>{approvedRequest && approvedRequest.length}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col" onClick={()=>{
                      setPending('declined')
                    }} style={{cursor:'pointer'}}>
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
                              <b>{declinedRequest && declinedRequest.length}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='funding-table'>
                  <ul className='tableHead'>
                    <li>
                      Name
                    </li>
                    <li>
                      Amount
                    </li>
                    <li>
                      Reference
                    </li>
                    <li>
                      Date
                    </li>
                    <li>
                      More 
                    </li>
                  </ul>
                  <div className='funding_tableBody'>
                    {
                      pending==='pending' && <>
                          {
                 pendingRequest && <>
                        {
                          pendingRequest?.map(item => {
                            return <ul key={item.created_at}>
                              <li>
                                {item.user.first_name} {item.user.last_name}
                              </li>
                              <li>
                                {amountformat(item.amount)}
                              </li>
                              <li>
                                {item.reference}
                              </li>
                              <li>
                                {formatDate(item.created_at)}
                              </li>
                              {/* <li className='funding_action'>
                                {
                                  isApproved ? <b style={{ color: 'green' }}>Approved</b> : approving ? <b style={{ color: 'gray' }}>Approving...</b> : <><img src="/images/done.png" alt="" onClick={approve_top_up} /><img src="/images/cancel.png" alt="" /></>
                                }

                              </li> */}
                              <li>
                                <Link to='/fund_request_more' state={item}>
                                  View More
                                </Link>
                              </li>
                            </ul>
                          })
                        }
                      </>
                    }
                     {
                      !fundRequestData && <Loading/>
                    }
                      </>
                    }
                    {
                      pending==='approved' && <>
                        {
                      approvedRequest && <>
                        {
                          approvedRequest?.map(item => {
                            return <ul key={item.created_at}>
                              <li>
                                {item.user.first_name} {item.user.last_name}
                              </li>
                              <li>
                                {amountformat(item.amount)}
                              </li>
                              <li>
                                {item.reference}
                              </li>
                              <li>
                                {formatDate(item.created_at)}
                              </li>
                              {/* <li className='funding_action'>
                                {
                                  isApproved ? <b style={{ color: 'green' }}>Approved</b> : approving ? <b style={{ color: 'gray' }}>Approving...</b> : <><img src="/images/done.png" alt="" onClick={approve_top_up} /><img src="/images/cancel.png" alt="" /></>
                                }

                              </li> */}
                              <li>
                                <Link to='/fund_request_more' state={item}>
                                  View More
                                </Link>
                              </li>
                            </ul>
                          })
                        }
                      </>
                    }
                     {
                      !fundRequestData && <Loading/>
                    }
                      </>
                    }
                    {
                      pending==='declined' && <>
                        {
                     declinedRequest&& <>
                        {
                          declinedRequest?.map(item => {
                            return <ul key={item.created_at}>
                              <li>
                                {item.user.first_name} {item.user.last_name}
                              </li>
                              <li>
                                {amountformat(item.amount)}
                              </li>
                              <li>
                                {item.reference}
                              </li>
                              <li>
                                {formatDate(item.created_at)}
                              </li>
                              {/* <li className='funding_action'>
                                {
                                  isApproved ? <b style={{ color: 'green' }}>Approved</b> : approving ? <b style={{ color: 'gray' }}>Approving...</b> : <><img src="/images/done.png" alt="" onClick={approve_top_up} /><img src="/images/cancel.png" alt="" /></>
                                }

                              </li> */}
                              <li>
                                <Link to='/fund_request_more' state={item}>
                                  View More
                                </Link>
                              </li>
                            </ul>
                          })
                        }
                      </>
                    }
                     {
                      !fundRequestData && <Loading/>
                    }
                      </>
                    }
                   
                  </div>
                  <div className="pagination__container">
                  <Pagination
                      className="pagination-bar"
                      currentPage={fundRequestData?.current_page}
                      totalCount={fundRequestData?.total}
                      pageSize={12}
                      onPageChange={(page) =>getCurrentFundRequestData(page)  }
                    />
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

export default FundRequest;
