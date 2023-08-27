import React from "react";
import styles from "./TopBar.module.css";

const TopBar = ({ handleSearch }) => {
  const showSignIn = false;
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    handleSearch(query);
  };

  return (
    <div className={styles.TopBar}>
      <div className={styles.SearchBar}>
        <div className={styles.Bar}>
          <input
            type="text"
            placeholder="Search"
            id="Search"
            onKeyUp={handleSearchInputChange}
          />
        </div>
        <div className={styles.SearchIcon}>
          <img src="../static/images/Vector.png" alt="SearchIcon" />
        </div>
      </div>
      {showSignIn ? (
        <div className={styles.NavBarActions}>
          <img
            src="https://img.icons8.com/tiny-glyph/16/000000/experimental-menu-2-tiny-glyph.png"
            alt="Menu"
          />
          <div className={styles.SignUp}>
            <img src="../static/images/ProfileIcon.png" alt="profile" />
            Sign In
          </div>
        </div>
      ) : (
        <div className={styles.NavBarActions}>
          <img src="../static/images/Create.png" alt="CreateNew" />
          <img src="../static/images/Chocolate.png" alt="Apps" id="filteDesc" />
          <img src="../static/images/Notification.png" alt="Notification" />
          <img
            src="../static/images/profile.jpg"
            className={styles.SignIn}
            alt="Profile"
          />
        </div>
      )}
    </div>
  );
};

export default TopBar;
