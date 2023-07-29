import React from 'react';
import SidebarLayout from '../Layouts/SidebarLayout';
import Transaction from '../Components/Transaction';
import { DashboardNavView, DashboardView, AddUserContainer } from '../css/DashboardPageStyles';

function AddUserPage() {
  return (
    <SidebarLayout>
          <DashboardView>
              <AddUserContainer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3 mt-5 mb-5 add__user__container'>
                            <div className='card shadow-lg'>
                                <div className='card-body'>
                                    <h5 className='text-center'>Create User Account</h5>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput">First Name</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Last Name</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput2" />
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-12 col-xs-12 col-sm-12">
                                                <label for="inputZip">Phone Number</label>
                                            </div>
                                            <div className="form-group col-md-2 col-xs-2 col-sm-2">
                                                <input type="text" class="form-control" id="inputZip" placeholder='+234'/>
                                            </div>
                                            <div className="form-group col-md-10 col-xs-10 col-sm-10">
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Email Address</label>
                                            <input type="email" className="form-control" id="formGroupExampleInput2" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Password</label>
                                            <input type="password" className="form-control" id="formGroupExampleInput2" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Confirm Password</label>
                                            <input type="password" className="form-control" id="formGroupExampleInput2" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputState">Role</label>
                                            <select id="inputState" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-xs-12 mt-3 mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                <label className="form-check-label" htmlFor="gridCheck1">
                                                I Agree to the LeverPay terms of use and <a href='/'>privacy policy</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-12 col-md-12 col-xs-12">
                                                <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
              </AddUserContainer>
        </DashboardView>
    </SidebarLayout>
  )
}

export default AddUserPage