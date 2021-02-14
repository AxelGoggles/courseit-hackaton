import styles from "./Navbar.module.scss";
import NavbarButton from "./NavbarButton";
import Logo from "../Logo";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.container}>
      <Logo />
      <div className={styles.buttons_container}>
        <NavbarButton text="Adoptá" onClick={() => router.push("/adopt")} />
        <NavbarButton text="Doná" onClick={() => router.push("/donate")} />
        <NavbarButton text="Contacto" />
      </div>
    </nav>
  );
};

export default Navbar;
