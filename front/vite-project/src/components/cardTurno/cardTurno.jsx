import styles from "./cardTurno.module.css";
import PropTypes from "prop-types";


const CardTurno = ({ turno, onCancelTurno }) => {
  if (!turno) {
    return null;
  }

  const formData = (dataString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dataString).toLocaleDateString("es-ES", options);
  };

  const getStatusClass = (status) => {
    return status === "active" ? styles.green : styles.red;
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerWords}>
        <h3 className={styles.nameService}>
          Servicio: {turno.serviceName && turno.serviceName.toUpperCase()}{" "}
        </h3>
        <p className={styles.date}>Fecha: {formData(turno.date)}</p>
        <p className={styles.time}>Hora: {turno.time}</p>
        <p className={`${styles.status} ${getStatusClass(turno.status)}`}>
          Estado: {turno.status === "active" ? "ACTIVO" : "CANCELADO"}
        </p>
        <button
          className={styles.cancelButton}
          onClick={() => onCancelTurno(turno.id)}
          disabled={turno.status === "cancelled"}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

CardTurno.propTypes = {
    turno: PropTypes.shape({
      serviceName: PropTypes.string,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }),
    onCancelTurno: PropTypes.func.isRequired,
  };

  
export default CardTurno;