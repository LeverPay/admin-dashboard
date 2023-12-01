import React from "react";
import SidebarLayout from "../Layouts/SidebarLayout";
import { DashboardView } from "../css/DashboardPageStyles";
import close from "../assets/close.svg";
import minilogo from "../assets/mini-logo.svg";
import { useNavigate } from "react-router-dom";

const MerchantScheduleList = () => {
  const navigate = useNavigate();

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
              <div className="text-center w-[316px] mb-5 p-2 bg-blue-950 rounded-[12px]">
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
      </DashboardView>
    </SidebarLayout>
  );
};

export default MerchantScheduleList;
