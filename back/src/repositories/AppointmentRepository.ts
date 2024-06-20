import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointments";

const appointmentRepository = AppDataSource.getRepository(Appointment);

export default appointmentRepository;