import { Link } from "react-router-dom";
import styles from "./homeView.module.css";

const HomeView = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>BIENVENIDO A NUESTRO TURNERO!!</h1>
      <div className={styles.seccion}>
        <img src="src/assets/WhatsApp Image 2024-05-22 at 12.41.52.jpeg" alt="img-seccion1" />
        <p>
          Gracias por registrarte y confiar en nosotros! En esta página vas a
          poder seleccionar el turno que desees, con el profesional que desees!
          También vas a poder cancelar el turno, y modificarlo en caso de ser
          necesario. Una vez solicitado el turno, te llegara al mail registrado, un correo
          de confirmación del turno! No es necesario que lo respondas.
        </p>
      </div>
      <p className={styles.registrar}>¿No tienes cuenta? <Link to="/register" className={styles.link}>Registrate</Link></p>

        <p className={styles.registrar}>¿Ya tienes cuenta? <Link to="/login" className={styles.link}>Inicia sesión</Link></p>
    </div>
  );
};

export default HomeView;
