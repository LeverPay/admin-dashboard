import React from 'react';

const UserToUserDetails = () => {
  return (
    <div className="p-5">
      <h2 className="text-indigo-950 text-base font-bold leading-normal">
        User to User Transfer Details
      </h2>

      <div className="w-max px-4 py-3 h-11 bg-zinc-300 flex items-center justify-center text-center">
        <span className="text-indigo-950 text-base font-bold leading-normal">
          Sender
        </span>
      </div>

      <div className="w-[278px] h-44">
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            First Name :{' '}
          </span>
          <span className="text-black text-base font-bold leading-normal">
            Ned <br />
          </span>
        </p>
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            Last Name :
          </span>
          <span className="text-black text-base font-bold leading-normal">
            {' '}
            Okonkwo
            <br />
          </span>
        </p>
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            Email :
          </span>
          <span className="text-black text-base font-bold leading-normal">
            {' '}
            NedNkwo@gmail.com
            <br />
          </span>
        </p>
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            User ID :{' '}
          </span>
          <span className="text-amber-700 text-base font-bold leading-normal">
            LVP23X76640yjL
            <br />
          </span>
        </p>
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            Phone:
          </span>
          <span className="text-black text-base font-bold leading-normal">
            {' '}
          </span>
          <span className="text-green-900 text-base font-bold leading-normal">
            0807859456744
            <br />
          </span>
        </p>
        <span className="text-black text-base font-bold leading-normal">
          <br />
        </span>
      </div>

      <div className="flex items-start flex-col gap-5">
        <div className="w-max bg-slate-900 rounded-[20px] p-3 flex items-start justify-between  flex-col">
          <div className="flex gap-3 items-center w-full justify-between">
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Amount sent
            </span>
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Prev Bal
            </span>
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Cur Bal
            </span>
          </div>
          <div className="flex items-center w-full justify-between">
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
          </div>
        </div>
        <div className="w-max      bg-orange-700 rounded-[20px] p-3 flex items-start justify-between  flex-col">
          <div className="flex gap-3 items-center w-full justify-between">
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Amount sent
            </span>
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Prev Bal
            </span>
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Cur Bal
            </span>
          </div>
          <div className="flex items-center w-full justify-between">
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
          </div>
        </div>
      </div>

      <div className="w-max px-4 mt-4 py-3 h-11 bg-zinc-300 flex items-center justify-center text-center">
        <span className="text-indigo-950 text-xl font-bold leading-normal">
          Receiver
        </span>
      </div>

      <div className="w-[278px] h-44">
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            First Name :{' '}
          </span>
          <span className="text-black text-base font-bold leading-normal">
            Ned <br />
          </span>
        </p>
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            Last Name :
          </span>
          <span className="text-black text-base font-bold leading-normal">
            {' '}
            Okonkwo
            <br />
          </span>
        </p>
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            Email :
          </span>
          <span className="text-black text-base font-bold leading-normal">
            {' '}
            NedNkwo@gmail.com
            <br />
          </span>
        </p>
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            User ID :{' '}
          </span>
          <span className="text-amber-700 text-base font-bold leading-normal">
            LVP23X76640yjL
            <br />
          </span>
        </p>
        <p className="flex justify-between items-center gap-2 my-2">
          <span className="text-black text-base font-light leading-normal">
            Phone:
          </span>
          <span className="text-black text-base font-bold leading-normal">
            {' '}
          </span>
          <span className="text-green-900 text-base font-bold leading-normal">
            0807859456744
            <br />
          </span>
        </p>

        <span className="text-black text-base font-bold leading-normal">
          <br />
        </span>
      </div>

      <div className="flex items-start flex-col gap-5">
        <div className="w-max bg-slate-900 rounded-[20px] p-3 flex items-start justify-between  flex-col">
          <div className="flex gap-3 items-center w-full justify-between">
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Amount sent
            </span>
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Prev Bal
            </span>
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Cur Bal
            </span>
          </div>
          <div className="flex items-center w-full justify-between">
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
          </div>
        </div>
        <div className="w-max      bg-orange-700 rounded-[20px] p-3 flex items-start justify-between  flex-col">
          <div className="flex gap-3 items-center w-full justify-between">
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Amount sent
            </span>
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Prev Bal
            </span>
            <span className="text-stone-300 text-sm font-bold leading-normal">
              Cur Bal
            </span>
          </div>
          <div className="flex items-center w-full justify-between">
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
            <span className="text-stone-300 text-xs font-bold leading-normal">
              N300,000{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserToUserDetails;
