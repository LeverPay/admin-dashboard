import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
import TableHeaderCell from './TableHeaderCell';
import UserTableRowData from './UserTableRowData';
import details from '../data/TransactionData';
import { TableContainer } from '../css/TransactionStyles';

import axios from 'axios';
import Cookies from 'js-cookie';
import { baseUrl } from '../utils/constants';

const PAGE_SIZE = 12;

function UserDataTable({filterType}) {
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
      .then((response) => {
        getFilteredData(filterType,response.data.data)
        console.log(response.data)
      })
      .catch((err) => console.log(err));
  }, [authToken]);

  const getFilteredData=(filterType,data)=>{
    let allData = data;
    let filteredData =[];

    for (let i = 0; i < allData.length; i++) {
      const element = allData[i];
      if (filterType==="all") {
        filteredData = data
      }
      else if (filterType==="active"){
        if (element.status===1){
          filteredData.push(element)
        }
      }
      else if (filterType==="pending"){
        if (element.status===0){
          filteredData.push(element)
        }
      }
      else if (filterType==="inactive"){
        if (element.status===2){
          filteredData.push(element)
        }
      }
      else if (filterType==="suspended"){
        if (element.status===2){
          filteredData.push(element)
        }
      }
     
    }

    setUserData(filteredData);
 
  }

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
  //   const lastPageIndex = firstPageIndex + PAGE_SIZE;
  //   return userData.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, userData]);

  const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
  const lastPageIndex = firstPageIndex + PAGE_SIZE;
  const currentTableData = userData.slice(firstPageIndex, lastPageIndex);

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
          {currentTableData.map((item, index) => (
            <UserTableRowData key={item?.id} item={item} index={index} />
          ))}
        </tbody>
      </table>
      <div className="pagination__container">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={userData.length}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </TableContainer>
  );
}

export default UserDataTable;
