import React from 'react';

const AccountBalance = () => {
  return (
    <div>
      <div>
        <span className="text-black text-[22px] font-light leading-normal">
          First Name :{' '}
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          Nina
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Last Name :{' '}
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          Okoye
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          LeverPay User ID :
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {' '}
          Lvpx342123zp
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Card Type :{' '}
        </span>
        <span className="text-amber-700 text-[22px] font-bold leading-normal">
          Gold Card
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Status :
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {' '}
        </span>
        <span className="text-green-900 text-[22px] font-bold leading-normal">
          Active
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Account Balance :
        </span>
        <span className="text-orange-700 text-[22px] font-bold leading-normal">
          N 900,000
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Amount Spent :{' '}
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {' '}
          N
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          {' '}
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          300,000
          <br />
        </span>
      </div>

      <div className="w-[1007px] h-[317px] bg-gray-900 rounded-[10px] p-5 my-5">
        <div className="flex items-center justify-between">
          <h2 className="w-[190px] text-white text-lg font-bold">
            Recent Transaction
          </h2>
          <span>
            <div className="text-right text-lime-700 text-sm font-semibold">
              View All
            </div>
          </span>
        </div>
        <div className="grid grid-cols-5">
          <div>
            <h2 className="w-[216.27px] text-stone-400 text-[13px] font-medium my-3">
              NAME/BUSINESS
            </h2>
            <div>
              <h2 className="w-[216.27px] text-white text-sm font-medium">
                Iphone 13 ProMax
              </h2>
              <span className="w-[216.27px] text-stone-400 text-sm font-medium">
                Apple. Inc
              </span>
            </div>
            <div>
              <h2 className="w-[216.27px] text-white text-sm font-medium">
                Netflix Subscription{' '}
              </h2>
              <span className="w-[216.27px] text-stone-400 text-sm font-medium">
                Netflix{' '}
              </span>
            </div>
            <div>
              <h2 className="w-[216.27px] text-white text-sm font-medium">
                Nike Emax{' '}
              </h2>
              <span className="w-[216.27px] text-stone-400 text-sm font-medium">
                Nike{' '}
              </span>
            </div>
          </div>

          {/* Type */}
          <div>
            <h2 className="w-[69.42px] text-stone-400 text-[13px] font-medium my-3">
              TYPE
            </h2>
            <div className="flex items-start flex-col ">
              <div className="h-[60px]">
                <span className="w-[69.42px]  text-stone-400 text-[13px] font-medium">
                  Mobile
                </span>
              </div>
              <div className="h-[60px]">
                <span className="w-[69.42px] text-stone-400 text-[13px] font-medium">
                  Mobile
                </span>
              </div>
              <div className="h-[60px]">
                <span className="w-[69.42px] text-stone-400 text-[13px] font-medium">
                  Mobile
                </span>
              </div>
            </div>
          </div>

          {/* Amount */}
          <div>
            <h2 className="w-[69.42px] text-stone-400 text-[13px] font-medium my-3">
              AMOUNT
            </h2>
            <div className="flex items-start flex-col ">
              <div className="h-[60px]">
                <div className="w-[69.42px] text-white text-sm font-bold">
                  $420.84
                </div>
              </div>
              <div className="h-[60px]">
                <div className="w-[69.42px] text-white text-sm font-bold">
                  $420.84
                </div>
              </div>
              <div className="h-[60px]">
                <div className="w-[69.42px] text-white text-sm font-bold">
                  $420.84
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div>
            <h2 className="w-[69.42px] text-stone-400 text-[13px] font-medium my-3">
              Status
            </h2>
            <div className="flex items-start flex-col ">
              <div className="h-[60px]">
                <div className="w-[85.80px] text-lime-700 text-sm font-bold">
                  Completed
                </div>
              </div>
              <div className="h-[60px]">
                <div className="w-[85.80px] text-amber-500 text-sm font-bold">
                  Pending
                </div>
              </div>
              <div className="h-[60px]">
                <div className="w-[85.80px] text-lime-700 text-sm font-bold">
                  Completed
                </div>
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <h2 className="w-[69.42px] text-stone-400 text-[13px] font-medium my-3">
              Date
            </h2>
            <div className="flex items-start flex-col ">
              <div className="h-[60px]">
                <div className="w-[86.84px] text-stone-400 text-[13px] font-medium">
                  14 Mar 2023
                </div>
              </div>
              <div className="h-[60px]">
                <div className="w-[86.84px] text-stone-400 text-[13px] font-medium">
                  14 Mar 2023
                </div>
              </div>
              <div className="h-[60px]">
                <div className="w-[86.84px] text-stone-400 text-[13px] font-medium">
                  14 Mar 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
