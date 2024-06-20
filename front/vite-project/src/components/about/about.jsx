import styles from "./about.module.css";

const About = () => {
  return (
    < div className={styles.container}>
      <h1 className={styles.h1}>Quienes somos...</h1>
      <p className={styles.p}>
        En esta sección contaremos sobre tu empresa/servicios, en este caso, una cosmetica/spa: somos una empresa dirigida a las mujeres y hombres que
        quieren potenciar su belleza natural, con tratamientos no invasivos, y
        una atención personalizada por los mejores profesionales.
      </p>
      <div className={styles.div}>
        <p>
          Contamos con más de 10 años de experiencia en todas las áreas de
          belleza. Contamos con peluqueros expertos en colorimetria y
          tratamientos de nutrición y alisados sin formol, con productos
          aprobados por el ANMAT.
        </p>
        <img
          src="src/assets/alisados.jpeg"
          alt="img alisados"
          className={styles.img}
        />
        <img
          src="src/assets/color.jpeg"
          alt="img color"
          className={styles.img}
        />
      </div>
      <div className={styles.div}>
        <p>
          También tenemos expertos en colocaciónd de pestañas y perfilado de
          cejas, y las mejores limpiezas faciales profundas
        </p>
        <img
          src="src/assets/pestanias-cejas.jpeg"
          alt="img pestanas"
          className={styles.img}
        />
        <img 
        src="src/assets/faciales.jpeg" 
        alt="img faciales" 
        className={styles.img}
        />
      </div>
      <div className={styles.div}>
        <p>
          Contamos con bronceador natural de piel y depilacion laser con la mas
          alta tecnologia en el mercado.
        </p>
        <img 
        src="src/assets/depilacion.jpeg" 
        alt="img depilacion"
        className={styles.img}
         />
         <img 
         src="src/assets/bronceado.jpeg" 
         alt="img bronceador" 
         className={styles.img}
         />
      </div>
    </div>
  );
};

export default About;
