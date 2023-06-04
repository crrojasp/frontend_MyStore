import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUserData(null);
    };

    const getUserData = async () => {
        // Realiza una solicitud para obtener la información del usuario usando el token de autenticación
        try {
            const response = await fetch('URL_DE_API_PARA_OBTENER_INFORMACION_DEL_USUARIO', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error al obtener la información del usuario:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userData, login, logout, getUserData }}>
            {children}
        </AuthContext.Provider>
    );
};