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
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleListItemClick = (index) => {
    setActiveIndex(index);
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
        </ListView>

        <ListView>
          <li
            onClick={() => handleListItemClick(8)}
            className={activeIndex === 8 ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faCircleQuestion} /> <span>Help Center</span>
          </li>
          <li
            className={activeIndex === 9 ? 'active' : ''}
            onClick={() => handleListItemClick(9)}
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
