import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Registro from '../components/Registro';
import Perfil from '../components/Perfil';
import Home from '../components/Home';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={<Registro />} />´
                <Route path="/perfil" element={< Perfil />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;