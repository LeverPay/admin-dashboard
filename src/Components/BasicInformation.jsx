import { DashboardView } from '../css/DashboardPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
const BasicInformation = () => {
  return (
    <DashboardView>
      <div>
        <div className="m-5">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-900 text-lg font-medium leading-normal">
              Basic Information{' '}
            </h2>
            <div className="bg-white rounded-[10px] border border-blue-900 py-1 px-2">
              <input
                type="text"
                placeholder="Search"
                className="text-slate-400 text-xs font-normal leading-tight outline-none"
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="m-5 p-11 bg-white rounded-[10px] ">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="profile "
              className="w-16 h-16 rounded-full"
            />{' '}
            <div className="w-max py-2 px-3 cursor-pointer gap-2 bg-blue-600 rounded-lg flex items-center justify-center text-neutral-50 text-sm font-semibold leading-[18px]">
              Change
              <FontAwesomeIcon icon={faPen} />
            </div>
            <div className="w-max py-2 px-3 cursor-pointer gap-2 border border-indigo-800 rounded-lg flex items-center justify-center text-indigo-800 text-sm font-semibold leading-[18px]">
              {' '}
              Remove
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <form action="" className="my-5">
            <div className="my-2">
              <h2 className=" text-black text-opacity-80 text-sm font-normal leading-tight">
                Full Name
              </h2>{' '}
              <input
                type="text"
                name=""
                id=""
                placeholder="Patricia Douglas"
                className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
              />
            </div>

            <div className="my-2 w-1/2">
              <h2 className=" text-black text-opacity-80 text-sm font-normal leading-normal">
                Business Name
              </h2>{' '}
              <input
                type="text"
                name=""
                id=""
                placeholder="Center Focus Service Limited"
                className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
              />
            </div>

            <div className="my-2 w-1/2">
              <h2 className="w-[58.42px] text-black text-opacity-80 text-sm font-normal leading-normal">
                Country
              </h2>{' '}
              <select
                name=""
                id=""
                className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
              >
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>

            <div className="my-2 w-1/2">
              <h2 className="w-[100.92px] text-black text-opacity-80 text-sm font-normal leading-normal ">
                Phone number
              </h2>{' '}
              <div className="input-phone flex items-center gap-1">
                <div className="w-[113.66px] h-[50px] flex items-center justify-center rounded bg-blue-600 bg-opacity-5 border border-slate-900 ">
                  +234
                </div>
                <input
                  type="number"
                  name=""
                  id=""
                  className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
                />
              </div>
            </div>

            <div className="my-2 w-1/2">
              <h2 className="w-[94.54px] text-black text-opacity-80 text-sm font-normal leading-normal">
                Email address
              </h2>{' '}
              <input
                type="email"
                name=""
                id=""
                placeholder="Patricia Douglas@gmail.com"
                className="w-[563px] h-[50px] bg-blue-600 bg-opacity-5 rounded-[10px] border border-slate-900 p-2 outline-none text-black text-opacity-80 text-sm font-normal leading-normal"
              />
            </div>
            <div className="w-max py-2 px-3 cursor-pointer gap-2 bg-blue-600 rounded-lg flex items-center justify-center text-neutral-50 text-sm font-semibold leading-[18px]">
              Submit
            </div>
          </form>
        </div>
      </div>
    </DashboardView>
  );
};

export default BasicInformation;
