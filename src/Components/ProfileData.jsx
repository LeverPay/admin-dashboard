import React from "react";

const ProfileData = ({ userData }) => {
  const formatDateString = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div>
        <div className="flex items-start gap-5">
          <div>
            <p className="flex justify-between w-[70%] items-center gap-2 my-2">
              <span className="text-black text-[22px] font-light leading-normal">
                First Name:{" "}
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {userData.first_name}
                <br />
              </span>
            </p>
            <p className="flex justify-between w-[70%] items-center gap-2 my-2">
              <span className="text-black text-[22px] font-light leading-normal">
                Last Name:{" "}
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {userData.last_name}
                <br />
              </span>
            </p>
            <p className="flex justify-between w-[70%] items-center gap-2 my-2">
              <span className="text-black text-[22px] font-light leading-normal">
                {/* Other Name :<br /> */}
                Gender:{" "}
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {userData.gender}
                <br />
              </span>
            </p>
            <p className="flex justify-between w-[70%] items-center gap-2 my-2">
              <span className="text-black text-[22px] font-light leading-normal">
                DOB:
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {" "}
                {formatDateString(userData.dob)}
                <br />
              </span>
            </p>
            <p className="flex justify-between w-[70%] items-center gap-2 my-2">
              <span className="text-black text-[22px] font-light leading-normal">
                Country:{" "}
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {userData.country ? userData.country.country_name : ""}
                <br />
              </span>
            </p>
            <p className="flex justify-between w-[70%] items-center gap-2 my-2">
              <span className="text-black text-[22px] font-light leading-normal">
                State:{" "}
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {userData.state ? userData.state.state_name : ""}
                <br />
              </span>
            </p>
            <p className="flex justify-between w-[70%] items-center gap-2 my-2">
              <span className="text-black text-[22px] font-light leading-normal">
                City:{" "}
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {userData.city ? userData.city.city_name : ""}
              </span>
            </p>
            <div className="w-[322px] flex items-center justify-center text-center my-5 h-12 bg-blue-600 rounded-[10px]">
              <span className="text-white text-xl font-bold leading-normal">
                Contact Details
              </span>
            </div>

            <div>
              <p className="flex justify-between  items-center gap-2 my-2">
                <span className="text-black text-[22px] font-normal leading-normal">
                  Primary Email:{" "}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {userData.email}
                  <br />
                </span>
              </p>
              <p className="flex justify-between  items-center gap-2 my-2">
                <span className="text-black text-[22px] font-normal leading-normal">
                  Secondary Email:
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {" "}
                  {userData.primary_email}
                  <br />
                </span>
              </p>
              <p className="flex justify-between  items-center gap-2 my-2">
                <span className="text-black text-[22px] font-normal leading-normal">
                  Primary Phone:{" "}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {userData.phone}
                  <br />
                </span>
              </p>
              <p className="flex justify-between  items-center gap-2 my-2">
                <span className="text-black text-[22px] font-normal leading-normal">
                  Secondary Phone:{" "}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {userData.primary_phone}
                  <br />
                </span>
              </p>
              <p className="flex justify-between  items-center gap-2 my-2">
                <span className="text-black text-[22px] font-normal leading-normal">
                  Address:
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {" "}
                  {userData.address}
                  <br />
                </span>
              </p>
              <div className="w-[322px] flex items-center justify-center text-center my-5 h-12 bg-blue-600 rounded-[10px]">
                <span className="text-white text-xl font-bold leading-normal">
                  Government Verification{" "}
                </span>
              </div>
            </div>

            <div>
              <span className="text-black text-[22px] font-normal leading-normal">
                NIN :{" "}
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {userData.nin}
                <br />
              </span>
              <span className="text-black text-[22px] font-normal leading-normal">
                BVN :{" "}
              </span>
              <span className="text-black text-[22px] font-bold leading-normal">
                {userData.bvn}
              </span>
            </div>
          </div>

          <div>
            <img
              className="w-[296px] h-[308px] rounded"
              src="{userData.picture}"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileData;
