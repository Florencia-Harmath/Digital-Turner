import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice.js";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { validateLoginForm } from "../../helpers/validate.js";

const LoginForm = () => {
  const navigates = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    const validateErrors = validateLoginForm(userData);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      axios
        .post("http://localhost:3000/users/login", userData)
        .then((response) => {
          console.log("Respuesta del servidor:", response.data);
          const { login, user } = response.data;
          if (login) {
            if (user && user.id) {
              toast.success("Inicio de sesión exitoso");
              dispatch(setUser(user));
              navigates("/profile");
            } else {
              toast.error("Datos de usuario inválidos");
            }
          } else {
            toast.warning("Usuario o contraseña incorrectos");
          }
        })
        .catch((error) => {
          console.error("Error en login:", error);
          toast.error("Error al iniciar sesión");
        });
    }
  }; 

  return (
    <div className={styles.container}>
      <p className={styles.p}>
        ¿No tienes cuenta aún? -{" "}
        <Link className={styles.link} to="/register">
          Regístrate
        </Link>
      </p>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <h2>LOGIN</h2>
        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            value={userData.username}
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            value={userData.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>

        <div className={styles.formGroup}>
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
