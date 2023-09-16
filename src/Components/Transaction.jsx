import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import { TransactionTable } from '../css/TransactionStyles';
import '../css/TransactionStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DataTable from './DataTable';
import { Link } from 'react-router-dom';

const Transaction = () => {
  return (
    <DashboardView>
      <DashboardNavView>
        <Link to="/basic_information" className="profile-img  flex-end">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
          />
        </Link>
      </DashboardNavView>
      <TransactionTable>
        <div className="transaction__table">
          <div className="TransactionTitle">
            <p className="text-slate-900 text-lg font-bold leading-7">
              {' '}
              Transactions History
            </p>
            <div className="search_input">
              <div className="left__input">
                <input type="text" name="" id="" placeholder="Search" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>

          <div className=" bg-white p-5 rounded m-5">
            <DataTable isShown={true} />{' '}
          </div>
        </div>
      </TransactionTable>
    </DashboardView>
  );
};

export default Transaction;
