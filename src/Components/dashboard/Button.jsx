import React from "react";
import { Button } from "antd";

const ButtonComponent = ({ className, btn_value }) => {
  return (
    <Button size={"large"} className={className} primaryShadow="#070565">
      {btn_value}
    </Button>
  );
};

export default ButtonComponent;
