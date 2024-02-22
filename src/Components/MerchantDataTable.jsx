import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
import TableHeaderCell from './TableHeaderCell';
import { TableContainer } from '../css/TransactionStyles';
import MerchantTableRowData from './MerchantTableRowData';
import axios from 'axios';
import Cookies from 'js-cookie';
import { baseUrl } from '../utils/constants';

const PAGE_SIZE = 12;

function MerchantDataTable({filterType}){
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState([]);
  const authToken = Cookies.get('authToken');

  useEffect(() => {
    // Define your API URL and headers
    getFilteredData()
  
  },[currentPage]);

  const getFilteredData=( )=>{
    let uri
      if (filterType==="all") {
        uri = `${baseUrl}/v1/admin/get-all-merchants?status=all&page=${currentPage}`
      }
      else if (filterType==="active"){
        uri = `${baseUrl}/v1/admin/get-all-merchants?status=1&page=${currentPage}`
      }
      else if (filterType==="pending"){
        uri = `${baseUrl}/v1/admin/get-all-merchants?status=0&mode=0&page=${currentPage}`
      }
      else if (filterType==="inactive"){
        uri = `${baseUrl}/v1/admin/get-all-merchants?status=2&page=${currentPage}`
      }
      else if (filterType==="suspended"){
        uri = `${baseUrl}/v1/admin/get-all-merchants?status=2&page=${currentPage}`
      }

      const headers = {
        accept: '*/*',
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': '0JOsbnxa95Uu5iRjosgcbTRJs0QphDZKY3PqfYP9',
      };
      axios.get(uri, { headers }).then((response) => {
          setUserData(response.data.data);
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error:', error);
        });

    
  }

  const firstPageIndex = currentPage;
  const lastPageIndex = userData?.last_page;
  const currentTableData = userData?.data;

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
            <MerchantTableRowData key={item.uuid} item={item} index={index} />
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

export default MerchantDataTable;
