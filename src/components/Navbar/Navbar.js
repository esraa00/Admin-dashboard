import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass as SearchIcon } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas as LanguagesIcon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as DarkMoodIcon } from '@fortawesome/free-solid-svg-icons';
import { faBell as NotificationIcon } from '@fortawesome/free-solid-svg-icons';
import { faMessage as MessagesIcon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__first-section">
        <div className="navbar__search-section">
          <input
            className="navbar__search-input"
            placeholder="Search..."
          ></input>
          <FontAwesomeIcon icon={SearchIcon}></FontAwesomeIcon>
        </div>
      </div>
      <div className="navbar__second-section">
        <div className="navbar__language-section">
          <FontAwesomeIcon icon={LanguagesIcon}></FontAwesomeIcon>
          <span>English</span>
        </div>
        <div className="navbar__theme-section">
          <FontAwesomeIcon icon={DarkMoodIcon}></FontAwesomeIcon>
        </div>
        <div className="navbar__notification-section">
          <FontAwesomeIcon
            icon={NotificationIcon}
            className="navbar__notification-icon"
          ></FontAwesomeIcon>
          <span>1</span>
        </div>
        <div className="navbar__message-section">
          <FontAwesomeIcon
            icon={MessagesIcon}
            className="navbar__message-icon"
          />
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
