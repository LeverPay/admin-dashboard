import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import { Link } from 'react-router-dom';

const Messages = () => {
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
      <div className="message-body">
        <div className="message-sidebar">
          <div className="sidebar-input">
            <input type="text" name="" id="" placeholder="search messages" />
          </div>
        </div>

        <div className="message-body"></div>
      </div>
    </DashboardView>
  );
};

export default Messages;
