import React from 'react';
import '../css/DashboardStyles.css';
import WeekChart from './WeekChart';

const Remittances = () => {
  return (
    <div className="remittances-container">
      <div className="header">
        <h1>Remittances</h1>

        <select name="Monthly" id="monthlySelect">
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div className="revenue-section">
        <div className="revenue-item">
          <h2>Revenue Generated</h2>
          <div className="revenue-data">
            <h3>319</h3>
            <p>+2.45%</p>
          </div>
        </div>

        <div className="revenue-item">
          <h2>Revenue Remitted</h2>
          <div className="revenue-data">
            <h3>319</h3>
            <p>-4.75%</p>
          </div>
        </div>

        <div className="revenue-item">
          <h2>Revenue Remitted</h2>
          <div className="revenue-data">
            <h3>319</h3>
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
