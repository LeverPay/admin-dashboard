import React from 'react';
import man from '../assets/young man in casual clothes sitting on the floor with phone.png';

const UserMessage = () => {
  return (
    <div className="p-5 flex items-start justify-between">
      <div>
        <h2 className="w-[272.30px] text-blue-600 text-xl font-bold leading-normal">
          SEND MESSAGE TO USER
        </h2>

        <div className="w-[568px] h-[341px] relative">
          <div className="w-[568px] h-[88px] left-0 top-0 absolute flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-gray-800 text-base font-normal leading-tight">
              Tittle
            </div>
            <div className="w-[568px] h-14 pl-2.5 rounded-[10px] border border-gray-800 border-opacity-50" />
          </div>
          <div className="w-[568px] h-[227px] left-0 top-[114px] absolute flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-gray-800 text-base font-normal leading-tight">
              Message
            </div>
            <div className="w-[568px] h-[195px] pl-2.5 rounded-[10px] border border-gray-800 border-opacity-50" />
          </div>
        </div>

        <div className="my-5 flex items-center w-[568px] justify-between">
          <div className="w-[164px] h-[51px] text-center bg-blue-600 rounded-[10px] flex items-center justify-center ">
            <span className=" text-neutral-50 text-xl font-bold">SEND</span>
          </div>

          <div className="w-[164px] h-[51px] bg-red-600 rounded-[10px]  flex items-center justify-center text-center">
            <div className=" text-neutral-50 text-xl font-bold">CANCEL</div>
          </div>
        </div>
      </div>
      <div>
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default UserMessage;
