import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Registro from '../components/Registro';
import Perfil from '../components/Perfil';
import Home from '../components/Home';
import LoginWithGoogle from '../components/LoginGoogle';
import Mensajes from '../components/Mensajes';
import Grupos from '../components/Grupos';
import Agregar from '../components/Agregar';


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={< Login />} />
                <Route path="/loginGoogle" element={< LoginWithGoogle />} />
                <Route path="/register" element={<Registro />} />
                <Route path="/perfil" element={< Perfil />} />
                <Route path="/Mensajes" element={< Mensajes />} />
                <Route path="/Grupos" element={< Grupos />} />
                <Route path="/Agregar" element={< Agregar />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;