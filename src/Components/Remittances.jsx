import React from 'react';
import '../css/DashboardStyles.css';
import WeekChart from './WeekChart';

const Remittances = () => {
  return (
    <div className="remittances-container rounded-[20px]">
      <div className="header">
        <h1 className="text-blue-950 text-2xl font-bold leading-loose">
          Remitances
        </h1>
        <select
          name="Monthly"
          id="monthlySelect"
          className="w-[90px] h-6 text-slate-400 text-sm font-bold leading-normal outline-none"
        >
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div className="revenue-section  gap-2">
        <div className="w-[206px] h-[88px] bg-white rounded-[10px] border border-blue-600 p-2">
          <h2 className="w-full h-[26.49px] text-slate-400 text-base font-bold leading-7">
            Revenue Generated
          </h2>{' '}
          <div className="revenue-data flex items-center justify-between">
            <h2 className="w-[142.44px] h-[23.66px] text-blue-950 text-2xl font-bold leading-[20px]">
              319
            </h2>{' '}
            <p className="text-center text-teal-500 text-xs font-bold leading-tight cursor-default">
              +2.45%
            </p>{' '}
          </div>
        </div>

        <div className="w-[206px] h-[88px] bg-white rounded-[10px] border border-blue-600 p-2">
          <h2 className="w-full h-[26.49px] text-slate-400 text-base font-bold leading-7">
            Revenue Remitted
          </h2>
          <div className="revenue-data flex items-center justify-between">
            <h2 className="w-[142.44px] h-[23.66px] text-blue-950 text-2xl font-bold leading-[20px]">
              319
            </h2>
            <p className="text-center text-teal-500 text-xs font-bold leading-tight cursor-default">
              -4.75%
            </p>
          </div>
        </div>

        <div className="w-[206px] h-[88px] bg-white rounded-[10px] border border-blue-600 p-2">
          <h2 className="w-full h-[26.49px] text-slate-400 text-base font-bold leading-7">
            Revenue Unremitted
          </h2>
          <div className="revenue-data flex items-center justify-between">
            <h2 className="w-[142.44px] h-[23.66px] text-blue-950 text-2xl font-bold leading-[20px]">
              319
            </h2>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <WeekChart />
      </div>
    </div>
  );
};

export default Remittances;
