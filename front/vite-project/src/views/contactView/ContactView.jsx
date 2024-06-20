import styles from "./ContactView.module.css";

const ContactView = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>CONTACTANOS</h1>
      <p className={styles.p}>
        Si tienes alguna duda o consulta, no dudes en contactarnos. Recordá que
        nuestro horario de atencion es de lunes a viernes de 09:00 a 18:00 y
        sabados de 10:00 a 15:00hs.
      </p>
      <div className={styles.info}>
        <p>¿Dónde estamos?</p>
        <p>Av. Rivadavia 1234, CABA</p>
        <img src="src/assets/mapa.jpeg" alt="imagen mapa" />
      </div>
      <div className={styles.info}>
        <p>Contactanos por correo</p>
        <p>tucorreo@mail.com</p>
        <img src="src/assets/correo.jpeg" alt="imagen correo" />
      </div>
      <div className={styles.info}>
        <p>Contactanos por whatsapp</p>
        <p>--tuWhatsapp--</p>
        <img src="src/assets/celu.jpeg" alt="imagen celu" />
      </div>
    </div>
  );
};

export default ContactView;
