import React from 'react';

const MerchantBankDetails = () => {
  return (
    <div className="p-5 bg-white">
      <div className="w-[156px] flex items-center justify-center text-center mb-3 h-12 bg-blue-600 rounded-[10px]">
        <span className="text-white text-xl font-bold leading-normal">
          Bank Details
        </span>
      </div>

      <div>
        <span className="text-slate-900 text-[22px] font-light leading-normal">
          Account Name :{' '}
        </span>
        <span className="text-slate-900 text-[22px] font-bold leading-normal">
          Leverchain Technology Ltd
          <br />
        </span>
        <span className="text-slate-900 text-[22px] font-light leading-normal">
          GTBANK :
        </span>
        <span className="text-slate-900 text-[22px] font-bold leading-normal">
          {' '}
          0023456700
          <br />
        </span>
        <span className="text-slate-900 text-[22px] font-light leading-normal">
          WEMA BANK:
        </span>
        <span className="text-slate-900 text-[22px] font-bold leading-normal">
          {' '}
          254887654
          <br />
        </span>
        <span className="text-slate-900 text-[22px] font-light leading-normal">
          FIRST BANK:{' '}
        </span>
        <span className="text-slate-900 text-[22px] font-bold leading-normal">
          1146589004
          <br />
        </span>
      </div>
    </div>
  );
};

export default MerchantBankDetails;
