import React from 'react';
import AppModal from './Modal';
import lock from '../assets/ph_lock-simple-fill.svg';

const TableDataRow = ({ item, isShown }) => {
  const [show, setShow] = React.useState(false);

  return (
    <tr key={item.id}>
      <AppModal
        visible={show}
        closable={true}
        handleCancel={() => setShow(false)}
      >
        <h2 className="w-[182px] text-blue-900 text-xl font-bold leading-[30px] mb-3">
          Transaction Details
        </h2>{' '}
        <div className="w-full h-[416px]">
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Date|time:{' '}
            </span>
            <span className="text-black text-base font-bold leading-normal">
              12/08/24 9:40pm
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Transaction id :{' '}
            </span>
            <span className="text-black text-base font-bold leading-normal">
              LVP4567LKO
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              UserId :{' '}
            </span>
            <span className="text-black text-base font-bold leading-normal">
              lvp897583klp
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Email :{' '}
            </span>
            <span className="text-black text-base font-bold leading-normal">
              Nina@gmail.com
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Phone :{' '}
            </span>
            <span className="text-black text-base font-bold leading-normal">
              08068936383
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              First name :{' '}
            </span>
            <span className="text-black text-base font-bold leading-normal">
              Nina
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Last name :
            </span>
            <span className="text-black text-base font-bold leading-normal">
              {' '}
              Okoye
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Amount :{' '}
            </span>
            <span className="text-green-900 text-base font-bold leading-normal">
              N 200,000
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Transaction fee :
            </span>
            <span className="text-green-900 text-base font-light leading-normal">
              {' '}
            </span>
            <span className="text-green-900 text-base font-bold leading-normal">
              N10.00
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Vendor :{' '}
            </span>
            <span className="text-red-600 text-base font-bold leading-normal">
              Netflix
              <br />
            </span>
          </p>
          <p className="flex justify-between items-center gap-2 my-2">
            <span className="text-black text-base font-light leading-normal">
              Status :{' '}
            </span>
            <span className="text-green-900 text-base font-bold leading-normal">
              Successful
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center">
            <img src={lock} alt="" />
            <span className="text-black text-xl font-medium mr-1">
              Secured by
            </span>
            <span className="text-blue-900 text-xl font-bold"> LeverPay</span>
          </div>
        </div>
      </AppModal>
      <td>{item.customerName}</td>
      {isShown && <td>#{item.id}</td>}
      <td>${item.amount}.00</td>
      <td>{item.status}</td>
      <td>
        <div className="view-more-btn" onClick={() => setShow(true)}>
          View
        </div>
      </td>
    </tr>
  );
};

export default TableDataRow;
