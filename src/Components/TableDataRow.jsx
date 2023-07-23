import React from 'react';
import { Link } from 'react-router-dom';

const TableDataRow = ({ item, index }) => {
  return (
    <tr key={item.id}>
      <td>{item.customerName}</td>
      <td>#{item.id}</td>
      <td>{item.status}</td>
      <td>${item.amount}.00</td>
      <td>{item.failed}</td>
      <td>{item.remark}</td>
      <td>
        <Link className="view-more-btn">View More</Link>
      </td>

      <td>
        <div className='edit-delete-btn'>
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </td>
    </tr>
  );
};

export default TableDataRow;
