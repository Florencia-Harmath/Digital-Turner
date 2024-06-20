import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contenedor}>
        <div className={styles.redes}>
          <p>Seguinos en Instagram</p>
          <p>@tuInstagram</p>
        </div>
        <img src="src/assets/instagram.png" alt="instagram" />
      </div>
      <div className={styles.contenedor}>
        <div className={styles.redes}>
          <p>Escribinos por WhatsApp</p>
          <p>--Tu número--</p>
        </div>
        <img src="src/assets/whatsapp.png" alt="whatsapp" />
      </div>
    </div>
  );
};

export default Footer;
