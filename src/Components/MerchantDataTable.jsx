import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
import TableHeaderCell from './TableHeaderCell';
import details from '../data/TransactionData';
import { TableContainer } from '../css/TransactionStyles';
import MerchantTableRowData from './MerchantTableRowData';
import axios from 'axios';
import Cookies from 'js-cookie';
import { baseUrl } from '../utils/constants';

const PAGE_SIZE = 12;

function MerchantDataTable({filterType}){
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const authToken = Cookies.get('authToken');

  useEffect(() => {
    // Define your API URL and headers
    const apiUrl = `${baseUrl}/v1/admin/get-all-merchants`;
    const headers = {
      accept: '*/*',
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': '0JOsbnxa95Uu5iRjosgcbTRJs0QphDZKY3PqfYP9',
    };

    // Fetch data from the API
    axios
      .get(apiUrl, { headers })
      .then((response) => {
     getFilteredData(filterType,response.data.data)
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  },[]);

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

    setData(filteredData);
    setTotalCount(filteredData.length);
  }


  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
  //   const lastPageIndex = firstPageIndex + PAGE_SIZE;
  //   return details.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, details]);

  const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
  const lastPageIndex = firstPageIndex + PAGE_SIZE;
  const currentTableData = data.slice(firstPageIndex, lastPageIndex);

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
            <MerchantTableRowData key={item.uuid} item={item} index={index} />
          ))}
        </tbody>
      </table>
      <div className="pagination__container">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </TableContainer>
  );
}

export default MerchantDataTable;
