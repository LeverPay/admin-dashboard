import React from 'react';
import Loading from './loading';

const MerchantUpload = ({merchantData}) => {
  console.log(merchantData)
  return (
    <div className="p-5 bg-white" >
      {
        merchantData && <>
             {
        merchantData.kyc_details[0] && <>
              <div className="w-[100%] relative flex align-items-center">
      <h3>ID Type : </h3>  <h4>  {merchantData.kyc_details && merchantData.kyc_details[0].document_type.name}</h4>
      </div>
      <br />
      <div className="w-[100%] relative">
      <h3>ID Card Front : </h3> <img src={merchantData.kyc_details && merchantData.kyc_details[0].id_card_front} alt="ID front" 
      style={{
        width:'300px'
      }}/>
      </div>
      <br />
      <div className="w-[100%] relative">
      <h3>ID Card Back : </h3> <img src={merchantData.kyc_details && merchantData.kyc_details[0].id_card_back} alt="ID card Back" 
      style={{
        width:'300px'
      }}/>
      </div>
      <br /><br />
      <div className="w-[100%] relative flex align-items-center">
      <h3>Proof of Address</h3> 
      </div>
      <br />
      <div className="w-[100%] relative">
      <h3>Utility Bill : </h3> <img src={merchantData.kyc_details && merchantData.kyc_details[0].utility_bill} alt="utility bill" 
      style={{
        width:'300px'
      }}/>
      </div>
      <div>
            {merchantData.kyc_details[0] && <>
                 <span className="text-black text-[22px] font-normal leading-normal">
              NIN :{' '}
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
            {merchantData.kyc_details[0].nin ? merchantData.kyc_details[0].nin : '00'}
              <br /><br />
            </span>
            <span className="text-black text-[22px] font-normal leading-normal">
              BVN:{' '}
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
            {merchantData.kyc_details[0].bvn && merchantData.kyc_details[0].bvn}
            </span>
            <br /><br />
            <span className="text-black text-[22px] font-light leading-normal">
          Operational License :{' '}
        </span>
        <span className="text-amber-700 text-[22px] font-bold leading-normal">
          {/* Gold Card */}
          <br /><br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          RC number :{' '}
        </span>
        <span className="text-amber-700 text-[22px] font-bold leading-normal">
        {merchantData.kyc_details ? merchantData.kyc_details[0].rc_number : ''}
          <br /><br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Business Address :
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {' '}
        </span>
        <span className="text-green-900 text-[22px] font-bold leading-normal">
          {merchantData.kyc_details ? merchantData.kyc_details[0].business_address : ''}
          <br /><br />
        </span>
        <span className="text-black text-[22px] font-light">
          Business Certificate : <img src={merchantData.kyc_details ? merchantData.kyc_details[0].business_certificate : ''} alt="Business certificate" style={{width:'300px', border:'1px solid', borderRadius:'10px'}} /> 
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Incorporation Date :{' '}
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {/* Okoye */}
          <br /><br />
        </span>
        <span className="text-black text-[22px] font-light leading-normal">
          Type Of Business :
        </span>
        <span className="text-black text-[22px] font-bold leading-normal">
          {' '}
          {/* Lvpx342123zp */}
          <br /><br />
        </span>
              </>
            }
          </div>
        </>
      }
      {
        !merchantData.kyc_details[0] && <>
        <div className="w-[100%] relative flex align-items-center">
        <h1>
            This Merchant has not done KYC 
          </h1>
        </div>
        </>
      }
        </>
      }
      {
        !merchantData && <Loading/>
      }
    
    </div>
  );
};

export default MerchantUpload;
