import React from 'react';
import { HeaderCell } from '../css/TransactionStyles';

const TableHeaderCell = ({ children, onClick }) => {
  return <HeaderCell>{children}</HeaderCell>;
};

export default TableHeaderCell;
