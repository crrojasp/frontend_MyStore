import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Perfil = () => {
    const userData = useContext(UserContext);

    // Verifica si el usuario ha iniciado sesión
    if (!userData) {
        return <p>No se ha iniciado sesión</p>;
    }

    // Extrae los datos del objeto de usuario
    const { id, name, email, tipo } = userData;

    return (
        <div>
            <h1>Perfil de usuario</h1>
            <p>ID: {id}</p>
            <p>Nombre: {name}</p>
            <p>Email: {email}</p>
            <p>Tipo: {tipo}</p>
            {/* Resto de la información del perfil */}
        </div>
    );
};

export default Perfil;