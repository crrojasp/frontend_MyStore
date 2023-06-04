import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../Estilos/RusticoTemplate.css';

const RusticoTemplate = ({ name, logo, products }) => {
    const [productos, setProductos] = useState([]);
    const [rating, setRating] = useState(5);
    const [reviews, setReviews] = useState([]);

    const obtenerProductos = async () => {
        try {
            const response = await axios.get('http://localhost:8888/productos');
            setProductos(response.data.productos);
        } catch (error) {
            console.error(error);
        }
    };

    const obtenerReseñas = async () => {
        setReviews(5);
        // try {
        //     const response = await axios.get('http://localhost:8888/resenas');
        //     setReviews(response.data.resenas);
        // } catch (error) {
        //     console.error(error);
        // }
    };

    useEffect(() => {
        obtenerProductos();
        obtenerReseñas();
    }, []);

    const handleClick = (producto) => {
        // Aquí puedes mostrar una vista previa a pantalla completa de la imagen del producto
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="rustico-template">
            <header className="rustico-template__header">
                <h1>{name || 'MyStore Name'}</h1>
            </header>

            <div className="rustico-template__product-list">
                <div className="rustico-template__product-grid">
                    {productos && productos.length > 0 ? (
                        productos.map((producto) => (
                            <div key={producto.id} className="rustico-template__product" onClick={() => handleClick(producto)}>
                                <img
                                    className="rustico-template__product-image"
                                    src={`data:image/jpeg;base64,${producto.ilustracion}`}
                                    alt="Imagen del producto"
                                />
                                <h2 className="rustico-template__product-name">{producto.nombre}</h2>
                                <p className="rustico-template__product-price">${producto.precio}</p>
                            </div>
                        ))
                    ) : (
                        <p>Cargando productos...</p>
                    )}
                </div>
            </div>

            <div className="rustico-template__sidebar">
                <div className="rustico-template__reviews">
                    <h2>Reseñas</h2>

                    <div className="rustico-template__review-list">
                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <div key={review.id} className="rustico-template__review">
                                    <p>{review.comment}</p>
                                    <p>Por: {review.author}</p>
                                </div>
                            ))
                        ) : (
                            <p>No hay reseñas disponibles</p>
                        )}
                    </div>
                </div>

                <div className="rustico-template__rating">
                    <h2>Valoración</h2>
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`rustico-template__star ${index < rating ? 'rustico-template__star--filled' : ''}`}
                            onClick={() => handleRatingChange(index + 1)}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
            </div>

            <footer className="rustico-template__footer">
                <h2>Footer del estilo</h2>
            </footer>
        </div>
    );
};

export default RusticoTemplate;
