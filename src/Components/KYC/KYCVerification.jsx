import { useState } from "react";
import KYCApproveModal from "./KYCApproveModal";
import KYCSuccess from "./KYCSuccess";
import KYCDeny from "./KYCDeny";
// import KYCUtilityBill from "./KYCUtilityBill";

const KYCVerification = ({ userData }) => {
  const [isKYCApproveModalOpen, setIsKYCApproveModalOpen] = useState(false);
  const [isKYCSuccessModalOpen, setIsKYCSuccessModalOpen] = useState(false);
  const [isKYCDenyModalOpen, setIsKYCDenyModalOpen] = useState(false);

  const openModal = () => {
    setIsKYCApproveModalOpen(true);
  };

  const closeModal = () => {
    setIsKYCApproveModalOpen(false);
  };

  return (
    // <div className="bg-off-white-shade text-blue-700 font-bold ">
    <div className="text-blue-shade">
      <div className="flex items-center justify-center pb-9">
        <div className="text-left ">
          <h2 className="text-xl font-bold m-0">KYC Verification Process</h2>
          <span className="text-gray-400 text-xs font-medium">
            User Information
          </span>
        </div>
      </div>
      {/* USER DATA PROFILE */}
      <div className="">
        <h3 className="text-sm font-bold text-black">Selfie Image</h3>
        <div className="flex gap-3">
          <div>
            <img
              src={userData.picture}
              alt=""
              className="w-[166px] h-[166px] rounded"
            />
          </div>
          <div>
            <p className="mb-0">
              First Name:{" "}
              <span className="font-medium">{userData.first_name}</span>
            </p>
            <p className="mb-0">
              Last Name:{" "}
              <span className="font-medium">{userData.last_name}</span>
            </p>
            <p className="mb-0">
              Other Name:{" "}
              <span className="font-medium">{userData.other_name}</span>
            </p>
            <p className="mb-0">
              Email: <span className="font-medium">{userData.email}</span>
            </p>
            <p className="mb-0">
              Phone: <span className="font-medium">{userData.phone}</span>
            </p>
            <p className="mb-0">
              DOB:{" "}
              <span className="font-medium">
                {new Date(userData.dob).toLocaleDateString("en-US")}
              </span>
            </p>
            <p className="mb-0">
              Address: <span className="font-medium">{userData.address}</span>
            </p>
          </div>
        </div>
      </div>

      {/* BVN & NIN INFORMATION */}
      <div className="flex flex-col md:flex-row md:gap-8 gap-4 my-8">
        {/* BVN */}
        <div className="flex gap-3 p-4 bg-off-white-shade rounded md:w-1/2">
          <div>
            <img src="" alt="" className="w-[166px] h-[166px] rounded" />
          </div>
          <div>
            <span className="text-sm font-bold bg-light-green-shade text-black px-1 mb-2 rounded">
              BVN Information
            </span>
            <p className="mb-0">
              First Name: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Last Name: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Other Name: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              BVN: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              NIN: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Gender: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Email: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Phone: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              DOB: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Address: <span className="font-medium">{}</span>
            </p>
          </div>
        </div>

        {/* NIN */}
        <div className="flex gap-3 p-4 bg-light-green-shade md:w-1/2">
          <div>
            <img src="" alt="" className="w-[166px] h-[166px] rounded" />
          </div>
          <div>
            <span className="text-sm font-bold bg-light-orange-shade text-black px-1 rounded">
              NIN Information
            </span>
            <p className="mb-0">
              First Name:{" "}
              <span className="font-medium">{userData.first_name}</span>
            </p>
            <p className="mb-0">
              Last Name: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Other Name: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              NIN: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Gender: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Email: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Phone: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              DOB: <span className="font-medium">{}</span>
            </p>
            <p className="mb-0">
              Address: <span className="font-medium">{}</span>
            </p>
          </div>
        </div>
      </div>

      {/* UTILITY BILL INFO */}
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold bg-red-shade text-black px-1 rounded">
          Utility Bill Upload
        </span>
        <span className="text-gray-600 text-xs cursor-pointer">
          Click to view
        </span>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-8 py-10">
        <button
          onClick={openModal}
          className="bg-blue-shade w-[150px] py-2 text-white rounded-[10px]"
        >
          Approve
        </button>
        <button
          onClick={() => {
            setIsKYCDenyModalOpen(true);
          }}
          className="bg-red w-[150px] py-2 text-white rounded-[10px]"
        >
          Deny
        </button>
      </div>
      {isKYCApproveModalOpen && (
        <KYCApproveModal
          onClose={closeModal}
          onYesClick={() => {
            closeModal();
            setIsKYCSuccessModalOpen(true);
          }}
        />
      )}
      {isKYCSuccessModalOpen && (
        <KYCSuccess onClose={() => setIsKYCSuccessModalOpen(false)} />
      )}
      {isKYCDenyModalOpen && (
        <KYCDeny onClose={() => setIsKYCDenyModalOpen(false)} />
      )}
      {/* <KYCUtilityBill /> */}
    </div>
  );
};
export default KYCVerification;
