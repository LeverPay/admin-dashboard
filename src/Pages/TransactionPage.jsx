import React from 'react';
import SidebarLayout from '../Layouts/SidebarLayout';
import Transaction from '../Components/Transaction';

const TransactionPage = () => {
  return (
    <SidebarLayout>
      <Transaction />
    </SidebarLayout>
  );
};

export default TransactionPage;
