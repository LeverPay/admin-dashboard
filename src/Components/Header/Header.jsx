import React from 'react';
import './HeaderStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
  return (
    <div className="header-container">
      <div className="flex-end justify-end w-full">
        <Link to="/basic_information" className="">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
            className="w-10 h-10 rounded-full mr-4"
          />
        </Link>
      </div>
      <div className="greeting-container md:flex-row flex-col items-start">
        <div className="greeting">
          <h3 className="text-slate-500 text-sm font-bold leading-normal">
            Hi {data?.first_name} ,
          </h3>{' '}
          <h2 className="text-indigo-900 text-[34px] font-bold leading-[42px]">
            Welcome!
          </h2>{' '}
        </div>
        <div className="w-[341px] h-[46px] bg-white rounded-[10px] border border-blue-900 flex items-center justify-start px-3 gap-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input className="outline-none" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
