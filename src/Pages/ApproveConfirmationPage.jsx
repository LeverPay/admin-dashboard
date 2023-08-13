import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import SidebarLayout from '../Layouts/SidebarLayout';
import { Link } from 'react-router-dom';
import { FundRequestStyle } from '../css/FundrequestStyle';
import phoneLock from '../assets/ph_lock-simple-fill.svg';
import approveIcon from '../assets/approve__icon.svg';
import circleCheck from '../assets/circle-check-solid.svg';
import success from '../assets/success.jpg';

function ApproveConfirmationPage() {
  return (
    <SidebarLayout>
      <DashboardView>
        <div className="m-3 sticky top-0 right-0 bg-inherit p-2 z-10">
          <Link to="/basic_information" className="profile-img flex-end">
            <img
              src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="profile-img"
            />
          </Link>
        </div>
        <FundRequestStyle>
          <div className="transaction__table">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <div className="row">
                      <div className="col approve__text"></div>
                      <div className="col flex items-end justify-end">
                        <svg
                          width="59"
                          height="32"
                          viewBox="0 0 59 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.8379 0.7325C14.3347 2.77133 9.61749 8.83578 9.61749 16C9.61749 23.1642 14.3347 29.2287 20.8379 31.2675C19.3199 31.7434 17.7045 32 16.0291 32C7.17648 32 0 24.8366 0 16C0 7.16344 7.17648 0 16.0291 0C17.7045 0 19.3199 0.256602 20.8379 0.7325Z"
                            fill="#0051FF"
                          />
                          <path
                            d="M44.2404 16C44.2404 24.8366 37.0639 32 28.2113 32C19.3586 32 12.1821 24.8366 12.1821 16C12.1821 7.16344 19.3586 0 28.2113 0C37.0639 0 44.2404 7.16344 44.2404 16Z"
                            fill="#082E88"
                          />
                          <path
                            d="M46.4845 16C46.4845 8.83578 41.7673 2.77129 35.2641 0.7325C36.7822 0.256562 38.3975 0 40.0729 0C45.6138 0 50.4981 2.80637 53.377 7.07285C51.6564 9.62281 50.6521 12.6943 50.6521 16C50.6521 19.3057 51.6564 22.3772 53.377 24.9271C50.4981 29.1936 45.6138 32 40.0729 32C38.3975 32 36.7822 31.7434 35.2641 31.2675C41.7673 29.2287 46.4845 23.1642 46.4845 16Z"
                            fill="#0051FF"
                          />
                          <path
                            d="M55.9417 7.07285C54.2211 9.62281 53.2168 12.6943 53.2168 16C53.2168 19.3057 54.2211 22.3772 55.9417 24.9271C57.6624 22.3772 58.6667 19.3057 58.6667 16C58.6667 12.6943 57.6624 9.62281 55.9417 7.07285Z"
                            fill="#082E88"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-5 mb-5 flex items-center justify-center flex-col text-center">
                        <svg
                          width="168"
                          height="168"
                          viewBox="0 0 168 168"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.1">
                            <path
                              d="M83.9541 0C130.288 0 167.908 37.5358 167.908 83.7666C167.908 129.997 130.288 167.533 83.9541 167.533C37.6198 167.533 0 129.997 0 83.7666C0 37.5358 37.6198 0 83.9541 0Z"
                              fill="#5FCE2F"
                            />
                          </g>
                          <g opacity="0.2">
                            <path
                              d="M83.9538 10.2305C124.629 10.2305 157.654 43.1819 157.654 83.7663C157.654 124.351 124.629 157.302 83.9538 157.302C43.2786 157.302 10.2534 124.351 10.2534 83.7663C10.2534 43.1819 43.2786 10.2305 83.9538 10.2305Z"
                              fill="#5FCE2F"
                            />
                          </g>
                          <path
                            d="M83.9538 24.3008C116.847 24.3008 143.554 50.9482 143.554 83.7684C143.554 116.589 116.847 143.236 83.9538 143.236C51.0601 143.236 24.353 116.589 24.353 83.7684C24.353 50.9482 51.0601 24.3008 83.9538 24.3008Z"
                            fill="#5FCE2F"
                          />
                          <path
                            d="M52.7913 91.3136C60.0047 97.0885 74.4322 108.638 74.4322 108.638C74.4322 108.638 100.96 79.1219 114.224 64.3642"
                            stroke="white"
                            stroke-width="24.1073"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <p className="success__text">Transaction Successful</p>
                        <p className="text-center text-orange-600 text-base font-extrabold">
                          Transaction Alert Has Being Sent to
                          <br />
                          Ariyo123@gmail.com
                        </p>
                      </div>

                      <div className="flex items-center justify-center mt-5 gap-1 w-full">
                        <img
                          src={phoneLock}
                          alt="all-request"
                          className="w-[20.33px] h-auto"
                        />
                        <div>
                          <small className="text-black text-base font-medium">
                            Secured by
                          </small>
                          <small className="text-blue-900 text-base font-bold">
                            {' '}
                            LeverPay
                          </small>
                        </div>
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
  );
}

export default ApproveConfirmationPage;
