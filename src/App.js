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
import PQRSPage from './vistas/PQRSPage';
import CreacionTienda from './vistas/CreacionTienda';
import PulidoTemplate from './vistas/PulidoTemplate';
import RusticoTemplate from './vistas/RusticoTemplate';
import TecnologicoTemplate from './vistas/TecnologicoTemplate';
import VistaProducto from './vistas/VistaProducto';
import HeaderComprador from './partes/HeaderComprador';
import Perfil from './vistas/Perfil';
import PantallaComprador from './vistas/PantallaComprador';
import PantallaVendedor from './vistas/PantallaVendedor';
import { UserProvider } from './UserContext';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showIngreso, setShowIngreso] = useState(false);
    const [userData, setUserData] = useState(null);
    const [userType, setUserType] = useState(null);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        setUserType(null);
        Navigate('/');
    };

    return (
        <Router>
            <UserProvider>
                {isLoggedIn && userType === 'vendedor' ? (
                    <Header
                        isLoggedIn={isLoggedIn}
                        setShowIngreso={setShowIngreso}
                        showIngreso={showIngreso}
                        handleLogout={handleLogout}
                    />
                ) : (
                    <HeaderComprador
                        isLoggedIn={isLoggedIn}
                        setShowIngreso={setShowIngreso}
                        showIngreso={showIngreso}
                        handleLogout={handleLogout}
                    />
                )}
                <Routes>
                    <Route
                        path="/ingreso"
                        element={
                            <Ingreso
                                setIsLoggedIn={setIsLoggedIn}
                                setShowIngreso={setShowIngreso}
                                showIngreso={showIngreso}
                                setUserData={setUserData}
                                setUserType={setUserType}
                            />
                        }
                    />
                    <Route path="/selector" element={<Registro />} />
                    <Route path="/RegistroVendedor" element={<RegistroVendedor />} />
                    <Route path="/RegistroComprador" element={<RegistroComprador />} />
                    <Route path="/cambiarClave" element={<CambiarClave isLoggedIn={isLoggedIn} />} />
                    <Route path="/*" element={<PantallaInicio isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/crearproducto" element={<CrearProducto />} />
                    <Route path="/PQRSpage" element={<PQRSPage />} />
                    <Route path="/CreacionTienda" element={<CreacionTienda />} />
                    <Route path="/PulidoTemplate" element={<PulidoTemplate />} />
                    <Route path="/RusticoTemplate" element={<RusticoTemplate />} />
                    <Route path="/TecnologicoTemplate" element={<TecnologicoTemplate />} />
                    <Route path="/VistaProducto" element={<VistaProducto />} />
                    <Route path='/Perfil' element={<Perfil/>}/>
                    <Route path='/PantallaComprador' element={<PantallaComprador/>}/>
                    <Route path='/PantallaVendedor' element={<PantallaVendedor/>}/>
                </Routes>
            </UserProvider>
        </Router>
    );
}

export default App;