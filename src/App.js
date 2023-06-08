import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import CambiarClave from './vistas/CambiarClave';
import Carrito from './vistas/Carrito';
import CreacionTienda from './vistas/CreacionTienda';
import CrearProducto from './vistas/crearproducto';
import Header from './partes/Header';
import HeaderComprador from './partes/HeaderComprador';
import HeaderVendedor from './partes/HeaderVendedor';
import Ingreso from './vistas/Ingreso';
import Legal from './vistas/Legal';
import PantallaComprador from './vistas/PantallaComprador';
import PantallaInicio from './vistas/PantallaInicio';
import PantallaVendedor from './vistas/PantallaVendedor';
import Perfil from './vistas/Perfil';
import PQRSPage from './vistas/PQRSPage';
import Preguntas from './vistas/Preguntas';
import Productos from './vistas/Productos';
import Registro from './vistas/Registro';
import RegistroComprador from './vistas/RegistroComprador';
import RegistroVendedor from './vistas/RegistroVendedor';
import RusticoTemplate from './vistas/RusticoTemplate';
import Somos from './vistas/Somos';
import TecnologicoTemplate from './vistas/TecnologicoTemplate';
import VistaProducto from './vistas/VistaProducto';

import './App.css';
import { UserProvider } from './UserContext';

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
          <UserProvider>
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
              <Route path="/PantallaInicio" element={<PantallaInicio isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/crearproducto" element={<CrearProducto />} />
              <Route path="/PQRSpage" element={<PQRSPage />} />
              <Route path="/CreacionTienda" element={<CreacionTienda />} />
              <Route path="/PulidoTemplate" element={<PulidoTemplate />} />
              <Route path="/RusticoTemplate" element={<RusticoTemplate />} />
              <Route path="/TecnologicoTemplate" element={<TecnologicoTemplate />} />
              <Route path="/VistaProducto" element={<VistaProducto />} />
              <Route path="/Perfil" element={<Perfil />} />
              <Route path="/PantallaComprador" element={<PantallaComprador />} />
              <Route path="/PantallaVendedor" element={<PantallaVendedor />} />
              <Route path="/Somos" element={<Somos />} />
              <Route path="/Preguntas" element={<Preguntas />} />
              <Route path="/Planes" element={<Planes />} />
            </Routes>
          </UserProvider>
        </Router>
    );
}

export default App;
