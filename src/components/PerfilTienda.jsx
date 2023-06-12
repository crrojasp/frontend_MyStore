import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PerfilTienda = () => {
    const { id_tienda } = useParams(); // Obtener el ID de la tienda desde la URL
    const [tienda, setTienda] = useState(null); // Estado para almacenar los datos de la tienda
    useEffect(() => {
        const fetchTienda = async () => {
            try {
                const response = await fetch(`/tienda/${id_tienda}`);
                const data = await response.json();
                setTienda(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTienda();
    }, [id_tienda]);
    if (!tienda) {
        return <div>Cargando...</div>;
    }
    const { id, nombre, direccion, id_vendedor, productos } = tienda;

    return (
        <div>
            <h1>Perfil de la Tienda</h1>
            <p>ID de la tienda: {id}</p>
            <p>Nombre: {nombre}</p>
            <p>Dirección: {direccion}</p>
            <p>ID del vendedor: {id_vendedor}</p>
            <p>Productos: {productos}</p>
        </div>
    );
};

export default PerfilTienda;
