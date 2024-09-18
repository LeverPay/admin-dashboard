import { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import SuccessIcon from "../SuccessIcon/SuccessIcon";

const KYCSuccess = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-black-fade flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-xl p-8 pb-2 w-[320px] relative shadow-lg transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="absolute top-4 right-4 cursor-pointer">
          <IoCloseCircle
            size={24}
            style={{ color: "black" }}
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
          />
        </div>

        <div className="flex flex-col justify-center">
          <SuccessIcon />
          {/* <img src={SuccessGif} alt="" className="w-[120px]" /> */}
        </div>

        <div className="text-center text-green-600 font-medium text-xl space-y-4 pt-4">
          <p>Dollar Card Issued Successfully</p>
        </div>
      </div>
    </div>
  );
};
export default KYCSuccess;
