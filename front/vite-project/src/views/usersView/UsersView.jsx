import axios from "axios";
import { useEffect, useState } from "react";
import UsersList from "../../components/users/UsersList";
import styles from "./Users.module.css";

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("http://localhost:3000/users");
        const usersWithAppointments = await Promise.all(
          response.data.map(async (user) => {
            try {
              const appointmentsResponse = await axios.get(
                `http://localhost:3000/users/${user.id}`
              );
              const { appointments } = appointmentsResponse.data;
              return { ...user, Appointments: appointments };
            } catch (error) {
              console.error(
                `Error al obtener los turnos del usuario ${user.id}:`,
                error
              );
              return { ...user, Appointments: [] };
            }
          })
        );
        setUsers(usersWithAppointments);
      } catch (error) {
        setError("Error al obtener usuarios. Intenta nuevamente.");
        console.error("Error al obtener los usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className={styles.titulo}>Lista de usuarios:</h1>
      <div className={styles.container}>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : users.length > 0 ? (
          users.map((user) => <UsersList key={user.id} user={user} />)
        ) : (
          <p>No hay usuarios registrados</p>
        )}
      </div>
    </div>
  );
};

export default UsersView;
