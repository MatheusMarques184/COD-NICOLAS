import Header from './components/ui/header/header';
import Footer from './components/ui/footer/footer';
import Home from './pages/home/home';
import Perfil from '../src/pages/login/login';
import PerfilLog from '../src/pages/profile/profile';
import ReactDOM from 'react-dom/client';
import FaleConosco from './pages/faleconosco/faleconosco';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../src/pages/register/register';
import EditProfile from './pages/profile/editProfile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/fale-conosco"
        element={
          <>
            <Header />
            <FaleConosco />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Perfil />} />
      <Route
        path="/perfil"
        element={
          <>
            <Header />
            <PerfilLog />
            <Footer />
          </>
        }
      />
      <Route path="/perfil/editar" element={<EditProfile />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
