import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import HomeView from "./views/homeView/HomeView";
import RegisterFormView from "./views/registerFormView/RegisterFormView";
import LoginFormView from "./views/loginFormView/LoginFormView";
import GetAppointmentsView from "./views/appointmentsView/GetAppointmentsView";
import MisTurnosView from "./views/misTurnosView/MisTurnosView";
import ProfileView from "./views/profileView/ProfileView";
import AboutUsView from "./views/aboutUsView/AboutUsView";
import ContactView from "./views/contactView/ContactView";
import UsersView from "./views/usersView/UsersView";
import InicialPageView from "./views/inicialPageView/InicialPageView";
import NotFoundView from "./views/notFoundView/NotFoundView";


function App() {
  const location = useLocation();

  return (
    <>
    {location.pathname !== "/inicial" && location.pathname !== "/register" && location.pathname !== "/login" && <NavBar />}
      <Routes>
        <Route path="/" element= {<HomeView />}/>
        <Route path="/inicial" element= {<InicialPageView />}/>
        <Route path="/register" element= {<RegisterFormView />}/>
        <Route path="/login" element= {<LoginFormView />}/>
        <Route path="/schedule" element= {<GetAppointmentsView />}/>
        <Route path="/turnos" element= {<MisTurnosView />}/>
        <Route path="/profile" element= {<ProfileView />}/>
        <Route path="/about" element= {<AboutUsView />}/>
        <Route path="/contact" element= {<ContactView />}/>
        <Route path="/users" element= {<UsersView />}/>
        <Route path="*" element= {<NotFoundView />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
