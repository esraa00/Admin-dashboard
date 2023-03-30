import './Sidebar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBolt as MainLogo } from '@fortawesome/free-solid-svg-icons';
import { faTableColumns as DashboardIcon } from '@fortawesome/free-solid-svg-icons';
import { faUser as ProfileIcon } from '@fortawesome/free-solid-svg-icons';
import { faBox as ProductsIcon } from '@fortawesome/free-solid-svg-icons';
import { faTicket as CuponsIcon } from '@fortawesome/free-solid-svg-icons';
import { faBoxesPacking as OrdersIcon } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket as LogoutIcon } from '@fortawesome/free-solid-svg-icons';

import UserImage from '../../images/profile.jpg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);

  const elements = ['dashboard', 'profile', 'products', 'orders', 'cupons'];

  const icons = [
    DashboardIcon,
    ProfileIcon,
    ProductsIcon,
    OrdersIcon,
    CuponsIcon,
  ];

  const renderSidebarContent = elements.map((element, index) => {
    return (
      <li key={index} data-after={element}>
        <FontAwesomeIcon
          icon={icons[index]}
          className="element-icon"
        ></FontAwesomeIcon>
        <Link
          href={`/${element}`}
          className={`sidebar__content-link ${
            isSidebarClosed ? 'inactive' : ''
          }`}
        >
          {element}
        </Link>
      </li>
    );
  });

  return (
    <div className={`sidebar ${isSidebarClosed ? 'inactive' : ''}`}>
      <div className={`sidebar__header ${isSidebarClosed ? 'inactive' : ''}`}>
        <div className="sidebar__logo">
          <FontAwesomeIcon icon={MainLogo} className="sidebar__logo-icon" />
          <span className="sidebar__logo-name">Dashboard</span>
        </div>
        <div
          className="sidebar__nav-icon"
          onClick={() => {
            setIsSidebarClosed((prevState) => {
              return !isSidebarClosed;
            });
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="sidebar__content">
        <ul>{renderSidebarContent}</ul>
      </div>

      <div className="sidebar__profile-theme"></div>

      <div
        className={`sidebar__profile-content ${
          isSidebarClosed ? 'inactive' : ''
        }`}
      >
        <img
          src={UserImage}
          alt="profile_picture"
          className={`sidebar__profile-image ${
            isSidebarClosed ? 'inactive' : ''
          }`}
        ></img>
        <div
          className={`sidebar__profile-info ${
            isSidebarClosed ? 'inactive' : ''
          }`}
        >
          <p className="sidebar__profile-name">Esraa Mohamed</p>
          <p className="sidebar__profile-job">Vendor</p>
        </div>
        <FontAwesomeIcon
          icon={LogoutIcon}
          className={`sidebar__logout-icon ${
            isSidebarClosed ? 'inactive' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
