import React from 'react';

const ProfileData = ({ userData }) => {
  const formatDateString = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {userData.map((item, index) => (
        <div>
          <div className="flex items-start gap-5">
            <div>
              <p className="flex justify-between w-[70%] items-center gap-2 my-2">
                <span className="text-black text-[22px] font-light leading-normal">
                  First Name :{' '}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {item.first_name}
                  <br />
                </span>
              </p>
              <p className="flex justify-between w-[70%] items-center gap-2 my-2">
                <span className="text-black text-[22px] font-light leading-normal">
                  Last Name :{' '}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {item?.last_name}
                  <br />
                </span>
              </p>
              <p className="flex justify-between w-[70%] items-center gap-2 my-2">
                <span className="text-black text-[22px] font-light leading-normal">
                  {/* Other Name :<br /> */}
                  Gender :{' '}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {item?.gender}
                  <br />
                </span>
              </p>
              <p className="flex justify-between w-[70%] items-center gap-2 my-2">
                <span className="text-black text-[22px] font-light leading-normal">
                  Date of Birth :
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  {' '}
                  {formatDateString(item.dob)}
                  <br />
                </span>
              </p>
              <p className="flex justify-between w-[70%] items-center gap-2 my-2">
                <span className="text-black text-[22px] font-light leading-normal">
                  Country :{' '}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  Nigeria
                  <br />
                </span>
              </p>
              <p className="flex justify-between w-[70%] items-center gap-2 my-2">
                <span className="text-black text-[22px] font-light leading-normal">
                  State :{' '}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  Abia
                  <br />
                </span>
              </p>
              <p className="flex justify-between w-[70%] items-center gap-2 my-2">
                <span className="text-black text-[22px] font-light leading-normal">
                  City :{' '}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  Abai{' '}
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
                    Primary Email :{' '}
                  </span>
                  <span className="text-black text-[22px] font-bold leading-normal">
                    Neena002@gmail.com
                    <br />
                  </span>
                </p>
                <p className="flex justify-between  items-center gap-2 my-2">
                  <span className="text-black text-[22px] font-normal leading-normal">
                    Secondary Email :
                  </span>
                  <span className="text-black text-[22px] font-bold leading-normal">
                    {' '}
                    Neena002@gmail.com
                    <br />
                  </span>
                </p>
                <p className="flex justify-between  items-center gap-2 my-2">
                  <span className="text-black text-[22px] font-normal leading-normal">
                    Primary Phone :{' '}
                  </span>
                  <span className="text-black text-[22px] font-bold leading-normal">
                    07068936345
                    <br />
                  </span>
                </p>
                <p className="flex justify-between  items-center gap-2 my-2">
                  <span className="text-black text-[22px] font-normal leading-normal">
                    Secondary Phone :{' '}
                  </span>
                  <span className="text-black text-[22px] font-bold leading-normal">
                    08168936383
                    <br />
                  </span>
                </p>
                <p className="flex justify-between  items-center gap-2 my-2">
                  <span className="text-black text-[22px] font-normal leading-normal">
                    Address :
                  </span>
                  <span className="text-black text-[22px] font-bold leading-normal">
                    {' '}
                    N0 6 Umahia Street
                    <br />
                  </span>
                </p>
                <div className="w-[322px] flex items-center justify-center text-center my-5 h-12 bg-blue-600 rounded-[10px]">
                  <span className="text-white text-xl font-bold leading-normal">
                    Government Verification{' '}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-black text-[22px] font-normal leading-normal">
                  NIN :{' '}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  1156784935
                  <br />
                </span>
                <span className="text-black text-[22px] font-normal leading-normal">
                  BVN :{' '}
                </span>
                <span className="text-black text-[22px] font-bold leading-normal">
                  224509834
                </span>
              </div>
            </div>

            <div>
              <img
                className="w-[296px] h-[308px] rounded"
                src="https://via.placeholder.com/296x308"
                alt=""
              />{' '}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfileData;
