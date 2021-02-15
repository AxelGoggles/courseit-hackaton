import styles from "./Logo.module.scss";
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
    <div className={styles.container}>
      <span className={styles.adopt}>Adopt</span>
      <span className={styles.app}>ápp</span>
      <span className={`material-icons ${styles.heart}`}>favorite_border</span>
    </div>
    </Link>
  );
};

export default Logo;
