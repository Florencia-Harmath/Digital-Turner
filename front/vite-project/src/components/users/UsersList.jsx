import PropTypes from "prop-types";
import styles from "./Users.module.css";

const UsersList = ({ user }) => {
  const appointments = user.Appointments || [];

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("es-AR", options);
  };

  return (
    <div className={styles.container}>
      <p>
        <strong>Nombre:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Cumpleaños:</strong> {user.birthdate}
      </p>
      <p>
        <strong>DNI:</strong> {user.nDni}
      </p>

      {appointments.length > 0 ? (
        <section className={styles.appointments}>
          <p>
            <strong>Turnos:</strong>
          </p>
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id} className={styles.appointmentsList}>
                <span>
                  <strong>Fecha:</strong> {formatDate(appointment.date)}
                </span>
                <span>
                  <strong>Hora:</strong> {appointment.time}
                </span>
                <span>
                  <strong>Servicio:</strong> {appointment.serviceName}
                </span>
                <span>
                  <strong>Estado:</strong> {appointment.status}
                </span> 
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p>No hay turnos registrados.</p>
      )}
    </div>
  );
};

UsersList.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    nDni: PropTypes.number.isRequired,
    Appointments: PropTypes.array,
  }).isRequired,
};

export default UsersList;
