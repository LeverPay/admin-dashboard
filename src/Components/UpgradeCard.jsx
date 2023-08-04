import React from 'react';
import request from '../assets/request-vector.svg';

const UpgradeCard = () => {
  return (
    <div className="w-[254px] h-[120px] bg-slate-900 rounded-[20px] flex items-center py-2 px-3 justify-between ">
      <img src={request} alt="" />
      <div className="flex items-end justify-end flex-col justify-items-end">
        <h2 className="text-white text-lg font-bold leading-normal">REQUEST</h2>
        <h2 className="text-white text-base font-bold leading-normal">500</h2>
      </div>
    </div>
  );
};

export default UpgradeCard;
