import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import CambiarClave from './components/CambiarClave';
import Carrito from './components/Carrito';
import { CarritoProvider } from './CarritoContext';
import CreacionTienda from './components/CreacionTienda';
import CrearProducto from './components/crearproducto';
import DetalleProducto from './components/DetalleProducto';
import RusticoTemplate from './components/RusticoTemplate';
import PulidoTemplate from './components/PulidoTemplate';
import TecnologicoTemplate from './components/TecnologicoTemplate';
import Header from './partes/Header';
import Footer from './partes/Footer';
import HeaderComprador from './partes/HeaderComprador';
import HeaderVendedor from './partes/HeaderVendedor';
import Ingreso from './components/Ingreso';
import Legal from './components/Legal';
import PantallaComprador from './components/PantallaComprador';
import PantallaInicio from './components/PantallaInicio';
import PantallaVendedor from './components/PantallaVendedor';
import Perfil from './components/Perfil';
import PQRSPage from './components/PQRSPage';
import Planes from './components/Planes';
import Preguntas from './components/Preguntas';
import Productos from './components/Productos';
import Registro from './components/Registro';
import RegistroComprador from './components/RegistroComprador';
import RegistroVendedor from './components/RegistroVendedor';
import Somos from './components/Somos';
import { VistaProducto } from './components/VistaProducto';
import './App.css'

import './App.css';
import { UserContext, UserProvider } from './UserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showIngreso, setShowIngreso] = useState(false);
  const [UserData, setUserData] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    Navigate('/');
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ThemeProvider value={darkMode}>
        <CarritoProvider>
          <UserProvider>
            <div className={`App ${darkMode ? 'dark' : 'light'}`}>
              <button className="floating-button" onClick={toggleDarkMode}>
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
              </button>
              <Header
                isLoggedIn={isLoggedIn}
                setShowIngreso={setShowIngreso}
                showIngreso={showIngreso}
                handleLogout={handleLogout}
                darkMode = {darkMode}
              />
              <main className='flex justify-center'>
                <Routes>
                  <Route
                    path="/ingreso"
                    element={
                      <Ingreso
                        setIsLoggedIn={setIsLoggedIn}
                        setShowIngreso={setShowIngreso}
                        showIngreso={showIngreso}
                        setUserData={setUserData}
                        darkMode = {darkMode}
                      />
                    }
                  />
                  <Route path="/Somos" element={<Somos />} />
                  <Route path="/Planes" element={<Planes />} />
                  <Route path="/selector" element={<Registro />} />
                  <Route path="/RegistroVendedor" element={<RegistroVendedor />} />
                  <Route path="/RegistroComprador" element={<RegistroComprador />} />
                  <Route path="/cambiarClave" element={<CambiarClave isLoggedIn={isLoggedIn} />} />
                  <Route path="/" element={<PantallaInicio darkMode={darkMode} />} />
                  <Route path="/crearproducto" element={<CrearProducto />} />
                  <Route path="/PQRSpage" element={<PQRSPage />} />
                  <Route path="/CreacionTienda" element={<CreacionTienda />} />
                  <Route path="/PulidoTemplate" element={<PulidoTemplate />} />
                  <Route path="/RusticoTemplate" element={<RusticoTemplate />} />
                  <Route path="/TecnologicoTemplate" element={<TecnologicoTemplate />} />
                  <Route path="/VistaProducto" element={<VistaProducto />} />
                  <Route path='/Perfil' element={<Perfil />} />
                  <Route path='/PantallaComprador' element={<PantallaComprador />} />
                  <Route path='/PantallaVendedor' element={<PantallaVendedor />} />
                  <Route path="/Somos" element={<Somos />} />
                  <Route path="/cambiarClave" element={<CambiarClave isLoggedIn={isLoggedIn} />} />
                  <Route path="/Preguntas" element={<Preguntas />} />
                  <Route path="/crearproducto" element={<CrearProducto />} />
                  <Route path="/carrito" element={<Carrito />} />
                  <Route path="/detalleproducto/:id" element={<DetalleProducto />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </UserProvider>
        </CarritoProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
