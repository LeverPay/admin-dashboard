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

const Daashboard = () => {
  return (
    <DashboardView>
      <DashboardNavView>
        <Header />
      </DashboardNavView>
      <DashboardStat />
      <DashboardBody>
        <div className="dashboardBodyView flex-1">
          <ReportsDashboard />
        </div>

        <div className="flex-2">
          <Remittances />
        </div>
      </DashboardBody>
    </DashboardView>
  );
};

export default Daashboard;
