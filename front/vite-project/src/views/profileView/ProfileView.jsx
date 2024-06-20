import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./profileView.module.css"; 

const UserProfile = () => {
  const user = useSelector((state) => state.user.user); 
  const [userAppointments, setUserAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserAppointments = async () => {
      if (user?.id) {
        try {
          setLoading(true);
          setError(null);
          const response = await axios.get(
            `http://localhost:3000/users/${user.id}`
          );
          console.log("Respuesta de la API:", response.data); 
          const { appointments } = response.data;
          setUserAppointments(appointments || []);
        } catch (error) {
          setError("Error al obtener los turnos del usuario. Intenta nuevamente.");
          console.error("Error al obtener los turnos del usuario:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); 
      }
    };

    fetchUserAppointments();
  }, [user]);

  if (!user) { 
    return (
      <div className={styles.contenedor1}>
        <p className={styles.p}>No hay un usuario logueado</p>
        <Link to="/login" className={styles.link}>-iniciar sesión-</Link>
        <Link to="/register" className={styles.link}>-registrarse-</Link>
      </div>
    );
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("es-AR", options);
  };

  return (
    <div className={styles.contenedor}>
      <h2>
        <strong>Bienvenid@:</strong> {user.name} !!
      </h2>
      <h3>
        <strong>Información de tu usuario:</strong>
      </h3>
      <p>
        <strong>Nombre: </strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Fecha de nacimiento:</strong> {formatDate(user.birthdate)}
      </p>
      <p>
        <strong>DNI:</strong> {user.nDni}
      </p>
      <p>
        <strong>Nombre de usuario: </strong> {user.username}
      </p>

      {userAppointments.length > 0 ? (
        <ul className={styles.ul}>
          <p><strong>Turnos:</strong></p>
          {userAppointments.map((appointment) => (
            <li key={appointment.id}>
              <span><strong>Fecha:</strong> {formatDate(appointment.date)}</span>
              <span><strong>Hora:</strong> {appointment.time}</span>
              <span><strong>Servicio:</strong> {appointment.serviceName}</span>
              <span><strong>Estado:</strong> {appointment.status}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay turnos registrados.</p>
      )}

      <Link to="/" className={styles.link}>CERRAR SESION</Link>
    </div>
  );
};

export default UserProfile;
