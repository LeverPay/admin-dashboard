import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MerchantTableRowData = ({ item, index }) => {

  const navigate = useNavigate()

  
  const merchantData = {
    uuid: item.uuid,
    first_name: item.first_name,
    last_name: item.last_name,
    gender: item.gender,
    dob: item.dob,
    primaryEmail: item.primary_email,
    primaryPhone: item.primary_phone,
    address: item.address,
    picture: item.picture,
  };

    const handleViewMoreClick = () => {
      // Use the navigate function to pass the merchantData object as state
      navigate(`/merchant-view-more/${item.uuid}`, { state: { merchantData } });
    };


  return (
    <tr key={item.uuid}>
      <td>
        {item.first_name} {item.last_name}
      </td>{' '}
      {/**Name */}
      <td>{item.email}</td> {/**email */}
      <td>
        {item.status === 0 ? (
          <span className="suspended-user">Suspended</span>
        ) : (
          <span className="active-user">Active</span>
        )}
      </td>
      <td>
        {/* <Link to={`/merchant-view-more/${item.uuid}`} className="view-more-btn">
          View More
        </Link> */}
        <div onClick={handleViewMoreClick} className="view-more-btn">
          View More
        </div>
      </td>
    </tr>
  );
};

export default MerchantTableRowData;
