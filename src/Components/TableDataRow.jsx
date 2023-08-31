import React from 'react';
import AppModal from './Modal';
import lock from '../assets/ph_lock-simple-fill.svg';

const TableDataRow = ({ item }) => {
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
        <div className="w-[302px] h-[416px]">
          <span className="text-black text-xl font-light leading-normal">
            Date|time:{' '}
          </span>
          <span className="text-black text-xl font-bold leading-normal">
            12/08/24 9:40pm
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            Transaction id :{' '}
          </span>
          <span className="text-black text-xl font-bold leading-normal">
            LVP4567LKO
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            UserId :{' '}
          </span>
          <span className="text-black text-xl font-bold leading-normal">
            lvp897583klp
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            Email :{' '}
          </span>
          <span className="text-black text-xl font-bold leading-normal">
            Nina@gmail.com
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            Phone :{' '}
          </span>
          <span className="text-black text-xl font-bold leading-normal">
            08068936383
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            First name :{' '}
          </span>
          <span className="text-black text-xl font-bold leading-normal">
            Nina
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            Last name :
          </span>
          <span className="text-black text-xl font-bold leading-normal">
            {' '}
            Okoye
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            Amount :{' '}
          </span>
          <span className="text-green-900 text-xl font-bold leading-normal">
            N 200,000
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            Transaction fee :
          </span>
          <span className="text-green-900 text-xl font-light leading-normal">
            {' '}
          </span>
          <span className="text-green-900 text-xl font-bold leading-normal">
            N10.00
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            Vendor :{' '}
          </span>
          <span className="text-red-600 text-xl font-bold leading-normal">
            Netflix
            <br />
          </span>
          <span className="text-black text-xl font-light leading-normal">
            Status :{' '}
          </span>
          <span className="text-green-900 text-xl font-bold leading-normal">
            Successful
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center">
            <img src={lock} alt="" />
            <span className="text-black text-xl font-medium mr-1">Secured by</span>
            <span className="text-blue-900 text-xl font-bold"> LeverPay</span>
          </div>
        </div>
      </AppModal>
      <td>{item.customerName}</td>
      <td>#{item.id}</td>
      <td>{item.status}</td>
      <td>${item.amount}.00</td>
      <td>{item.failed}</td>
      <td>{item.remark}</td>
      <td>
        <div className="view-more-btn" onClick={() => setShow(true)}>
          View More
        </div>
      </td>

      <td>
        <div className="edit-delete-btn">
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </td>
    </tr>
  );
};

export default TableDataRow;
