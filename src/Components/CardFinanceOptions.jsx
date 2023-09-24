import React from 'react';

const CardFinanceOptions = ({
  title,
  bgColor,
  setShow,
  rate,
  handleRateChange,
}) => {
  const cardStyles = {
    backgroundColor: bgColor,
  };

  return (
    <div className="w-full lg:w-[191px] h-[283px] px-[13px]  py-[19px] bg-white rounded-lg shadow border border-gray-100 justify-center  lg:justify-start items-center lg:items-start flex">
      <div className="w-full lg:w-[338px] h-[221px]">
        <div className=" pt-0.5 pb-px  flex-col justify-center w-full items-center lg:items-start gap-2.5 inline-flex">
          <div className="text-center text-black text-xl font-bold font-['Inter'] leading-[23px] w-full py-3">
            {title}
          </div>
          <input
            className="w-full h-14 my-3 py-[19px] bg-white bg-opacity-0 rounded-lg shadow border-4 border-gray-100"
            value={rate}
            onChange={(e) => handleRateChange(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="w-[70px] h-[52px] text-center text-white text-[15px] font-bold font-['Inter'] leading-[17.25px] rounded-[10px] "
            style={cardStyles}
            onClick={() => setShow(true)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFinanceOptions;
