import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import KYCApproveModal from "./KYCApproveModal";
import KYCSuccess from "./KYCSuccess";
import KYCDeny from "./KYCDeny";
import KYCUtilityBill from "./KYCUtilityBill";

const KYCVerification = ({ userData }) => {
  const authToken = Cookies.get("authToken");
  const [isKYCApproveModalOpen, setIsKYCApproveModalOpen] = useState(false);
  const [isKYCSuccessModalOpen, setIsKYCSuccessModalOpen] = useState(false);
  const [isKYCDenyModalOpen, setIsKYCDenyModalOpen] = useState(false);
  const [isKYCUtilityBillOpen, setIsKYCUtilityBillOpen] = useState(false);
  const [kycList, setKycList] = useState(null);
  const [approveRejectMessage, setApproveRejectMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authToken) return;

    const url = `https://leverpay-api.azurewebsites.net/api/v1/brails-kyc/get-user-kyc-details?uuid=${userData.uuid}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.data && response.data.data.length > 0) {
          setKycList(response.data.data[0]);
        } else {
          setError("No KYC data found.");
        }
      })
      .catch((error) => {
        console.error("KYC DATA ERROR", error);
        setError("User KYC Not Available.");
      });
  }, [authToken, userData]);

  const openModal = () => {
    setIsKYCApproveModalOpen(true);
  };
  const closeModal = () => {
    setIsKYCApproveModalOpen(false);
  };

  const bvnDetails = JSON.parse(kycList?.bvn_details || "{}");
  const ninDetails = kycList?.nin_details || {};

  const handleApproveRejectKYC = async (status, adminComment = "") => {
    if (!authToken || !kycList) return;

    const payload = {
      uuid: kycList.kyc_uuid,
      status,
      admin_comment: adminComment,
    };

    try {
      const response = await axios.post(
        "https://leverpay-api.azurewebsites.net/api/v1/brails-kyc/approve-reject-kyc",
        payload,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setApproveRejectMessage(response.data.message);
      return true;
    } catch (error) {
      console.log(`${status} failed`, error);
      setError(`${status} failed. Please try again.`);
      return false;
    }
  };

  const handleApproveAction = async () => {
    const isApproved = await handleApproveRejectKYC("approved");
    if (isApproved) {
      closeModal();
      setIsKYCSuccessModalOpen(true);
    } else {
      alert("Approval failed. Please try again.");
    }
  };

  const handleRejectAction = async (email, message) => {
    const adminComment = JSON.stringify({ email, message });

    const isDenied = await handleApproveRejectKYC("declined", adminComment);
    if (isDenied) {
      setIsKYCDenyModalOpen(false);
      setIsKYCSuccessModalOpen(true);
    } else {
      alert("Denial failed. Please try again");
    }
  };

  // Render loading or error states
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!kycList) {
    return <div>Loading KYC data...</div>;
  }

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
              src={kycList.live_face_verification}
              alt=""
              className="w-[135px] h-[135px] rounded"
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
              Address:{" "}
              <span className="font-medium">
                {kycList.contact_address || "N/A"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* BVN & NIN INFORMATION */}
      {kycList && (
        <div className="flex flex-col md:flex-row md:gap-8 gap-4 my-8">
          {/* BVN */}
          <div className="flex gap-8 p-4 bg-off-white-shade rounded md:w-1/2">
            <div>
              <span className="text-sm font-bold bg-light-green-shade text-black px-1 mb-2 rounded">
                BVN Information
              </span>
              <p className="mb-0">
                First Name:{" "}
                <span className="font-medium">
                  {bvnDetails?.firstname ? "True" : "False"}
                </span>
              </p>
              <p className="mb-0">
                Last Name:{" "}
                <span className="font-medium">
                  {bvnDetails?.lastname ? "True" : "False"}
                </span>
              </p>
              <p className="mb-0">
                BVN: <span className="font-medium">{kycList.bvn}</span>
              </p>
              <p className="mb-0">
                BVN Match:{" "}
                <span className="font-medium">
                  {bvnDetails.firstname && bvnDetails.lastname
                    ? "True"
                    : "False"}
                </span>
              </p>
            </div>
          </div>

          {/* NIN */}
          <div className="flex gap-8 p-4 bg-light-green-shade md:w-1/2">
            <div>
              <img
                src={`data:image/jpeg;base64,${ninDetails?.photo}`}
                alt=""
                className="w-[135px] rounded"
              />
            </div>
            <div>
              <span className="text-sm font-bold bg-light-orange-shade text-black px-1 rounded">
                NIN Information
              </span>
              <p className="mb-0">
                First Name:{" "}
                <span className="font-medium">
                  {ninDetails.firstname || "N/A"}
                </span>
              </p>
              <p className="mb-0">
                Last Name:{" "}
                <span className="font-medium">
                  {ninDetails.lastname || "N/A"}
                </span>
              </p>
              <p className="mb-0">
                Other Name:{" "}
                <span className="font-medium">
                  {ninDetails.middlename || "N/A"}
                </span>
              </p>
              <p className="mb-0">
                NIN:{" "}
                <span className="font-medium">{ninDetails.nin || "N/A"}</span>
              </p>
              <p className="mb-0">
                Gender:{" "}
                <span className="font-medium">
                  {ninDetails.gender || "N/A"}
                </span>
              </p>
              <p className="mb-0">
                Email: <span className="font-medium">{kycList.email}</span>
              </p>
              <p className="mb-0">
                Phone: <span className="font-medium">{kycList.phone}</span>
              </p>
              <p className="mb-0">
                DOB:{" "}
                <span className="font-medium">
                  {ninDetails.birthdate || "N/A"}
                </span>
              </p>
              <p className="mb-0">
                Address:{" "}
                <span className="font-medium">
                  {ninDetails.residence?.address1 || "N/A"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* UTILITY BILL INFO */}
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold bg-red-shade text-black px-1 rounded">
          Utility Bill Upload
        </span>
        <span
          onClick={() => setIsKYCUtilityBillOpen(true)}
          className="text-gray-600 text-xs cursor-pointer"
        >
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
            handleApproveAction();
          }}
        />
      )}
      {isKYCSuccessModalOpen && (
        <KYCSuccess
          onClose={() => setIsKYCSuccessModalOpen(false)}
          messageResponse={approveRejectMessage}
        />
      )}
      {isKYCDenyModalOpen && (
        <KYCDeny
          onClose={() => setIsKYCDenyModalOpen(false)}
          email={kycList.email}
          onSendDenialMessage={handleRejectAction}
        />
      )}
      {isKYCUtilityBillOpen && (
        <KYCUtilityBill
          kycUtility={kycList.proof_of_address}
          onClose={() => setIsKYCUtilityBillOpen(false)}
        />
      )}
    </div>
  );
};
export default KYCVerification;
