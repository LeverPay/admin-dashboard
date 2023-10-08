import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
import TableHeaderCell from './TableHeaderCell';
import UserTableRowData from './UserTableRowData';
import details from '../data/TransactionData';
import { TableContainer } from '../css/TransactionStyles';

import axios from 'axios';
import Cookies from 'js-cookie';
import { baseUrl } from '../utils/constants';

const PAGE_SIZE = 5;

function UserDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState([]);

  const authToken = Cookies.get('authToken');

  useEffect(() => {
    axios
      .get(
        'https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users',
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => setUserData(response.data.data))
      .catch((err) => console.log(err));
  }, [authToken]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return details.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, details]);

  return (
    <TableContainer className="table_container">
      <table>
        <thead>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>More</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <UserTableRowData key={item.id} item={item} index={index} />
          ))}
        </tbody>
      </table>
      <div className="pagination__container">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={details.length}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </TableContainer>
  );
}

export default UserDataTable;
