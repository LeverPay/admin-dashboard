import { DashboardView } from '../css/DashboardPageStyles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <DashboardView>
      <div className="m-3 sticky top-0 right-0 bg-inherit p-2 z-10">
        <Link to="/basic_information" className="profile-img flex-end">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
          />
        </Link>
      </div>

      <div className=" bg-white rounded-[10px] m-3">
        <form action="" className="p-5">
          <h2 className="text-neutral-700 text-lg font-medium leading-normal">
            Get In Touch
          </h2>{' '}
          <p className="text-slate-900 text-sm font-normal leading-normal tracking-tight">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel
          </p>{' '}
          <div className="form-container">
            <div className="my-2">
              <input
                type="name"
                placeholder="Name"
                className="w-[500px] h-[50px] px-3 py-2 text-slate-900 text-sm font-normal leading-normal tracking-tight rounded-[10px] border border-neutral-200 outline-none"
              />
            </div>
            <div className="my-2">
              <input
                type="email"
                placeholder="Email"
                className="w-[500px] h-[50px] px-3 py-2 text-slate-900 text-sm font-normal leading-normal tracking-tight rounded-[10px] border border-neutral-200 outline-none"
              />
            </div>
            <div className="my-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-[500px] h-[50px] px-3 py-2 text-slate-900 text-sm font-normal leading-normal tracking-tight rounded-[10px] border border-neutral-200 outline-none"
              />
            </div>
            <select
              name=""
              id=""
              className="w-[500px] h-[50px] px-3 py-2 text-sm font-normal leading-normal tracking-tight rounded-[10px] border border-neutral-200 outline-none"
            >
              <option value="How did you find us?" className="text-slate-900 ">
                How did you find us?
              </option>
            </select>
            <div className="w-[500px] my-3 cursor-pointer h-[50px] px-6 py-3 bg-blue-600 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-bold uppercase">
                send
              </div>
            </div>{' '}
          </div>
        </form>

        <div className="flex items-center justify-between w-[500px] ml-10 pb-3">
          <div className="flex items-center gap-2 justify-center">
            <FontAwesomeIcon icon={faFax} className="w-7 h-7" />
            <div>
              <h2 className="text-slate-900 text-[13px] font-semibold leading-tight tracking-tight m-0">
                FAX
              </h2>
              <span className="text-blue-600 text-[13px] font-normal leading-tight tracking-tight">
                03 5432 1234
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7" />
            <div>
              <h2 className="text-slate-900 text-[13px] font-semibold leading-tight tracking-tight m-0">
                Email
              </h2>
              <span className="text-blue-600 text-[13px] font-normal leading-tight tracking-tight">
                info@marcc.com.au
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardView>
  );
};

export default Contact;
