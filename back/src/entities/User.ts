import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointments";
import { Credential } from "./Credential";


@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    birthdate: Date
    @Column()
    nDni: number
    @Column()
    credentialsId: number
    @Column({default: "user"})
    role: string

    @OneToMany(()=> Appointment, appointment => appointment.user)
    @JoinColumn()
    appointments: Appointment[];

    @OneToOne(() => Credential) 
    credential: Credential;
}