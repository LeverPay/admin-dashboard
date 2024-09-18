import { useEffect, useState } from "react";
// import { IoCloseCircle } from "react-icons/io5";

const KYCApproveModal = ({ onClose, onYesClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-black-fade flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-xl p-8 w-[320px] relative shadow-lg transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {/* <div className="absolute top-4 right-4 cursor-pointer">
          <IoCloseCircle size={24} style={{ color: "black" }} />
        </div> */}

        <div className="text-center space-y-4">
          <p>Are You Sure You want to Issue a Dollar to Card to this User?</p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onYesClick}
            className="bg-blue-shade w-[120px] py-2 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="bg-red w-[120px] py-2 text-white rounded-lg"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default KYCApproveModal;
