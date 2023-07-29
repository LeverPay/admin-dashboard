import React from 'react';
import logo from '../assets/card-logo.svg';
import scan from '../assets/card-scan.svg';
import eye from '../assets/icon _eye_.svg';
import lock from '../assets/emoji _lock_.svg';

const ATMCard = () => {
  return (
    <div className="w-[350px] bg-black rounded my-5 py-2 h-auto">
      <div className="flex items-center justify-end p-2">
        <img src={logo} alt="leverpay logo" className="w-[30%] h-auto " />
      </div>
      <div className="flex items-center gap-[150px] p-2">
        <img src={scan} alt="" className="w-[15%] h-auto " />
        <div className="flex items-center justify-center flex-col">
          <img src={eye} alt="" className="w-[20%] h-auto  " />
          <div className="text-white text-xs font-bold tracking-tight">
            Show Card Details
          </div>
        </div>
      </div>
      <div className="text-center my-2">
        <p className="text-white text-xl font-normal tracking-widest border border-black">
          xxxx xxxx xxxx 3748
        </p>
      </div>
      <div className="flex items-center justify-between px-4 ">
        <div className="flex flex-col items-start gap-2">
          <p className="text-white text-sm font-bold tracking-tight ">
            Valid Thru
          </p>
          <p className="text-white text-sm font-bold tracking-tight">04/26</p>
        </div>
        <p className="text-white text-l font-bold tracking-tight">USDT</p>
      </div>
      <div className="flex items-center justify-between px-4">
        <p className="text-white text-l font-bold tracking-tight">Name</p>
        <div className="flex items-center gap-2">
          <img src={lock} alt="" className="w-3 h-auto" />
          <p className="text-white text-l font-bold tracking-wide">Gold</p>
        </div>
      </div>
    </div>
  );
};

export default ATMCard;
