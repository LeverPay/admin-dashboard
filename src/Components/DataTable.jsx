import React, { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination';
import TableHeaderCell from './TableHeaderCell';
import TableDataRow from './TableDataRow';
// import '../styles/dashboard_body.scss';
import details from '../data/TransactionData';
import { TableContainer } from '../css/TransactionStyles';
import axios from 'axios'
import Cookies from 'js-cookie';


const PAGE_SIZE = 20;

function DataTable({ isShown }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionData, setTransactionData] = useState([])
  const [tnxFetched, setTnxFetched] = useState(false)
  const authToken = Cookies.get('authToken');

  // const currentTableData = useMemo(() => { 
    useEffect(()=>{
 
  getAllTransactions()
  }, [currentPage]);

  const getAllTransactions= () =>{
    let uri =''
    if (currentPage==1) {
      uri = 'https://leverpay-api.azurewebsites.net/api/v1/admin/get-transactions'
    }else{
      uri =`https://leverpay-api.azurewebsites.net/api/v1/admin/get-transactions?page=${currentPage}`
    }
    axios.get(uri, 
    {
      headers: {  
        Authorization : `Bearer ${authToken}`
      }
    }
    )
    .then(res=>{
      setTransactionData(res.data.data)
      setTnxFetched(true)
    })
    .catch(err=>{
      console.log(err)
      setTnxFetched(false)
    })
  }
  
  const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
  const lastPageIndex = firstPageIndex + PAGE_SIZE;
  const currentTableData = transactionData.data;

  return (
    <>
      <TableContainer className="table_container">
      <table>
        <thead>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            {isShown && <TableHeaderCell>user-ID</TableHeaderCell>}{' '}
            <TableHeaderCell> Amount</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {
            tnxFetched && <>
               {currentTableData.map((item, index) => (
            <TableDataRow
              key={item.id}
              item={item}
              index={index}
              isShown={isShown}
            />
          ))}
            </>
          }
          {
            !tnxFetched && <div style={{color: 'white', textAlign: 'center'}}>
              <strong>Transaction data loading</strong>
              <p>If this takes to long Reload or wait</p>
            </div>
          }
         
        </tbody>
      </table>
      <div className="pagination__container">
      <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={transactionData.total}
          pageSize={PAGE_SIZE}
          onPageChange={(page) =>setCurrentPage(page)  }
        />
      </div>
    </TableContainer>
   </>
  );
}

export default DataTable;
