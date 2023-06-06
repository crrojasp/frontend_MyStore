import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../Estilos/PulidoTemplate.css';

const PulidoTemplate = ({ name = "MyStore", logo = "/logo.png", products }) => {
    const [productos, setProductos] = useState([]);
    const [rating, setRating] = useState(5);

    const obtenerProductos = async () => {
        try {
            const response = await axios.get('http://143.198.78.159/productos');
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
        <div className="pulido-template">
            <header className="pulido-template__header">
                <h1>{name}</h1>
            </header>

            <main className="pulido-template__main">
                <div className="pulido-template__reviews">
                    <h2>Reseñas</h2>

                    <div className="pulido-template__review-list">
                        {/* Aquí puedes mostrar las reseñas */}
                    </div>
                    <h2>Calificación de estrellas</h2>
                    <div className="pulido-template__rating">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`pulido-template__star ${index < rating ? 'pulido-template__star--filled' : ''}`}
                                onClick={() => handleRatingChange(index + 1)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pulido-template__products">
                    <h1>{name}</h1>
                    <img src={logo} alt="Logo" className="pulido-template__logo" />
                    <div className="pulido-template__product-grid">
                        {productos && productos.length > 0 ? (
                            productos.map((producto) => (
                                <div key={producto.id} className="pulido-template__product" onClick={() => handleClick(producto)}>
                                    <img
                                        className="pulido-template__product-image"
                                        src={`data:image/jpeg;base64,${producto.ilustracion}`}
                                        alt="Imagen del producto"
                                    />
                                    <h2 className="pulido-template__product-name">{producto.nombre}</h2>
                                    <p className="pulido-template__product-price">${producto.precio}</p>
                                </div>
                            ))
                        ) : (
                            <p>Cargando productos...</p>
                        )}
                    </div>
                </div>
            </main>

            <footer className="pulido-template__footer">
                <h2>Sobre nosotros</h2>
            </footer>
        </div>
    );
};

export default PulidoTemplate;