import React from 'react';
import SidebarLayout from '../Layouts/SidebarLayout';
import minilogo from '../assets/mini-logo.svg';
import { DashboardView } from '../css/DashboardPageStyles';
import phoneLock from '../assets/ph_lock-simple-fill.svg';
import AppModal from '../Components/Modal';
import close from '../assets/close.svg';
import { useNavigate } from 'react-router-dom';

const LeverpayInvestor = () => {
  const [show, setShow] = React.useState(false);
  const [deny, setDeny] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const navigate = useNavigate();

  return (
    <SidebarLayout>
      <DashboardView>
        <div className="flex items-center justify-center w-full p-5">
          <div className="w-[651px] h-[935.85px] p-5 bg-white rounded-[10px] shadow">
            <div className="flex items-center justify-between">
              <img src={minilogo} alt="" />
              <img
                src={close}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  navigate('/investors');
                }}
              />
            </div>
            <h2 className="my-5 text-center text-indigo-950 text-2xl font-bold font-['Montserrat'] leading-normal">
              Leverpay Investor
            </h2>

            <div className="w-[338.89px] my-5 ">
              <div className="w-[304.14px] flex items-center justify-between my-2">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  First Name :{' '}
                </span>
                <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                  Nina{' '}
                </span>
              </div>
              <div className="w-[304.14px] flex items-center justify-between my-2">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  Last Name :{' '}
                </span>
                <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                  OKOYE
                </span>
              </div>
              <div className="w-[304.14px] flex items-center justify-between my-2">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  Othername :{' '}
                </span>
                <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                  Aboki
                </span>
              </div>
              <div className="w-[304.14px] flex items-center justify-between my-2">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  Gender :{' '}
                </span>
                <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                  Female
                </span>
              </div>
              <div className="w-[304.14px] flex items-center justify-between my-2">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  Email :{' '}
                </span>
                <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                  Nina001@gmail.com
                </span>
              </div>
              <div className="w-[304.14px] flex items-center justify-between my-2 text-black text-base font-normal font-['Montserrat'] leading-normal">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  Date of Birth :{' '}
                </span>
                <span className="text-black text-base font-['Montserrat'] leading-normal">
                  12/09/2023
                </span>
              </div>
              <div className="w-[304.14px] flex items-center justify-between my-2 text-black text-base font-normal font-['Montserrat'] leading-normal">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  Phone number :{' '}
                </span>
                <span className="text-black text-base font-['Montserrat'] leading-normal">
                  09060898687
                </span>
              </div>
              <div className="w-[304.14px] flex items-center justify-between my-2 text-black text-base font-normal font-['Montserrat'] leading-normal">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  State :{' '}
                </span>
                <span className="text-black text-base font-['Montserrat'] leading-normal">
                  Lagos
                </span>
              </div>
              <div className="w-[304.14px] flex items-center justify-between my-2">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  Amount Invested :{' '}
                </span>
                <span className="text-purple-800 text-base font-bold font-['Montserrat'] leading-normal">
                  10,000
                </span>
              </div>
            </div>

            <div>
              <h2 className=" text-black text-base font-normal font-['Montserrat'] leading-normal">
                Note :{' '}
              </h2>
              <textarea className="w-[439px] h-[100px] outline-none p-1 bg-zinc-300 rounded-md" />
            </div>

            <div className="flex items-center justify-between my-2">
              <div
                className="w-[202.91px] h-[51px] cursor-pointer"
                onClick={() => setShow(true)}
              >
                <div className="px-5 py-3 text-center  bg-blue-600 rounded-[10px]">
                  <div className=" text-neutral-50 text-base font-bold font-['Montserrat']">
                    Approve
                  </div>
                </div>
              </div>

              <div
                className="w-[202.91px] h-[51px]  cursor-pointer"
                onClick={() => setDeny(true)}
              >
                <div className="px-5 py-3 text-center  bg-red-600 rounded-[10px]">
                  <div className=" text-neutral-50 text-base font-bold font-['Montserrat']">
                    Deny
                  </div>
                </div>
              </div>
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
        <AppModal
          visible={show}
          closable={true}
          handleCancel={() => setShow(false)}
        >
          <div className="flex items-center justify-center flex-col">
            <p className="w-[215.20px] h-12 text-center text-black text-base font-bold font-['Montserrat'] leading-normal">
              Are you Sure you want to <br />
              Approve this investor?
            </p>

            <div className="w-[277.55px] flex items-center justify-between">
              <span className="cursor-pointer" onClick={() => setConfirm(true)}>
                <div className="flex items-center justify-center text-center w-[100px] py-2  bg-blue-600 rounded-[10px]">
                  <div className="  text-neutral-50 text-base font-bold font-['Montserrat']">
                    Yes
                  </div>
                </div>
              </span>
              <span>
                <div className="flex items-center justify-center text-center w-[100px] py-2 bg-red-600 rounded-[10px]">
                  <div className="  text-neutral-50 text-base font-bold font-['Montserrat']">
                    No
                  </div>
                </div>
              </span>
            </div>
          </div>
        </AppModal>

        <AppModal
          visible={deny}
          closable={true}
          handleCancel={() => setDeny(false)}
        >
          <div className="flex items-center justify-center gap-5 flex-col">
            <p className="h-12 text-center text-black text-base font-bold font-['Montserrat'] leading-normal">
              This investment would canceled because
              <br /> the payment was not received
            </p>

            <div className="w-[277.55px] h-[51px] flex items-center justify-between">
              <div className="w-[134.75px] h-[51px] ">
                <div className="flex items-center justify-center text-center w-[100px] py-2  bg-blue-600 rounded-[10px]">
                  {' '}
                  <div className="  text-neutral-50 text-base font-bold font-['Montserrat']">
                    Yes
                  </div>
                </div>
              </div>
              <div className="w-[134.75px] h-[51px]  ">
                <div className="flex items-center justify-center text-center w-[100px] py-2 bg-red-600 rounded-[10px]">
                  {' '}
                  <div className="  text-neutral-50 text-base font-bold font-['Montserrat']">
                    No
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppModal>
        <AppModal
          visible={confirm}
          closable={true}
          handleCancel={() => setConfirm(false)}
        >
          <div className="flex items-center justify-center flex-col gap-2">
            <div className="flex items-end justify-end w-full pr-7 ">
              <img src={minilogo} alt="" />
            </div>
            <svg
              width="270"
              height="232"
              viewBox="0 0 270 232"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_7368_3394"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="270"
                height="232"
              >
                <path
                  d="M269.523 0.578125H0V231.123H269.523V0.578125Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_7368_3394)">
                <g opacity="0.1">
                  <path
                    d="M134.761 25.3535C199.715 25.3535 252.453 65.7511 252.453 115.507C252.453 165.262 199.715 205.66 134.761 205.66C69.8074 205.66 17.0698 165.262 17.0698 115.507C17.0698 65.7511 69.8074 25.3535 134.761 25.3535Z"
                    fill="#5FCE2F"
                  />
                </g>
                <g opacity="0.2">
                  <path
                    d="M134.761 36.3652C191.782 36.3652 238.079 71.8289 238.079 115.507C238.079 159.186 191.782 194.65 134.761 194.65C77.7404 194.65 31.4438 159.186 31.4438 115.507C31.4438 71.8289 77.7404 36.3652 134.761 36.3652Z"
                    fill="#5FCE2F"
                  />
                </g>
                <path
                  d="M134.762 51.5059C180.874 51.5059 218.313 80.1849 218.313 115.507C218.313 150.83 180.874 179.509 134.762 179.509C88.6495 179.509 51.21 150.83 51.21 115.507C51.21 80.1849 88.6495 51.5059 134.762 51.5059Z"
                  fill="#5FCE2F"
                />
                <path
                  d="M91.9013 124.865C101.293 130.987 120.078 143.231 120.078 143.231C120.078 143.231 158.157 109.7 177.197 92.9354"
                  stroke="white"
                  stroke-width="24.1073"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <p className="w-[373px] h-[30.76px] text-center text-lime-500 text-base font-extrabold font-['Montserrat']">
              You have successfully approve this investment
            </p>
            <p className="w-[455px] h-[49.21px] text-center text-neutral-400 text-xl font-bold font-['Montserrat']">
              A Confirmation mail will be sent to *****scaled@gmail.com.
            </p>
            <div className="w-[216px] p-3 bg-blue-950 rounded-[5px]">
              <span className="flex items-center justify-center text-white text-xl font-extrabold font-['Montserrat']">
                Close
              </span>
            </div>
          </div>
        </AppModal>
      </DashboardView>
    </SidebarLayout>
  );
};

export default LeverpayInvestor;
