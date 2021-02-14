import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.container}>
      <span className={styles.adopt}>Adopt</span>
      <span className={styles.app}>ápp</span>
      <span className={`material-icons ${styles.heart}`}>favorite_border</span>
    </div>
  );
};

export default Logo;
