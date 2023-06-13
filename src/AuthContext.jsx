import React, { createContext, useState } from 'react';

// Crea el contexto
const AuthContext = createContext();

// Crea el proveedor del contexto
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    // Función para iniciar sesión
    const login = (data) => {
        setIsLoggedIn(true);
        setUserData(data);
    };

    // Función para cerrar sesión
    const logout = () => {
        setIsLoggedIn(false);
        setUserData(null);
    };

    // Proporciona el contexto y las funciones a los componentes hijos
    return (
        <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
