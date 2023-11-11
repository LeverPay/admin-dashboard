import React from "react";
import { Input } from "antd";

const InputField = ({
  placeholder,
  value,
  onFocus,
  onChange,
  pattern,
  autoComplete,
  className,
  bordered,
  type,
  inputMode,
  onKeyDown,
}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onChange={onChange}
      pattern={pattern}
      autoComplete={autoComplete}
      className={className}
      bordered={bordered}
      type={type}
      activeborderColor="text-primary-blue"
      inputMode={inputMode}
    />
  );
};

export default InputField;
