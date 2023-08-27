import React from "react";
import Actions from "../Actions/Actions";
import Footer from "../Footer/Footer";
import styles from "./SideBarSection.module.css";

const SideBarSection = ({ view }) => {
  const isPartialView = view === "partial";

  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.logos}>
        <img
          src="../static/images/Hamburger-Menü.png"
          alt="MenuIcon"
          className={styles.menuIcon}
        />
        <img src="../static/images/Logo.png" alt="youtubeLogo" />
      </div>
      {isPartialView && (
        <div className={styles.overlayContainer}>
          <div className={`${styles.sidebar} ${styles.collapsedBar}`}>
            <Actions />
            <hr className="sidebarHr" />
            <Footer />
          </div>
        </div>
      )}
      {!isPartialView && (
        <div className={styles.sidebar}>
          <Actions />
          <hr className="sidebarHr" />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default SideBarSection;
