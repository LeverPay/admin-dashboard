import React, { useMemo, useCallback } from "react";
import styled from "@emotion/styled";
import InputField from "./InputField";
import tw from "twin.macro";
import { RE_DIGIT } from "../utils/index";
import { useOtp } from "../hooks/useOtp";

const OtpInput = ({ valueLength, value, onChange }) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items = [];
    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  //*   focus to next input
  const focusToNextInput = (target) => {
    const nextElementSibling = target.nextElementSibling;
    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  //*   focus to previous input
  const focusToPrevInput = (target) => {
    const nextElementSibling = target.previousElementSibling;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const { onInputChange } = useOtp(
    onChange,
    value,
    focusToNextInput,
    valueLength
  );

  const inputOnKeyDown = (e) => {
    const { key } = e;
    const target = e.target;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;

    // keep the selection range position
    // if the same digit was typed
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || targetValue !== "") {
      return;
    }

    focusToPrevInput(target);
  };

  const inputOnFocus = (e) => {
    const { target } = e;
    // keep focusing back until previous input
    // element has value
    const prevInputEl = target.previousElementSibling | null;

    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus();
    }

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <Wrapper>
      {valueItems.map((value, id) => {
        return (
          <InputField
            key={id}
            value={value}
            bordered={true}
            className="p-0 text-center w-full text-[32px]"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={valueLength}
            onKeyDown={inputOnKeyDown}
            onFocus={inputOnFocus}
            onChange={(event) => onInputChange(event, id)}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  max-width: 360px;
  column-gap: 10px;
`;

const InputWrapper = styled.input`
  ${tw`w-full  p-0 text-center flex items-center justify-center border-b-2 border-[#000]`}
`;

export default OtpInput;
