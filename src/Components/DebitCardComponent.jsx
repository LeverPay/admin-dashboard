import React from 'react';
import { DashboardView } from '../css/DashboardPageStyles'
import { TransactionTable } from '../css/TransactionStyles'

const DebitCardComponent = () => {
  return (
    <DashboardView>
      <TransactionTable>
        <form>
          <div className="my-2">
            <h5 className="my-1 text-slate-900 text-base font-bold leading-normal">
              Card Name
            </h5>{' '}
            <input
              type="text"
              name=""
              id=""
              className="w-[516px] h-14 pl-[15px] pr-[276px] py-[19px]  bg-white bg-opacity-0 rounded-md shadow border border-gray-100 justify-start items-center inline-flex outline-none"
              placeholder="Gold Card"
            />
          </div>

          <div className="my-3">
            <h5 className=" text-slate-900 text-base font-bold leading-normal outline-none my-2">
              LeverPay Logo
            </h5>{' '}
            <select
              name=""
              id=""
              className="w-[366px] h-14 pl-[337.07px] pr-[17.98px] rounded-md shadow border border-gray-100 justify-end items-center inline-flex outline-none"
            >
              <option value="leverpay.jpg">Leverpay.jpg</option>
            </select>
          </div>

          <div className="my-3">
            <h5 className="my-1 text-slate-900 text-base font-bold leading-normal">
              Card Number{' '}
            </h5>{' '}
            <input
              type="number"
              name=""
              id=""
              placeholder="xxxx xxxx xxxx 3748"
              className="w-[516px] h-14 pl-[15px] pr-[276px] py-[19px]  bg-white bg-opacity-0 rounded-md shadow border border-gray-100 justify-start items-center inline-flex outline-none"
            />
          </div>

          <div className="my-3">
            <h5 className=" text-slate-900 text-base font-bold leading-normal outline-none my-2">
              Valid Thru Date{' '}
            </h5>{' '}
            <select
              name=""
              id=""
              className="w-[366px] h-14 pl-[337.07px] pr-[17.98px] rounded-md shadow border border-gray-100 justify-end items-center inline-flex outline-none"
            >
              <option value="">04/26</option>
            </select>
          </div>

          <div className="my-3">
            <h5 className=" text-slate-900 text-base font-bold leading-normal outline-none my-2">
              Card Status{' '}
            </h5>{' '}
            <select
              name=""
              id=""
              className="w-[366px] h-14 pl-[337.07px] pr-[17.98px] rounded-md shadow border border-gray-100 justify-end items-center inline-flex outline-none"
            >
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex items-center justify-between my-5 w-[366px] ">
            <div className="text-center flex items-center justify-center py-1 px-4 text-white bg-blue-600 rounded cursor-pointer">
              Update
            </div>

            <div className="text-center flex items-center justify-center py-1 px-4 text-white bg-red-600 rounded cursor-pointer">
              Cancel
            </div>
          </div>
        </form>
      </TransactionTable>
    </DashboardView>
  );
};

export default DebitCardComponent;
