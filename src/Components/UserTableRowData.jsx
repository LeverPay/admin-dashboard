import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserTableRowData = ({ item, index }) => {
  const navigate = useNavigate();

  const navigateToViewMore = () => {
    navigate('/user-view-more');
  };
  return (
    <tr key={item?.id} style={{marginBottom:'1rem !important'}} className='user-table-row'>
      <td>{item?.first_name}</td>
      <td>{item?.email}</td> 
      <td>
        {item?.status === 0 ? (
          <span className="suspended-user">Suspended</span>
        ) : (
          <span className="active-user">Active</span>
        )}
      </td>
      <td>
        <div className="view-more-btn">
          <Link to='/user-view-more' style={{color:'white'}} state={item.uuid}>
          View More 
          </Link>
          </div>
      </td>
    </tr>
  );
};

export default UserTableRowData;
