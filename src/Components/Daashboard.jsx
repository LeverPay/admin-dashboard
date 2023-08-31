import React from 'react';
import '../css/DashboardStyles.css';

import {
  DashboardView,
  DashboardNavView,
  DashboardBody,
} from '../css/DashboardPageStyles';
import Header from '../Components/Header/Header';
import DashboardStat from './DashboardStat';
import ReportsDashboard from './ReportsDashboard';
import Remittances from './Remittances';
import DataTable from './DataTable';
import MonthlyUsers from './MonthlyUsers';

const Daashboard = () => {
  return (
    <DashboardView>
      <div>
        <Header />
      </div>
      <DashboardStat />
      <DashboardBody>
        <div className="dashboardBodyView flex-1">
          <ReportsDashboard />
        </div>

        <div className="flex-2">
          <Remittances />
        </div>
      </DashboardBody>
      <div className="flex items-center gap-5">
        <div className="w-1/2  bg-white rounded-[20px] p-4 ml-[10px]">
          <h2 className="text-blue-950 text-base font-bold leading-[42px]">
            Monthly Active USERS
          </h2>
          <MonthlyUsers />
        </div>
        <div className="w-1/2 rounded-2xl  bg-white p-4">
          <h2 className=" text-indigo-900 text-xl font-normal leading-[18.99px]">
            {' '}
            Recent Transactions
          </h2>
          <DataTable />
        </div>
      </div>
    </DashboardView>
  );
};

export default Daashboard;
