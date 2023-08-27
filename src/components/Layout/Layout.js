import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import SideBarSection from "../../components/SideBarSection/SideBarSection";
import styles from "./Layout.module.css";
import debounce from "lodash/debounce";
import { executeSearch } from "../../api/youtube";

const Layout = ({ setVideos }) => {
  const handleSearch = (query) => {
    executeSearch(query, setVideos);
  };
  const debouncedExecuteSearch = debounce(handleSearch, 300);

  return (
    <>
      <div className={styles.navBarFixed}>
        <TopBar handleSearch={debouncedExecuteSearch} />
        <hr className={`${styles.positionBody} ${styles.hr}`} />
      </div>
      <SideBarSection />
    </>
  );
};

export default Layout;
