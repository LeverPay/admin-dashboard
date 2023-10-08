import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserTableRowData = ({ item, index }) => {
  const navigate = useNavigate();

  const navigateToViewMore = () => {
    navigate('/user-view-more');
  };
  return (
    <tr key={item?.id}>
      <td>{item?.first_name}</td> {/**Name */}
      <td>{item?.email}</td> {/**email */}
      <td>
        {item?.status === 0 ? (
          <span className="suspended-user">Suspended</span>
        ) : (
          <span className="active-user">Active</span>
        )}
      </td>
      <td onClick={navigateToViewMore}>
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
