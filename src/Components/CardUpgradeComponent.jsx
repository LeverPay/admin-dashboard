import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import { Link } from 'react-router-dom';
import { TransactionTable } from '../css/TransactionStyles';
import { AiOutlineSearch } from 'react-icons/ai';
import UpgradeCard from './UpgradeCard';
import UpgradeTable from './UpgradeTable';

const CardUpgradeComponent = () => {
  return (
    <DashboardView>
      <DashboardNavView>
        <Link to="/basic_information" className="profile-img flex-end">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
          />
        </Link>
      </DashboardNavView>
      <TransactionTable>
        <div className="shadow rounded bg-white">
          <div className="flex items-end justify-end py-2">
            <div className="w-[259px] h-[46px] px-3 bg-white rounded-[10px] border border-stone-900 flex items-center gap-2">
              <AiOutlineSearch size={20} />
              <input className="outline-none" placeholder="Search" />
            </div>
          </div>
          <div className="flex items-center justify-between px-5 my-4">
            <UpgradeCard title="REQUEST" number="500" color="#0B0230"/>
            <UpgradeCard title="APPROVED" number="306" color="#0C6903" />
            <UpgradeCard title="PENDING" number="13" color="#F49A09"/>
          </div>
          <UpgradeTable />
        </div>
      </TransactionTable>
    </DashboardView>
  );
};

export default CardUpgradeComponent;
