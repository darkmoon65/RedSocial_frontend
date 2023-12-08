import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Registro from '../components/Registro';
import Perfil from '../components/Perfil';
import Home from '../components/Home';
import LoginWithGoogle from '../components/LoginGoogle';
import Mensajes from '../components/Mensajes';
import Grupos from '../components/Grupos';
import Agregar from '../components/Agregar';
import ProtectedRoute from '../components/ProtectRoute';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={< Login />} />
                <Route path="/loginGoogle" element={< LoginWithGoogle />} />
                <Route path="/register" element={<Registro />} />

                <Route exact path="/" element={<ProtectedRoute > <Home /> </ProtectedRoute>} />
                <Route path="/perfil" element={<ProtectedRoute > <Perfil /> </ProtectedRoute>} />
                <Route path="/mensajes" element={<ProtectedRoute > <Mensajes /> </ProtectedRoute>} />
                <Route path="/grupos" element={<ProtectedRoute > <Grupos /> </ProtectedRoute>} />
                <Route path="/agregar"  element={<ProtectedRoute > <Agregar /> </ProtectedRoute>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;