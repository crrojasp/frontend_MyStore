import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PantallaInicio from './vistas/PantallaInicio';
import Ingreso from './vistas/Ingreso';
import Registro from './vistas/Registro';
import CambiarClave from './vistas/CambiarClave';
import CrearProducto from './vistas/crearproducto';
import Header from './partes/Header';
import RegistroComprador from './vistas/RegistroComprador';
import RegistroVendedor from './vistas/RegistroVendedor';
import Somos from './vistas/Somos';
import Planes from './vistas/Planes';
import Preguntas from './vistas/Preguntas';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showIngreso, setShowIngreso] = useState(false);
    const [UserData, setUserData] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        Navigate('/');
    };

    return (
        <Router>
            <Header
                isLoggedIn={isLoggedIn}
                setShowIngreso={setShowIngreso}
                showIngreso={showIngreso}
                handleLogout={handleLogout}
            />
            <Routes>
                <Route
                    path="/ingreso"
                    element={
                        <Ingreso
                            setIsLoggedIn={setIsLoggedIn}
                            setShowIngreso={setShowIngreso}
                            showIngreso={showIngreso}
                            setUserData={setUserData}
                        />
                    }
                />
                <Route path="/selector" element={<Registro />} />
                <Route path="/RegistroVendedor" element={<RegistroVendedor />} />
                <Route path="/RegistroComprador" element={<RegistroComprador />} />
                <Route path="/Somos" element={<Somos />}/>
                <Route path="/cambiarClave" element={<CambiarClave isLoggedIn={isLoggedIn} />} />
                <Route path="/Preguntas" element={<Preguntas />} />
                <Route path="/Planes" element={<Planes />} />

                <Route
                    path="/*"
                    element={<PantallaInicio isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/crearproducto" element={<CrearProducto />} />

            </Routes>
        </Router>
    );
}

export default App;