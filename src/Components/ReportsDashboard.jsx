import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DashboardStyles.css';

const ReportsDashboard = () => {
  return (
    <div class="report-container">
      <h1 class="report-title">REPORT</h1>
      <div class="report-section">
        <div class="report-item">
          <h2 class="report-subtitle">Last Week Revenue</h2>
          <h1 class="report-value">+29.7%</h1>
          <span class="report-dots">....</span>
        </div>

        <div class="report-item">
          <h2 class="report-subtitle">This Week Revenue</h2>
          <h1 class="report-value">-53.4%</h1>
          <span class="report-dots">....</span>
        </div>
      </div>

      <hr class="report-divider" />

      <div class="report-performance">
        <div class="report-subsection">
          <h2 class="report-subtitle">Performance</h2>
          <p class="report-performance">+0.05</p>
        </div>

        <Link to="#" class="report-download-link">
          Download
        </Link>
      </div>
    </div>
  );
};

export default ReportsDashboard;
