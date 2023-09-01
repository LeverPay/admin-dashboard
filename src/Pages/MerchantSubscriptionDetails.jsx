import React from 'react';
import lock from '../assets/ph_lock-simple-fill.svg';

const MerchantSubscriptionDetails = () => {
  return (
    <div className="p-5">
      <h2 className="w-[213px] text-blue-900 text-xl font-bold leading-[30px]">
        Subscription Details
      </h2>

      <div className="w-[414px] h-[504px]">
        <span className="text-black text-xl font-light leading-normal">
          Date|time:{' '}
        </span>
        <span className="text-black text-xl font-bold leading-normal">
          12/08/24 9:40pm
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          Merchant ID :{' '}
        </span>
        <span className="text-black text-xl font-bold leading-normal">
          lvp897583klp
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          Merchant Name :{' '}
        </span>
        <span className="text-red-600 text-xl font-bold leading-normal">
          Netflix
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          User ID :{' '}
        </span>
        <span className="text-black text-xl font-bold leading-normal">
          Lvp238765lj
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          User email :{' '}
        </span>
        <span className="text-black text-xl font-bold leading-normal">
          Nina@gmail.com
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          User fullname :{' '}
        </span>
        <span className="text-black text-xl font-bold leading-normal">
          Nina Okoye
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          Service Description :{' '}
        </span>
        <span className="text-black text-xl font-bold leading-normal">
          Entertainment <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          Sub. duration :{' '}
        </span>
        <span className="text-black text-xl font-bold leading-normal">
          6 Month
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          Amount :{' '}
        </span>
        <span className="text-green-900 text-xl font-bold leading-normal">
          N 45,000
          <br />
          Sub Expiration : 16/12/23 6:00Pm
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          Transaction fee{' '}
        </span>
        <span className="text-orange-700 text-xl font-bold leading-normal">
          N15.00
          <br />
        </span>
        <span className="text-black text-xl font-light leading-normal">
          Status :{' '}
        </span>
        <span className="text-green-900 text-xl font-bold leading-normal">
          Paid
        </span>
      </div>
      <div className="w-[912px] h-[70px]">
        <span className="text-orange-700 text-base font-bold leading-normal">
          Note : This user have Activated an Automatic Subscription with{' '}
        </span>
        <span className="text-green-900 text-base font-bold leading-normal">
          Netflix{' '}
        </span>
        <span className="text-orange-700 text-base font-bold leading-normal">
          for Every Six Month. Which will be deducted from his LeverPay Account
          every Six Month.
        </span>
      </div>

      <div className="flex items-center justify-center gap-3">
        <img src={lock} alt="" />
        <div>
          <span className="text-black text-xl font-medium">Secured by</span>
          <span className="text-blue-900 text-xl font-bold"> LeverPay</span>
        </div>
      </div>
    </div>
  );
};

export default MerchantSubscriptionDetails;
