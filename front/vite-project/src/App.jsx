import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import HomeView from "./views/homeView/HomeView";
import RegisterFormView from "./views/RegisterFormView/RegisterFormView";
import GetAppointmentsView from "./views/appointmentsView/GetAppointmentsView";
import MisTurnosView from "./views/misTurnosView/MisTurnosView";
import ProfileView from "./views/profileView/ProfileView";
import AboutUsView from "./views/aboutUsView/AboutUsView";
import ContactView from "./views/contactView/ContactView";
import UsersView from "./views/usersView/UsersView";
import NotFoundView from "./views/notFoundView/NotFoundView";
import LoginForm from "./components/loginForm/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/inicial" &&
        location.pathname !== "/register" &&
        location.pathname !== "/login" && <NavBar />}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterFormView />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/schedule" element={<GetAppointmentsView />} />
        <Route path="/turnos" element={<MisTurnosView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/about" element={<AboutUsView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/users" element={<UsersView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      <Footer />
      <ToastContainer 
      position="top-right"
      autoClose={900}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </>
  );
}

export default App;
