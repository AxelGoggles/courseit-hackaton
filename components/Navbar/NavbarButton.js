import styles from "./Navbar.module.scss";
import { useRef, useEffect, useState } from "react";

const NavbarButton = ({ text, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  const barRef = useRef(null);

  useEffect(() => {
    const {current} = barRef;

    if (current) {
    barRef.current.addEventListener("mouseover", (e) => {
      e.preventDefault()
      setIsHovering(true);
    });
    barRef.current.addEventListener("mouseout", (e) => {
      e.preventDefault()
      setIsHovering(false);
    });
    }
  }, []);

  return (
    <a className={styles.button_wrapper} ref={barRef}>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
      {isHovering && <div className={styles.button_bar}></div>}
    </a>
  );
};

export default NavbarButton;
