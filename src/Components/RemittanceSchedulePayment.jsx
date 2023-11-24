import React from "react";
import SidebarLayout from "../Layouts/SidebarLayout";
import { DashboardView } from "../css/DashboardPageStyles";
import close from "../assets/close.svg";
import minilogo from "../assets/mini-logo.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import phoneLock from "../assets/ph_lock-simple-fill.svg";

import AppModal from "./Modal";

const RemittanceSchedulePayment = () => {
  const [show, setShow] = React.useState(false);
  const [deny, setDeny] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const navigate = useNavigate();

  return (
    <SidebarLayout>
      <DashboardView>
        <div className="flex items-center justify-center w-full p-5">
          <div className="w-[651px] h-full p-5 bg-white rounded-[10px] shadow">
            <div className="flex items-center justify-between">
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
            <h2 className="my-5 text-center text-indigo-950 text-2xl font-bold font-['Montserrat'] leading-normal">
              Leverpay Merchant Remittance
            </h2>

            <div className="w-[338.89px] my-5 ">
              <div className="w-[250.14px] flex items-center justify-between my-2">
                <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                  Business Name :{" "}
                </span>
                <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                  Drive Stores{" "}
                </span>
              </div>
            </div>

            {/* Contact Details  */}
            <div>
              <span className="bg-[#E7F1FA] border p-2 rounded-lg text-xs font-bold">
                Contact Details
              </span>
              <div className="bg-[#E7F1FA] border p-3 rounded-lg text-xs font-bold mt-2">
                <div className="my-2 ">
                  <div className="flex items-center justify-start my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      First Name :
                    </span>
                    <span className="ml-[90px] text-black text-base font-bold font-['Montserrat'] leading-normal">
                      OKOYE
                    </span>
                  </div>
                </div>
                <div className="my-2">
                  <div className=" flex items-center justify-start my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Last Name :{" "}
                    </span>
                    <span className="ml-[90px] text-black text-base font-bold font-['Montserrat'] leading-normal">
                      Aboki
                    </span>
                  </div>
                </div>
                <div className="my-2 ">
                  <div className="flex items-center justify-start my-2">
                    <span className="mr-[90px] text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Email :
                    </span>
                    <span className="ml-10 text-black text-base font-bold font-['Montserrat'] leading-normal">
                      Nina001@gmail.com
                    </span>
                  </div>
                </div>
                <div className="my-2 ">
                  <div className="flex items-center justify-start my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Phone Number :{" "}
                    </span>
                    <span className="ml-[50px] text-black text-base font-bold font-['Montserrat'] leading-normal">
                      09060898687
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BANK & CRYPTO WALLET DETAIL  */}
            <div className="my-5">
              <span className="bg-[#E7F1FA] border p-2 rounded-lg text-xs font-bold">
                Bank & Crypto Wallet Details
              </span>
              <div className="bg-[#E7F1FA] border p-3 rounded-lg text-xs font-bold mt-2">
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[250.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Account Name :{" "}
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      OKOYE{" "}
                    </span>
                  </div>
                </div>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[250.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Bank Name :{" "}
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      Aboki{" "}
                    </span>
                  </div>
                </div>
                <hr className="text-[#690303] h-1"></hr>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[370.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Crypto Exchange Network :{" "}
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      Binance{" "}
                    </span>
                  </div>
                </div>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[300.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base mr-7 font-normal font-['Montserrat'] leading-normal">
                      Address:
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      090sfafpjq90rjqwfjqwpefojqwef60898687
                    </span>
                  </div>
                </div>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[370.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Crypto Exchange Network :{" "}
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      Binance{" "}
                    </span>
                  </div>
                </div>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[300.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base mr-7 font-normal font-['Montserrat'] leading-normal">
                      Address:
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      090sfafpjq90rjqwfjqwpefojqwef60898687
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* REVENUW  */}
            <div className="my-5">
              <span className="bg-[#E7F1FA] border p-2 rounded-lg text-xs font-bold">
                Revenue
              </span>
              <div className="bg-[#E7F1FA] border p-3 rounded-lg text-xs font-bold mt-2">
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[250.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Wallet balance :
                    </span>
                    <span className="font-bold ml-[50px] font-['Montserrat'] leading-normal text-xl text-[#6A0898]">
                      10, 200
                    </span>
                    <br />
                  </div>
                  <div className="ml-[200px]">
                    <FontAwesomeIcon
                      icon={faLongArrowUp}
                      className="w-3 h-15 p-0 ml-2"
                    />
                    <FontAwesomeIcon
                      icon={faLongArrowDown}
                      className="w-3 h-15 p-0 ml-2"
                    />
                  </div>
                </div>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[250.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Amount to be remitted:
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      Aboki
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between my-2">
              <div
                onClick={() => setShow(true)}
                className="w-[202.91px] h-[51px] cursor-pointer"
              >
                <div className="px-5 py-3 text-center  bg-blue-600 rounded-[10px]">
                  <div className=" text-neutral-50 text-base font-bold font-['Montserrat']">
                    Send
                  </div>
                </div>
              </div>

              <div className="w-[202.91px] h-[51px]  cursor-pointer">
                <div className="px-5 py-3 text-center  bg-red-600 rounded-[10px]">
                  <div className=" text-neutral-50 text-base font-bold font-['Montserrat']">
                    Cancel
                  </div>
                </div>
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
              Are you Sure you want to <br />
              process this remittance?
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
              <div className="w-[134.75px]">
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
              You have successfully approve this investment
            </p>
            <p className="w-[455px] h-[49.21px] text-center text-neutral-400 text-xl font-bold font-['Montserrat']">
              A Confirmation mail will be sent to *****scaled@gmail.com.
            </p>
            <div className="w-[216px] mb-5 p-3 bg-blue-950 rounded-[5px]">
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

export default RemittanceSchedulePayment;
