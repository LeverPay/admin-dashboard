import React from 'react';
import { Link } from 'react-router-dom';

const UserTableRowData = ({ item, index }) => {
  return (
    <tr key={item.id}>
      <td>{item.customerName}</td> {/**Name */}
      <td>{item.customerEmail}</td> {/**email */}
      <td>{item.failed}</td> {/**user id */}
      <td>
        {item.failed === 0 ? (
          <span className="suspended-user">Suspended</span>
        ) : (
          <span className="active-user">Active</span>
        )}
      </td>
      <td>{item.id}</td> {/**phone number */}
      <td>{item.customerEmail.split('@')[0]}</td> {/**username */}
      <td>{item.source}</td> {/**card type */}
      <td>
        <div className="view-more-btn">View More</div>
      </td>
      {/* 
      <td>
        <div className='edit-delete-btn'>
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </td> */}
    </tr>
  );
};

export default UserTableRowData;
