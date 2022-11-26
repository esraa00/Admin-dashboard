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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <li key={index} data-after={element} className>
        <FontAwesomeIcon
          icon={icons[index]}
          className="element-icon"
        ></FontAwesomeIcon>
        <Link
          href={`/${element}`}
          className={`sidebar__content-link ${isSidebarOpen ? 'active' : ''}`}
        >
          {element}
        </Link>
      </li>
    );
  });

  return (
    <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      <div className={`sidebar__header ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar__logo">
          <FontAwesomeIcon icon={MainLogo} className="sidebar__logo-icon" />
          <span className="sidebar__logo-name">Dashboard</span>
        </div>
        <div
          className="sidebar__nav-icon"
          onClick={() => {
            setIsSidebarOpen((prevState) => {
              return !isSidebarOpen;
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
        className={`sidebar__profile-content ${isSidebarOpen ? 'active' : ''}`}
      >
        <img
          src={UserImage}
          alt="profile_picture"
          className={`sidebar__profile-image ${isSidebarOpen ? 'active' : ''}`}
        ></img>
        <div
          className={`sidebar__profile-info ${isSidebarOpen ? 'active' : ''}`}
        >
          <p className="sidebar__profile-name">Esraa Mohamed</p>
          <p className="sidebar__profile-job">Vendor</p>
        </div>
        <FontAwesomeIcon
          icon={LogoutIcon}
          className={`sidebar__logout-icon ${isSidebarOpen ? 'active' : ''}`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
