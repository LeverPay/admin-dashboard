import React from 'react';

const DebitCard = () => {
  return (
    <form>
      <div className="my-2">
        <h5 className="my-1 text-slate-900 text-base font-bold leading-normal">
          Card Name
        </h5>{' '}
        <input
          type="text"
          name=""
          id=""
          className="w-full  p-5 bg-white bg-opacity-0 rounded-md shadow border border-gray-100 justify-start items-center inline-flex"
        />
      </div>

      <div className="my-2">
        <h5 className=" text-slate-900 text-base font-bold leading-normal outline-none my-2">
          LeverPay Logo
        </h5>{' '}
        <select
          name=""
          id=""
          className="w-[366px] h-14 pl-[337.07px] pr-[17.98px] rounded-md shadow border border-gray-100 justify-end items-center inline-flex outline-none"
        >
          <option value=""></option>
        </select>
      </div>

      <div className="my-2">
        <h5 className="my-1 text-slate-900 text-base font-bold leading-normal">
          Card Number{' '}
        </h5>{' '}
        <input
          type="number"
          name=""
          id=""
          placeholder="Auto Generate"
          className="w-full h-14 p-5 bg-white bg-opacity-0 rounded-md shadow border border-gray-100 justify-start items-center inline-flex outline-none"
        />
      </div>

      <div className="my-2">
        <h5 className=" text-slate-900 text-base font-bold leading-normal outline-none my-2">
          Valid Thru Date{' '}
        </h5>{' '}
        <select
          name=""
          id=""
          className="w-[366px] h-14 pl-[337.07px] pr-[17.98px] rounded-md shadow border border-gray-100 justify-end items-center inline-flex outline-none"
        >
          <option value=""></option>
        </select>
      </div>

      <div className="my-2">
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

      <div className="flex items-center justify-between my-5">
        <div className="py-2 px-3 bg-blue-600 rounded-[10px] border border-blue-600 cursor-pointer">
          <p className="text-sm text-white">Generate</p>
        </div>

        <div className="py-2 px-3  bg-red-600 rounded-[10px] border border-red-600 cursor-pointer">
          <p className="text-sm text-white">Cancel</p>
        </div>
      </div>
    </form>
  );
};

export default DebitCard;
