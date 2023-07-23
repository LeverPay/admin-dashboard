import React from 'react';
import './HeaderStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
        <Link to="/basic_information" className="profile-img flex-end">
        <img
          src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="profile-img"
        />
      </Link>
      <div className="greeting-container">
        <div className="greeting">
          <p>Hi Patrick,</p>
          <h1>Welcome!</h1>
        </div>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input className="search-input" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
