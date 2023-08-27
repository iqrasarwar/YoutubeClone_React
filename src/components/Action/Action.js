import styles from "./Action.module.css";

const Action = ({ title, image }) => {
  return (
    <div className={styles.action}>
      <img src={image} className={styles.actionImg} alt="action image" />
      <p>{title}</p>
    </div>
  );
};

export default Action;
