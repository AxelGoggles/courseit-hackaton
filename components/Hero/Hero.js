import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background_image}></div>
      <div className={styles.top_container}>
        <p>Encontrá un animal que busque una familia</p>
        <p>o ayudalo en su recuperación</p>

        <div className={styles.buttons_container}>
          <Link href="/adopt">
            <button>Dale hogar a un animal</button>
          </Link>

          <Link href="/donate">
            <button>Apadriná a un animal</button>
          </Link>
        </div>
      </div>

      <div className={styles.bottom_container}>
        <p>¿Sos parte de un refugio?</p>
        <button>¡Publicá con nosotros!</button>
      </div>
    </div>
  );
};

export default Hero;
