
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { cancelUserAppointments } from "../../redux/userSlice";
import CardTurno from "../cardTurno/cardTurno";
import style from "./Turnos.module.css";
import { useSelector } from "react-redux";

const Turnos = () => {
  const dispatch = useDispatch();
  const [userAppointments, setUserAppointments] = useState([]);
  const idUser = useSelector((state) => state.user.userId);

  const fetchUserAppointments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/${idUser}`
      );
      const { appointments } = response.data;
      setUserAppointments(appointments);
    } catch (error) {
      console.error("Error al obtener los turnos del usuario:", error);
    }
  };

  useEffect(() => {
    if (idUser) {
      fetchUserAppointments();
    }
  });

  const handleCancelTurno = (id) => {
    axios
      .put(`http://localhost:3000/appointments/cancel/${id}`)
      .then(() => {
        console.log("Turno cancelado:", id);
        dispatch(cancelUserAppointments(id));
        fetchUserAppointments();
      })
      .catch((err) => console.log("Error al cancelar turno:", err));
  };

  return (
    <div className={style.container}>
      {userAppointments.length > 0 ? (
        userAppointments.map((turno, index) => (
          <CardTurno
            key={index}
            turno={turno}
            onCancelTurno={handleCancelTurno}
          />
        ))
      ) : (
        <p className={style.p}>No hay turnos programados.</p>
      )}
    </div>
  );
};

export default Turnos;


