import styles from "./Footer.module.scss";
import Link from "next/link";
import Ig from "../../public/ig-logo.svg";
import Twitter from "../../public/twitter-logo.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.links_container}>
        <Link href="/adopt">
          <a>Adoptá</a>
        </Link>

        <Link href="/donate">
          <a>Doná</a>
        </Link>
      </div>

      <div className={styles.social_links_container}>
        <a href="https://instagram.com/adoptapp">
          <Ig className={styles.logo} />
        </a>

        <a href="https://twitter.com/adoptapp">
          <Twitter className={styles.logo} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
