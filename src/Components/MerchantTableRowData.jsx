import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MerchantTableRowData = ({ item, index }) => {
  // const navigate = useNavigate();

  

  // const handleViewMoreClick = () => {
  //   // Use the navigate function to pass the merchantData object as state
  //   navigate(`/merchant-view-more/${item.uuid}`);
  // };

  return (
    <tr key={item.uuid}>
      <td>
        {item.first_name} {item.last_name}
      </td>{' '}
      {/**Name */}
      <td>{item.email}</td> {/**email */}
      <td>
        {item.status === 0 ? (
          <span className="suspended-user">Pending</span>
        ) : (
          <span className="active-user">Active</span>
        )}
      </td>
      <td>
        <Link to={`/merchant-view-more/${item.uuid}`} state={item.uuid} className="view-more-btn">
          View
        </Link>
        {/* <div onClick={handleViewMoreClick} className="view-more-btn">
          View More
        </div> */}
      </td>
    </tr>
  );
};

export default MerchantTableRowData;
