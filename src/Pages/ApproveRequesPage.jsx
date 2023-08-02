import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import SidebarLayout from '../Layouts/SidebarLayout';
import { Link } from 'react-router-dom';
import { FundRequestStyle } from '../css/FundrequestStyle';
import phoneLock from "../assets/ph_lock-simple-fill.svg";
import approveIcon from "../assets/approve__icon.svg";
import { useNavigate } from "react-router-dom";

function ApproveRequesPage() {

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
                    <div className='row'>
                          <div className="col-md-4 offset-md-4">
                            <div className="card shadow-lg">
                                  <div className="card-body">
                                    <div className='row'>
                                        <div className='col approve__text'>Approve</div> 
                                         <div className='col text-end'><img src={approveIcon} alt='all-request' /></div>   
                                    </div>
                                    <div className="row mt-5">
                                        <div className='col-12'>
                                            <h6><b>Narration</b></h6>      
                                        </div>
                                        <div className='col-12'>
                                              <p>LeverPay ID: <span className='narration__text'>Lv199jjsdie9</span></p>
                                              <p>Currency: <span className='narration__text ml-2'>Naira</span></p>
                                              <p>Source: <span className='narration__text ml-2'>Binance</span></p>
                                              <p>Amount: <span className='narration__text ml-2'>4000</span></p>
                                              <p>User Email: <span className='narration__text ml-2'>test@leverpay.com</span></p>
                                        </div>
                                        <div className='col-12 mt-5'>
                                              <Link className='btn btn-approve' to={{
                                                    pathname: `/approve_confirmation/1`,
                                                    state: { users: '' }
                                                }}> Approve</Link>
                                              <Link className='btn btn-danger' to={{
                                                    pathname: `/cancel_form/1`,
                                                    state: { users: '' }
                                                }} style={{float: "right"}}>Cancel</Link>
                                        </div> 
                                        <div className='col-12 mt-5 text-center secured'>
                                              <img src={phoneLock} alt='all-request' /><small>Secured by <b>LeverPay</b></small>
                                        </div>    
                                    </div>  
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

export default ApproveRequesPage