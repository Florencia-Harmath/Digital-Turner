import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <h1 className={styles.navTitle}>TuLogo</h1>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/appointments">
              TURNOS
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/profile">
              MiPERFIL
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/about">
              ABOUTuS
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/contact">
              CONTACT
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/users">
              USUARIOS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
