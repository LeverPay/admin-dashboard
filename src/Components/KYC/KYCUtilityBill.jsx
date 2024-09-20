import { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const KYCUtilityBill = ({ onClose, onClickDownload }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-black-fade flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-xl w-[40%] p-4 relative shadow-lg transform transition-all duration-300 ${
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
        <h3 className="text-xs font-medium text-center pb-4">
          Utility Bill Upload
        </h3>

        <div className="flex w-[80%] m-auto items-center justify-center">
          <img src="" alt="Utility Bill here" className="w-[100%]" />
        </div>
        <div className="text-right">
          <button
            onClick={onClickDownload}
            className="bg-transparent w-[100px] py-2 rounded-3xl font-medium text-xs hover:bg-green-600 transition"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
export default KYCUtilityBill;
