import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import SidebarLayout from '../Layouts/SidebarLayout';
import { Link } from 'react-router-dom';
import { FundRequestStyle } from '../css/FundrequestStyle';
import phoneLock from "../assets/ph_lock-simple-fill.svg";
import approveIcon from "../assets/approve__icon.svg";
import circleCheck from "../assets/circle-check-solid.svg";
import success from "../assets/success.jpg";

function CancelFormPage() {
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
                                        <div className='col text-danger'><b>Cancel Request</b></div> 
                                         <div className='col text-end'><img src={approveIcon} alt='all-request' /></div>   
                                    </div>
                                    <div className="row">
                                        <div className='col-12 mt-5 mb-3'>
                                          <p className='text-black text-bold'><b>Please select and describe the reason for cancelling this user's funding request</b></p>
                                        </div>
                                        <div className='col-12 mb-5'>
                                          <form>
                                            <div className="form-group mb-5">
                                                <label for="exampleInputEmail1">Why?</label>
                                               <select class="form-control" id="exampleFormControlSelect1">
                                                    <option></option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Description</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                                <Link className='btn btn-approve btn-block mt-3' to={{
                                                pathname: `/cancel_confirmation/1`,
                                                state: { users: '' }
                                            }} style={{float: "right"}}>Send</Link>
                                        </form>
                                        </div>
                                        <div className='col-12 text-center secured'>
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

export default CancelFormPage