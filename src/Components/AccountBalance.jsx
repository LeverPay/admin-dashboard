import React from 'react';

const AccountBalance = ({ userData }) => {
  return (
    <div>
      <div>
        <p className="flex justify-between w-[70%] items-center gap-2 my-2">
          <span className="text-black text-[22px] font-light leading-normal">
            First Name :{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
            {userData.first_name}
            <br />
          </span>
        </p>
        <p className="flex justify-between w-[70%] items-center gap-2 my-2">
          <span className="text-black text-[22px] font-light leading-normal">
            Last Name :{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
            {userData.last_name}
            <br />
          </span>
        </p>
        <p className="flex justify-between w-[70%] items-center gap-2 my-2">
          <span className="text-black text-[22px] font-light leading-normal">
            LeverPay User ID :
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
            {' '}
            {userData.uuid}
            <br />
          </span>
        </p>
        <p className="flex justify-between w-[70%] items-center gap-2 my-2">
          <span className="text-black text-[22px] font-light leading-normal">
            Card Type :{' '}
          </span>
          <span className="text-amber-700 text-[22px] font-bold leading-normal">
            {userData.card ? userData.card.type : ''}
            <br />
          </span>
        </p>
        <p className="flex justify-between w-[70%] items-center gap-2 my-2">
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
        </p>
        <p className="flex justify-between w-[70%] items-center gap-2 my-2">
          <span className="text-black text-[22px] font-light leading-normal">
            Account Balance :
          </span>
          <span className="text-orange-700 text-[22px] font-bold leading-normal">
            {userData.wallet ? userData.wallet.amount.ngn : ''}({userData.wallet ? userData.wallet.amount.usdt : ''})
            <br />
          </span>
        </p>
        <p className="flex justify-between w-[70%] items-center gap-2 my-2">
          <span className="text-black text-[22px] font-light leading-normal">
            Amount Spent :{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
            {userData.total_spending ? userData.total_spending.ngn: ''} ({userData.total_spending ? userData.total_spending.usdt: ''})
            <br />
          </span>
        </p>
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

          <h2 className="w-[216.27px] text-stone-200 text-[16px] font-medium my-3">
            NAME/BUSINESS
          </h2>

          {/* Type */}

          <h2 className="w-[69.42px] text-stone-200 text-[16px] font-medium my-3">
            TYPE
          </h2>


          {/* Amount */}

          <h2 className="w-[69.42px] text-stone-200 text-[16px] font-medium my-3">
            AMOUNT
          </h2>

          {/* Status */}

          <h2 className="w-[69.42px] text-stone-200 text-[16px] font-medium my-3">
            Status
          </h2>

          {/* Date */}

          <h2 className="w-[69.42px] text-stone-200 text-[16px] font-medium my-3">
            Date
          </h2>
        </div>
        {
          userData.transaction_history && <>
            {
              userData.transaction_history.map(item => {
                return <div className="grid grid-cols-5" key={item.id}>
                  <p className="w-[216.27px] text-stone-400 text-[13px] font-medium my-3">
                    {item.merchant}
                  </p>
                  <p className="w-[69.42px] text-stone-400 text-[13px] font-medium my-3">
                  {item.type}
                  </p>
                  <p className="w-[69.42px] text-stone-400 text-[13px] font-medium my-3">
                  {item.amount}
                  </p>
                  <p className="w-[69.42px] text-stone-400 text-[13px] font-medium my-3">
                  {item.status && item.status===1 ?'Completed': 'Pending'}
                  </p>
                  <p className="w-[69.42px] text-stone-400 text-[13px] font-medium my-3">
                  {item.created_at ? item.created_at.slice(0,10): ''}
                  </p>
                </div>
              })
            }
          </>
        }
      </div>
    </div>
  );
};

export default AccountBalance;
