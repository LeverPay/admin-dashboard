import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import TableHeaderCell from './TableHeaderCell';
import details from '../data/TransactionData';
import { TableContainer } from '../css/TransactionStyles';
import MerchantTableRowData from './MerchantTableRowData';

const PAGE_SIZE = 5;

function MerchantDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
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
            <TableHeaderCell></TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, index) => (
            <MerchantTableRowData key={item.id} item={item} index={index} />
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

export default MerchantDataTable;
