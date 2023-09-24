import React from 'react';
import chart from '../assets/dashboard-chart.svg';

const DashboardStat = () => {
  return (
    <div className="dashboard-stats gap-4 lg:gap-2 flex-wrap">
      <div className="dashboard-stat rounded shadow-sm w-full lg:w-[259px] h-[97px]">
        <div className="flex flex-col">
          <h2 className="w-full  text-slate-400 text-sm font-normal ">
            Total Transactions
          </h2>{' '}
          <h2 className="text-blue-950 text-2xl font-bold ">0000000</h2>{' '}
        </div>
        <div className="svg-chart-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 svg-chart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm w-full lg:w-[220px] h-[97px] flex items-center justify-between p-2">
        <div className="svg-container-user">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        </div>
        <div className="transaction-dashboard ">
          <h2 className="text-slate-400 text-base font-bold leading-7">
            Total Users
          </h2>{' '}
          <div className="flex items-start space-x-2 text-slate-400">
            <small>active </small>
            <small>inactive </small>
            <small>deactivated </small>
          </div>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm w-full lg:w-[220px] h-[97px] flex items-center justify-between p-2">
        <div className="svg-container-user2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        </div>
        <div className="transaction-dashboard">
          <h2 className="text-slate-400 text-base font-bold leading-7">
            Total Merchants
          </h2>
          <div className="flex items-start space-x-2 text-slate-400">
            <small>active </small>
            <small>inactive </small>
            <small>pending </small>
          </div>
        </div>
      </div>

      <div className="activity-container w-full lg:w-[220px]  h-[97px] dashboard-stat shadow-sm">
        <div className="activity-dashboard">
          <h2 className=" text-violet-100 text-base font-medium ">
            SUBSCRIPTION
          </h2>{' '}
          <div className="flex items-start space-x-2 text-white">
            <small>active </small>
            <small>pending </small>
            <small>cancelled</small>
          </div>
        </div>

        <div>
          <img src={chart} alt="" className="w-[100px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default DashboardStat;
