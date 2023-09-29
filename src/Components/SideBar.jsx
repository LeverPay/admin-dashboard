import React, { useState } from 'react';
import Logo from '../assets/LeverPayGold.png';

import { SideBarView, LogoView, ListView } from '../css/SidebarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faCreditCard,
  faUserGroup,
  faMessage,
  faGear,
  faCircleQuestion,
  faAddressBook,
  faRightFromBracket,
  faChartSimple,
  faArrowTrendUp,
  faPercent,
} from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleListItemClick = (index) => {
    setActiveIndex(index);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the authentication token (or any other session-related data)
    Cookies.remove('authToken');

    // Redirect the user to the login page (or any other desired page)
    navigate('/login');
  };

  return (
    <SideBarView>
      <LogoView>
        <Link to="/" className="nav__link">
          <img src={Logo} alt="logo" />
        </Link>
      </LogoView>
      <div className="sidebar-content">
        <ListView>
          <li
            onClick={() => handleListItemClick(0)}
            className={activeIndex === 0 ? 'active' : ''}
          >
            <Link to="/" className=" text-base nav__link">
              <FontAwesomeIcon icon={faChartPie} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(1)}
            className={activeIndex === 1 ? 'active' : ''}
          >
            <Link to="/transaction" className="text-base nav__link">
              <FontAwesomeIcon icon={faArrowTrendUp} />{' '}
              <span>Transactions</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(2)}
            className={activeIndex === 2 ? 'active' : ''}
          >
            <Link to="/card-center" className="text-base nav__link">
              <FontAwesomeIcon icon={faCreditCard} /> <span>Card Center</span>
            </Link>
          </li>
          <li
            className={activeIndex === 3 ? 'active' : ''}
            onClick={() => handleListItemClick(3)}
          >
            <Link to="/users" className="text-base nav__link">
              <FontAwesomeIcon icon={faUserGroup} /> <span>Users</span>{' '}
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(4)}
            className={activeIndex === 4 ? 'active' : ''}
          >
            <Link to="/messages" className="text-base nav__link">
              <FontAwesomeIcon icon={faMessage} />
              <span>Messages</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(5)}
            className={activeIndex === 5 ? 'active' : ''}
          >
            <Link to="/contact" className="text-base nav__link">
              <FontAwesomeIcon icon={faAddressBook} /> <span>Contact</span>{' '}
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(6)}
            className={activeIndex === 6 ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faChartSimple} /> <span>Reports</span>{' '}
          </li>
          <li
            onClick={() => handleListItemClick(7)}
            className={activeIndex === 7 ? 'active' : ''}
          >
            <Link to="/settings" className="text-base nav__link">
              <FontAwesomeIcon icon={faGear} /> <span>Settings</span>{' '}
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(8)}
            className={activeIndex === 8 ? 'active' : ''}
          >
            <Link to="/fund_request" className="nav__link">
              <FontAwesomeIcon icon={faArrowTrendUp} />{' '}
              <span>Fund Request</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(9)}
            className={activeIndex === 9 ? 'active' : ''}
          >
            <Link to="/merchant" className="nav__link">
              <FontAwesomeIcon icon={faArrowTrendUp} /> <span>Merchant</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(10)}
            className={activeIndex === 10 ? 'active' : ''}
          >
            <Link to="/user-to-user-request" className="nav__link">
              <FontAwesomeIcon icon={faArrowTrendUp} />{' '}
              <span>User to User Transfer</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(11)}
            className={activeIndex === 11 ? 'active' : ''}
          >
            <Link to="/merchant-subscription" className="nav__link">
              <FontAwesomeIcon icon={faArrowTrendUp} />{' '}
              <span>Merchant Subscription</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(12)}
            className={activeIndex === 12 ? 'active' : ''}
          >
            <Link to="/basic_information" className="nav__link">
              <FontAwesomeIcon icon={faArrowTrendUp} /> <span>Profile</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(13)}
            className={activeIndex === 13 ? 'active' : ''}
          >
            <Link to="/investors" className="nav__link">
              <FontAwesomeIcon icon={faArrowTrendUp} /> <span>Investors</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(14)}
            className={activeIndex === 14 ? 'active' : ''}
          >
            <Link to="/set-rates" className="nav__link">
              <FontAwesomeIcon icon={faPercent} /> <span>Set Rates</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(15)}
            className={activeIndex === 15 ? 'active' : ''}
          >
            <Link to="/set-card-limit" className="nav__link">
              <FontAwesomeIcon icon={faArrowTrendUp} />{' '}
              <span>Set Card Limit</span>
            </Link>
          </li>
        </ListView>

        <ListView>
          <li
            onClick={() => handleListItemClick(16)}
            className={activeIndex === 16 ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faCircleQuestion} /> <span>Help Center</span>
          </li>
          <li
            className={activeIndex === 17 ? 'active' : ''}
            onClick={() => handleLogout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Logout</span>
          </li>
        </ListView>
      </div>
    </SideBarView>
  );
};

export default SideBar;
