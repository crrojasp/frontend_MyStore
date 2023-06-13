import './../Estilos/Detalle.css';
import React, { useContext } from 'react'
import 'boxicons';
import { CarritoContext } from '../CarritoContext';
import Producto from '../vistas/Producto';

const Carrito = () => {

    const [carrito, setCarrito] = useContext(CarritoContext);

    const quantity = carrito.reduce((acc, curr) => {
        return acc + curr.quantity;
    } , 0);

    const PrecioTotal = carrito.reduce((acc, curr) => acc + curr.quantity * curr.precio , 0);

    return (
        <>
            <div className='cart-container'>
                <div className="cart-count">
                    <p>Productos en el carro: {quantity} </p>
                    <p>Total: ${PrecioTotal}</p>
                    <button onClick={() => console.log(carrito)}>Checkout</button>
                </div>
                {carrito && carrito.length > 0 ? (
                        carrito.map((producto) => <Producto {...producto} ilustracion={producto.img} key={producto.id}/>
                            
                            /*
                            <div key={producto.id} className="producto">
                                <img className="imagen" src={`data:image/jpeg;base64,${producto.img}`} alt="imagen del producto" style={{ width: '70%', height: '70%' }} />
                                <h2 className="nombre">{producto.nombre}</h2>
                                <p className="precio">{producto.precio}</p>
                            </div>
                            */
                        )
                    ) : (
                        <p>Cargando los productos...</p>
                    )}
            </div>
        </>
    );
};

export default Carrito;