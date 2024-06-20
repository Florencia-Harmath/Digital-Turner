import Turnos from "../../components/turnos/Turnos";
import styles from "./misTurnos.module.css"
import { Link } from "react-router-dom";

const MisTurnosView = () => {
    return  (
        <div className={styles.contenedor}>
        <div>
            <Link to="/schedule" className={styles.link}>NUEVO TURNO</Link>
        </div>
        <h1 className={styles.titulo}>MIS TURNOS:</h1>
        <Turnos/>
        </div>
    )
}

export default MisTurnosView;