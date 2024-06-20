import Appointments from "../../components/appointments/appointments";
import styles from "./appointmentsView.module.css";
const GetAppointmentsView = () => {
    return (
        <>
        <h1 className={styles.titulo}>SOLICITAR TURNO</h1>
        <p className={styles.p}>Elegí el servicio, la fecha y el horario! Las fechas a elegir son con 24 horas de anticipación! De lunes a sabado, de 10:00 a 16:30 horas, ¡Te esperamos!</p>
       <Appointments />
        </>
    )
}

export default GetAppointmentsView;