import '../css/AtmCard.css';
import logo from '../assets/card-logo.svg';
import scan from '../assets/scan.svg';
import { BsEye } from 'react-icons/bs';
import lock from '../assets/lock.svg';
const AtmCard = ({ type, background }) => {
  return (
    <div
      className="grid-one-item grid-common grid-c1 w-[320px]"
      style={{ '--background-image': background }}
    >
      <div className="grid-c1-content">
        <div className="flex items-end justify-end ">
          <img src={logo} alt="" className="w-[100px] h-full" />{' '}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <img src={scan} alt="" className="w-[50px] h-full" />
          </div>
          <div className="flex items-center flex-col">
            <BsEye />
            <span className="text-white text-xs font-bold tracking-tight">
              Show Card Details
            </span>
          </div>
        </div>
        <div className="w-full text-white text-2xl font-normal tracking-widest">
          xxxx xxxx xxxx 3748
        </div>
        <div className="card-logo-wrapper">
          <div>
            <p className="text-white text-sm font-bold tracking-tight">
              Valid Thru
            </p>{' '}
            <div className="flex items-center justify-between w-[200px]">
              <p className="text-white text-sm font-bold tracking-tight">
                04/26
              </p>{' '}
              <p className="text-white text-xl font-bold tracking-tight">
                USDT
              </p>
            </div>
          </div>

          <div className="card-logo">
            <div className="logo-shape1"></div>
            <div className="logo-shape2"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white text-xl font-bold tracking-tight">Name</p>
          <div className="flex items-center justify-center gap-2">
            <img src={lock} alt="" />
            <p className="text-white text-3xl font-bold tracking-wide">
              {type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmCard;
