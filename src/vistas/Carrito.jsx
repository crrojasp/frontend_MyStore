import React, { useContext } from 'react'
import 'boxicons';
import { CarritoContext } from '../CarritoContext';

const Carrito = () => {

    const [carrito, setCarrito] = useContext(CarritoContext);

    const quantity = carrito.reduce((acc, curr) => {
        return acc + curr.quantity;
    } , 0);

    const PrecioTotal = carrito.reduce((acc, curr) => acc + curr.quantity * curr.precio , 0);

    return (
        <div className='cart-container'>
            <h1>Productos en el carro: {quantity} </h1>
            <h2>Total: ${PrecioTotal}</h2>
            <button onClick={() => console.log(carrito)}>Checkout</button>
            {carrito && carrito.length > 0 ? (
                    carrito.map((producto) => {
                        <img className="imagen-producto" src={`data:image/jpeg;base64,${producto.img}`} alt="imagen del producto"/>
                    })
                ) : (
                    <p>Cargando los productos...</p>
            )}
        </div>
    );
};

export default Carrito;