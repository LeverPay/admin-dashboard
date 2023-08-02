import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import SidebarLayout from '../Layouts/SidebarLayout';
import { Link } from 'react-router-dom';
import { FundRequestStyle } from '../css/FundrequestStyle';
import phoneLock from "../assets/ph_lock-simple-fill.svg";
import approveIcon from "../assets/approve__icon.svg";
import circleCheck from "../assets/circle-check-solid.svg";
import success from "../assets/success.jpg";
import cancel from "../assets/cancel.png";

function CancelConfirmationPage() {
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
                                        <div className='col approve__text'></div> 
                                         <div className='col text-end'><img src={approveIcon} alt='all-request' /></div>   
                                    </div>
                                    <div className="row">
                                        <div className='col-12 mt-5 mb-5 text-center'>
                                          <img src={cancel} alt='all-request' className='success__image'/>
                                          <p className='success__text'><b>Request Cancelled</b></p>
                                          <p className='text-danger'><b>The full description Has Being Sent to Ariyo123@gmail.com</b></p>
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

export default CancelConfirmationPage