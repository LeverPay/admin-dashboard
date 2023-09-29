import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/DashboardStyles.css';
import { baseUrl } from '../utils/constants';

import { DashboardView } from '../css/DashboardPageStyles';
import Header from '../Components/Header/Header';
import DashboardStat from './DashboardStat';
import ReportsDashboard from './ReportsDashboard';
import Remittances from './Remittances';
import DataTable from './DataTable';
import MonthlyUsers from './MonthlyUsers';

import Cookies from 'js-cookie';

const Daashboard = () => {
  const [data, setData] = useState(null);

  const authToken = Cookies.get('authToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/v1/admin/admin-profile`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
            'X-CSRF-TOKEN': 'Lsvq6bmNqtgogj9pEvAjoSKmNw7dAoVLhPigy4LB',
          },
        });

        if (response.status === 200) {
          setData(response.data[0]);
        } else {
          console.error('Error:', response.data);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };

    fetchData();
  }, [authToken]);

  return (
    <DashboardView>
      <div>
        <Header data={data} />
      </div>
      <DashboardStat />
      <div className="flex items-center gap-1 lg:flex-row flex-col my-2 p-3">
        <div className="flex-1">
          <ReportsDashboard />
        </div>

        <div className="flex-2">
          <Remittances />
        </div>
      </div>
      <div className="flex items-center gap-5 lg:flex-row flex-col">
        <div className="w-full lg:w-1/2  bg-white rounded-[20px] p-4 ml-[10px]">
          <h2 className="text-blue-950 text-base font-bold leading-[42px]">
            Monthly Active USERS
          </h2>
          <MonthlyUsers />
        </div>
        <div className="w-full lg:w-1/2 rounded-2xl  bg-white p-4">
          <h2 className=" text-indigo-900 text-xl font-normal leading-[18.99px]">
            {' '}
            Recent Transactions
          </h2>
          <DataTable isShown={false} />
        </div>
      </div>
    </DashboardView>
  );
};

export default Daashboard;
