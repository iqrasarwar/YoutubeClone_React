import ReactLoading from "react-loading";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ReactLoading
        type="spinningBubbles"
        color="black"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
