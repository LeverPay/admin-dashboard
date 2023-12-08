import React, { useEffect } from "react";
import SidebarLayout from "../Layouts/SidebarLayout";
import { DashboardView } from "../css/DashboardPageStyles";
import close from "../assets/close.svg";
import minilogo from "../assets/mini-logo.svg";
import { useNavigate } from "react-router-dom";
import { getPaymentScheduleList } from "../services/apiService";
import phoneLock from "../assets/ph_lock-simple-fill.svg";

import AppModal from "./Modal";

const MerchantScheduleList = () => {
  const [show, setShow] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const [paymentScheduleList, setPaymentScheduleList] = React.useState([]);
  const [codeNo, setCodeNo] = React.useState(12345);
  const navigate = useNavigate();

  const getScheduleList = () => {
    getPaymentScheduleList(setPaymentScheduleList, codeNo);
  };

  const completeRemittanceConfirmation = () => {};

  useEffect(() => {
    getScheduleList();
  }, []);

  return (
    <SidebarLayout>
      <DashboardView>
        <div className="flex  items-center justify-center w-full p-5">
          <div className="w-[600px] h-full py-2 px-5 bg-white rounded-[10px] shadow">
            <div className="flex items-center justify-between mb-7">
              <img src={minilogo} alt="" />
              <img
                src={close}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  navigate("/remittance-mgt");
                }}
              />
            </div>
            <div className="text-right font-bold">Download Excel List</div>

            <div className="flex-col bg-[#C2D7FF] rounded-2xl p-3 mb-2 shadow-2xl">
              <div>
                <input type="checkbox" name="" id="" />{" "}
                <strong>Check All</strong>
              </div>
              <hr className="relative mt-0 mb-4 h-1 bg-black border-none" />
              <div className="mx-3">
                <span className="flex justify-between">
                  <strong>Merchant Name</strong>
                  <strong>Amount</strong>
                </span>
              </div>
              <hr className="mt-0 h-1 bg-black" />
              {/* List  */}
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  <input type="checkbox" name="" id="" /> Emerald Shopping Mall
                </span>
                <span>#15,000</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                onClick={() => setShow(true)}
                className="text-center w-[316px] mb-5 p-2 bg-blue-950 rounded-[12px]"
              >
                <span className="flex items-center justify-center text-white text-xl font-extrabold font-['Montserrat']">
                  Payment Completed
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="">
                <small className="text-black text-base font-medium">
                  Secured by
                </small>
                <small className="text-blue-900 text-base font-bold">
                  {" "}
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
          <div className="flex h-[300px] items-center justify-center gap-5 flex-col">
            <p className="text-center text-black text-base font-bold font-['Montserrat'] leading-normal">
              Are you sure these payment <br /> has been completed?
            </p>

            <div className="w-[277.55px] flex items-center justify-between">
              <div className="w-[134.75px]">
                <div
                  onClick={() => setConfirm(true)}
                  className="flex items-center justify-center text-center w-[100px] py-2  bg-blue-600 rounded-[10px]"
                >
                  {" "}
                  <div className="text-neutral-50 text-base font-bold font-['Montserrat']">
                    Yes
                  </div>
                </div>
              </div>
              <div onClick={() => setShow(false)} className="w-[134.75px]">
                <div className="flex items-center justify-center text-center w-[100px] py-2 bg-red-600 rounded-[10px]">
                  {" "}
                  <div className="  text-neutral-50 text-base font-bold font-['Montserrat']">
                    No
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 w-full">
              <img
                src={phoneLock}
                alt="all-request"
                className="w-[20.33px] h-auto"
              />
              <div className="">
                <small className="text-black text-base font-medium">
                  Secured by
                </small>
                <small className="text-blue-900 text-base font-bold">
                  {" "}
                  LeverPay
                </small>
              </div>
            </div>
          </div>
        </AppModal>

        <AppModal
          visible={confirm}
          closable={true}
          handleCancel={() => setConfirm(false)}
        >
          <div className="flex items-center justify-center flex-col gap-2 h-[550px]">
            <div className="flex items-end justify-end w-full pr-7">
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
                  strokeWidth="24.1073"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <p className="w-[373px] h-[30.76px] text-center text-lime-500 text-base font-extrabold font-['Montserrat']">
              You has successfully completed payment to 57 merchants{" "}
            </p>
            <p className="w-[455px] h-[49.21px] text-center text-neutral-400 text-xl font-bold font-['Montserrat']">
              A Confirmation mail has been sent to all the selected merchants{" "}
            </p>
            <div
              onClick={() => setConfirm(false)}
              className="w-[216px] mb-5 p-3 bg-blue-950 rounded-[5px]"
            >
              <span className="flex items-center justify-center text-white text-xl font-extrabold font-['Montserrat']">
                Close
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 w-full">
              <img
                src={phoneLock}
                alt="all-request"
                className="w-[20.33px] h-auto"
              />
              <div className="">
                <small className="text-black text-base font-medium">
                  Secured by
                </small>
                <small className="text-blue-900 text-base font-bold">
                  {" "}
                  LeverPay
                </small>
              </div>
            </div>
          </div>
        </AppModal>
      </DashboardView>
    </SidebarLayout>
  );
};

export default MerchantScheduleList;
