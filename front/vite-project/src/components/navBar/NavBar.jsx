import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../redux/userSlice";
import styles from "./navBar.module.css";

const NavBar = () => {
  const userRole = useSelector(selectUserRole);

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
            <Link className={styles.navLink} to="/about">
              ABOUTuS
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/contact">
              CONTACT
            </Link>
          </li>
          {userRole !== 'guest' && (
            <>
              <li>
                <Link className={styles.navLink} to="/profile">
                  MiPERFIL
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} to="/turnos">
                  TURNOS
                </Link>
              </li>
            </>
          )}
          {userRole === 'admin' && (
            <li>
              <Link className={styles.navLink} to="/users">
                USUARIOS
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
