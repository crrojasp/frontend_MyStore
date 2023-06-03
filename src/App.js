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
import VistaProducto from './vistas/VistaProducto';
import Test from './vistas/Test';
import './App.css'


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
                <Route path="/cambiarClave" element={<CambiarClave isLoggedIn={isLoggedIn} />} />
                <Route
                    path="/*"
                    element={<PantallaInicio isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/crearproducto" element={<CrearProducto />} />
                <Route path='/VistaProducto' element={<VistaProducto/>} />
                <Route path='/Test' element={<Test/>} />

            </Routes>
        </Router>
    );
}

export default App;