import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DashboardStyles.css';

const ReportsDashboard = () => {
  return (
    <div className="report-container w-full lg:my-0 my-5">
      <h1 className="text-center text-blue-950 text-base font-normal uppercase leading-normal">
        Report
      </h1>
      <div className="flex w-full items-center justify-between my-2">
        <div className="flex items-center justify-center flex-col">
          <h2 className="w-[127px] h-[19px] text-blue-950 text-xs font-normal">
            Last Week Revenue
          </h2>
          <h2 className="w-20 h-[35.36px] text-blue-900 text-2xl font-normal uppercase">
            +29.7%
          </h2>{' '}
        </div>

        <div className="flex items-center justify-center flex-col">
          <h2 className="w-[127px] h-[19px] text-blue-950 text-xs font-normal">
            Last Week Revenue
          </h2>
          <h2 className="w-20 h-[35.36px] text-center text-blue-900 text-2xl font-normal uppercase">
            -53.4%
          </h2>{' '}
        </div>
      </div>
      <hr className="bg-gray w-full h-1" />
      <div className="report-performance">
        <div className="">
          <h2 className=" h-6 text-blue-950 text-base font-normal">
            Performance
          </h2>{' '}
          <p className="w-[45px] h-[18.25px] text-teal-500 text-xs font-normal uppercase">
            +0.05%
          </p>{' '}
        </div>

        <Link to="#" className="report-download-link">
          <div className="text-blue-900 text-xs font-normal hover:text-white">
            Download
          </div>{' '}
        </Link>
      </div>
    </div>
  );
};

export default ReportsDashboard;
