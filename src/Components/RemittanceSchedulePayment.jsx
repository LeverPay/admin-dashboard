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

const RemittanceSchedulePayment = () => {
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
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[250.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      First Name :{" "}
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      OKOYE{" "}
                    </span>
                  </div>
                </div>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[250.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Last Name :{" "}
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      Aboki{" "}
                    </span>
                  </div>
                </div>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[370.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Email :{" "}
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
                      Nina001@gmail.com
                    </span>
                  </div>
                </div>
                <div className="w-[338.89px] my-2 ">
                  <div className="w-[300.14px] flex items-center justify-between my-2">
                    <span className="text-black text-base font-normal font-['Montserrat'] leading-normal">
                      Phone Number :{" "}
                    </span>
                    <span className="text-black text-base font-bold font-['Montserrat'] leading-normal">
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
              <div className="w-[202.91px] h-[51px] cursor-pointer">
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
      </DashboardView>
    </SidebarLayout>
  );
};

export default RemittanceSchedulePayment;
