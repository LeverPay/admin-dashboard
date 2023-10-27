import React from 'react';

const MerchantBusinessData = ({merchantData}) => {
  console.log(merchantData)
  return (
    <div className="bg-white p-5" >
      <div>
        <span className="text-black text-[22px] font-light leading-normal">
          Company Name :{' '}
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {merchantData.merchant && merchantData.merchant.business_name}
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Incorporation Date :{' '}
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {/* Okoye */}
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Type Of Business :
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {' '}
          {/* Lvpx342123zp */}
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Operational License :{' '}
        </span>
        <span className="text-amber-700 text-[22px] font-bold leading-normal">
          {/* Gold Card */}
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          RC number :{' '}
        </span>
        <span className="text-amber-700 text-[22px] font-bold leading-normal">
        {merchantData.kyc_details ? merchantData.kyc_details[0].rc_number : ''}
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Business Address :
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {' '}
        </span>
        <span className="text-green-900 text-[22px] font-bold leading-normal">
          {merchantData.kyc_details ? merchantData.kyc_details[0].business_address : ''}
          <br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Total balance :
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {' '}
        </span>
        <span className="text-green-900 text-[22px] font-bold leading-normal">
          N{merchantData.wallet? merchantData.wallet.amount : ''}
          <br />
        </span>
        <span className="text-black text-[22px] font-light">
          Business Certificate : <img src={merchantData.kyc_details ? merchantData.kyc_details[0].business_certificate : ''} alt="Business certificate" style={{width:'300px', border:'1px solid', borderRadius:'10px'}} /> 
        </span>
      </div>

      <div className="w-[1007px] h-[317px] bg-white rounded-[10px] p-5 my-5 shadow">
        <div className="flex items-center justify-between">
          <h2 className="w-[190px] text-slate-900 text-lg font-bold">
            Recent Transaction
          </h2>
          <span>
            <div className="text-right text-lime-700 text-sm font-semibold">
              View All
            </div>
          </span>
        </div>
        <div className="grid grid-cols-5">
         
        <h2 className="w-[216.27px] text-stone-1200 text-[16px] font-bold my-3">
            NAME/BUSINESS
          </h2>

          {/* Type */}

          <h2 className="w-[69.42px] text-stone-1200 text-[16px] font-bold my-3">
            TYPE
          </h2>


          {/* Amount */}

          <h2 className="w-[69.42px] text-stone-1200 text-[16px] font-bold my-3">
            AMOUNT
          </h2>

          {/* Status */}

          <h2 className="w-[69.42px] text-stone-1200 text-[16px] font-bold my-3">
            Status
          </h2>

          {/* Date */}

          <h2 className="w-[69.42px] text-stone-1200 text-[16px] font-bold my-3">
            Date
          </h2>
        </div>
        {
          merchantData.transaction_history && <>
            {
              merchantData.transaction_history.map(item => {
                return <div className="grid grid-cols-5" key={item.id}>
                  <p className="w-[216.27px] text-stone-800 text-[13px] font-medium my-3">
                    {item.merchant}
                  </p>
                  <p className="w-[69.42px] text-stone-800 text-[13px] font-medium my-3">
                  {item.type}
                  </p>
                  <p className="w-[69.42px] text-stone-800 text-[13px] font-medium my-3">
                  {item.amount}
                  </p>
                  <p className="w-[69.42px] text-stone-800 text-[13px] font-medium my-3">
                  {item.status && item.status===1 ?'Completed': 'Pending'}
                  </p>
                  <p className="w-[69.42px] text-stone-800 text-[13px] font-medium my-3">
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

export default MerchantBusinessData;
