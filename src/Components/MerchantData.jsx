import React from 'react';

const MerchantData = ({ selectedMerchant }) => {
  return (
    <div className="bg-white p-5">
      <div className="flex items-start gap-5">
        <div>
          <p className="flex justify-between w-1/2 items-center gap-2 my-2">
            <span className="text-black text-[22px] font-light leading-normal">
              First Name:{' '}
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
              {selectedMerchant.first_name}
              <br />
            </span>
          </p>
          <span className="text-black text-[22px] font-light leading-normal">
            Last Name:{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
            {selectedMerchant.last_name}
            <br />
          </span>
          <span className="text-black text-[22px] font-light leading-normal">
            Other Name:{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
            {selectedMerchant.other_name}
            <br />
          </span>
          <span className="text-black text-[22px] font-light leading-normal">
            Gender:{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
            {selectedMerchant.gender}
            <br />
          </span>
          <span className="text-black text-[22px] font-light leading-normal">
            DOB:
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
            {' '}
            {selectedMerchant.dob}
            <br />
          </span>
          <span className="text-black text-[22px] font-light leading-normal">
            Country:{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
          {selectedMerchant.kyc_details ? selectedMerchant.kyc_details[0].country.country_name: ''}
            <br />
          </span>
          <span className="text-black text-[22px] font-light leading-normal">
            State:{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
          {selectedMerchant.state}
            <br />
          </span>
          <span className="text-black text-[22px] font-light leading-normal">
            City:{' '}
          </span>
          <span className="text-black text-[22px] font-bold leading-normal">
          {selectedMerchant.city}
          </span>
          <div className="w-[322px] flex items-center justify-center text-center my-5 h-12 bg-blue-600 rounded-[10px]">
            <span className="text-white text-xl font-bold leading-normal">
              Contact Details
            </span>
          </div>

          <div>
            <span className="text-black text-[22px] font-normal leading-normal">
              Primary Email:{' '}
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
              {selectedMerchant.email}
              <br />
            </span>
            <span className="text-black text-[22px] font-normal leading-normal">
              Secondary Email:
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
            {selectedMerchant.primary_email}
              <br />
            </span>
            <span className="text-black text-[22px] font-normal leading-normal">
              Primary Phone:{' '}
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
              {selectedMerchant.phone}
              <br />
            </span>
            <span className="text-black text-[22px] font-normal leading-normal">
              Secondary Phone:{' '}
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
             {selectedMerchant.primary_phone}
              <br />
            </span>
            <span className="text-black text-[22px] font-normal leading-normal">
              Address :
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
              {' '}
              {selectedMerchant.address}
              <br />
            </span>
            <div className="w-[322px] flex items-center justify-center text-center my-5 h-12 bg-blue-600 rounded-[10px]">
              <span className="text-white text-xl font-bold leading-normal">
                Government Verification{' '}
              </span>
            </div>
          </div>

          <div>
            <span className="text-black text-[22px] font-normal leading-normal">
              NIN:{' '}
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
            {selectedMerchant.kyc_details ? selectedMerchant.kyc_details[0].nin: ''}
              <br />
            </span>
            <span className="text-black text-[22px] font-normal leading-normal">
              BVN:{' '}
            </span>
            <span className="text-black text-[22px] font-bold leading-normal">
            {selectedMerchant.kyc_details ? selectedMerchant.kyc_details[0].bvn: ''}
            </span>
          </div>
        </div>

        <div>
          <img
            className="w-[296px] h-[308px] rounded"
            src={selectedMerchant.picture}
            alt="Profile_Picture"
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default MerchantData;
