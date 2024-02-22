import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
import TableHeaderCell from './TableHeaderCell';
import UserTableRowData from './UserTableRowData';
import { TableContainer } from '../css/TransactionStyles';
import axios from 'axios';
import Cookies from 'js-cookie';
const PAGE_SIZE = 12;
function UserDataTable({filterType}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState([]);
  const authToken = Cookies.get('authToken');
  useEffect(() => {
    getFilteredData()
   
  }, [currentPage]);

  const getFilteredData=()=>{
    let uri
      if (filterType==="all") {
        uri = `https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=all&page=${currentPage}`
      }
      else if (filterType==="active"){
        uri = `https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=1&page=${currentPage}`
      }
      else if (filterType==="pending"){
        uri = `https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=0&page=${currentPage}`
      }
      else if (filterType==="inactive"){
        uri = `https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=2&page=${currentPage}`
      }
      else if (filterType==="suspended"){
        uri = `https://leverpay-api.azurewebsites.net/api/v1/admin/get-all-users?mode=2&page=${currentPage}`
      }

      console.log(uri);
      axios
      .get(uri,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((response) => {
        setUserData(response.data.data)
      })
      .catch((err) => console.log(err));
     
    }
  const firstPageIndex =  currentPage;
  const lastPageIndex = userData?.last_page;
  const currentTableData = userData.data

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
          {currentTableData?.map((item, index) => (
            <UserTableRowData key={item?.id} item={item} index={index} />
          ))}
        </tbody>
      </table>
      <div className="pagination__container">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={userData.total}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </TableContainer>
  );
}

export default UserDataTable;
