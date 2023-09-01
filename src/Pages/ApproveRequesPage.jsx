import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import SidebarLayout from '../Layouts/SidebarLayout';
import { Link } from 'react-router-dom';
import { FundRequestStyle } from '../css/FundrequestStyle';
import phoneLock from '../assets/ph_lock-simple-fill.svg';
import approveIcon from '../assets/approve__icon.svg';
import { useNavigate } from 'react-router-dom';

function ApproveRequesPage() {
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
                    <div className="flex items-center justify-center w-full">
                      <h2 className="text-lime-700 text-xl font-bold leading-normal">
                        Funding Approval
                      </h2>{' '}
                      <div className="col flex items-end justify-end">
                        <svg
                          width="39"
                          height="22"
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
                    <div className="row mt-5">
                      <div className="flex items-center justify-center gap-5">
                        <div className=" bg-slate-900 rounded-[20px] flex items-center justify-center p-2 flex-col">
                          {' '}
                          <span className="text-stone-300 text-base font-bold leading-normal">
                            Current Balance
                          </span>{' '}
                          <span className="text-white text-base font-bold leading-normal">
                            N 73,000 | $ 100.00
                          </span>
                        </div>

                        <div className=" bg-[#0C6903] rounded-[20px] flex items-center justify-center p-2 flex-col">
                          {' '}
                          <span className="text-stone-300 text-base font-bold leading-normal">
                            Current Balance
                          </span>{' '}
                          <span className="text-white text-base font-bold leading-normal">
                            N 73,000 | $ 100.00
                          </span>
                        </div>
                      </div>
                      <div className="col-12 ">
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            Full Name :{' '}
                          </span>{' '}
                          <span className="text-blue-950 text-base font-extrabold">
                            Lvpxe325x97
                          </span>{' '}
                        </p>
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            Phone:{' '}
                          </span>
                          <span className="text-blue-950 text-base font-extrabold">
                            Naira
                          </span>
                        </p>
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            Email:{' '}
                          </span>
                          <span className="text-blue-950 text-base font-extrabold">
                            Binance
                          </span>
                        </p>
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            User Id:{' '}
                          </span>
                          <span className="text-blue-950 text-base font-extrabold">
                            4000
                          </span>
                        </p>
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            Fundng Type:{' '}
                          </span>
                          <span className="text-blue-950 text-base font-extrabold">
                            test@leverpay.com
                          </span>
                        </p>
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            Narration:{' '}
                          </span>
                          <span className="text-blue-950 text-base font-extrabold">
                            test@leverpay.com
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            Source:{' '}
                          </span>
                          <span className="text-blue-950 text-base font-extrabold"></span>
                        </p>
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            GTB
                          </span>
                          <span className="text-blue-950 text-base font-extrabold">
                            SSSSSSS
                          </span>
                        </p>
                        <p className="flex items-center gap-2 my-2">
                          <span className="text-blue-950 text-base font-medium">
                            Coinbase Wallet
                          </span>
                          <span className="text-blue-950 text-base font-extrabold">
                            SSSSSSS
                          </span>
                        </p>
                      </div>
                      <div>
                        <span>Message (Optional)</span>
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                          className=" border border-stone-900 rounded"
                        ></textarea>
                      </div>
                      <div className="flex items-center justify-center gap-1 mt-5">
                        <Link
                          className="btn btn-approve"
                          to={{
                            pathname: `/approve_confirmation/1`,
                            state: { users: '' },
                          }}
                        >
                          {' '}
                          Approve
                        </Link>
                        <Link
                          className="btn btn-amber  bg-amber-500 text-white"
                          to={{
                            pathname: `/approve_confirmation/1`,
                            state: { users: '' },
                          }}
                        >
                          {' '}
                          Pending
                        </Link>
                        <Link
                          className="btn btn-danger"
                          to={{
                            pathname: `/cancel_form/1`,
                            state: { users: '' },
                          }}
                          style={{ float: 'right' }}
                        >
                          Cancel
                        </Link>
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

export default ApproveRequesPage;
