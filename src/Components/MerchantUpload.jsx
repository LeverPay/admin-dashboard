import React from 'react';

const MerchantUpload = ({merchantData}) => {
  console.log(merchantData)
  return (
    <div className="p-5 bg-white">
      {
        merchantData.kyc_details && <>
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
        </>
      }
      {
        !merchantData.kyc_details && <>
          <h1>
            This Merchant has not done KYC 
          </h1>
        </>
      }
    
    </div>
  );
};

export default MerchantUpload;
