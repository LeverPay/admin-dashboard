import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import ButtonComponent from ".././Button";
import lock from "../../../assets/ph_lock-simple-fill.svg";
import OtpInput from "../../OtpInput";

const VerifyUser = () => {
  const [otp, setOtp] = useState("");
  const onChange = (value) => setOtp(value);
  return (
    <div className="w-full flex justify-center items-center">
      <Wrapper>
        <button className="text-[20px]  click_here text-primary-blue">
          Click me to get code
        </button>
        <p className="md:px-[90px] font-normal font-Agrandir">
          A code have been sent to nihgtetered@gmail.cm
        </p>
        <OtpInput valueLength={4} value={otp} onChange={onChange} />
        <p className=" font-Agrandir font-normal">
          <span>Don’t get a code?</span>{" "}
          <button className="click_here text-primary-blue">
            Click to resend
          </button>
        </p>
        <p className="text-[#F23434] font-bold ">
          Get OTP code from the user to verify this email{" "}
        </p>
        <ButtonComponent
          btn_value="Verify Email"
          className="bg-[#070565] text-white border-none"
        />
        <div className="flex justify-center items-center">
          <img src={lock} alt="" />
          <span className="text-black text-xl font-medium mr-1">
            Secured by
          </span>
          <span className="text-blue-900 text-xl font-bold"> LeverPay</span>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  ${tw`flex flex-col gap-4 justify-center p-4 text-center py-[50px] items-center w-full rounded-[10px] max-w-lg shadow-xl`}
  .click_here {
    ${tw`font-normal cursor-pointer`}
  }
  p {
    ${tw`text-base  `}
  }
`;

export default VerifyUser;
