import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../Estilos/TecnologicoTemplate.css';

const TecnologicoTemplate = ({ name, logo, products }) => {
    const [productos, setProductos] = useState([]);
    const [rating, setRating] = useState(5);

    const obtenerProductos = async () => {
        try {
            const response = await axios.get('http://localhost:8888/productos');
            setProductos(response.data.productos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    const handleClick = (producto) => {
        // Aquí puedes mostrar una vista previa a pantalla completa de la imagen del producto
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="tecnologico-template">
            <header className="tecnologico-template__header">
                <h1>{name || 'MyStore'}</h1>
            </header>
            <main className="tecnologico-template__main">
                <br></br>
                <img src={logo || '/logo.png'} alt="Logo" className="tecnologico-template__logo" />
                <br></br>
                <div className="tecnologico-template__reviews">
                    <h2>Reseñas</h2>
                    <div className="tecnologico-template__review-list">
                        {/* Aquí puedes mostrar las reseñas */}
                    </div>
                    <h2>Calificación de estrellas</h2>
                    <div className="tecnologico-template__rating">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`tecnologico-template__star ${index < rating ? 'tecnologico-template__star--filled' : ''}`}
                                onClick={() => handleRatingChange(index + 1)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                </div>
                <div className="tecnologico-template__products">
                    <div className="tecnologico-template__product-grid">
                        {productos && productos.length > 0 ? (
                            productos.map((producto) => (
                                <div key={producto.id} className="tecnologico-template__product" onClick={() => handleClick(producto)}>
                                    <img
                                        className="tecnologico-template__product-image"
                                        src={`data:image/jpeg;base64,${producto.ilustracion}`}
                                        alt="Imagen del producto"
                                    />
                                    <h2 className="tecnologico-template__product-name">{producto.nombre}</h2>
                                    <p className="tecnologico-template__product-price">${producto.precio}</p>
                                </div>
                            ))
                        ) : (
                            <p>Cargando productos...</p>
                        )}
                    </div>
                </div>
            </main>

            <footer className="tecnologico-template__footer">
                <h2>Sobre nosotros</h2>
            </footer>
        </div>
    );
};

export default TecnologicoTemplate;