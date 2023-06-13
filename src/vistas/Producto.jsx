import React, { useContext } from 'react'
import './../Estilos/Galeria.css';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../CarritoContext';
import { DeseadosContext } from '../DeseadosContext';

const Producto = ({id,ilustracion,precio,nombre}) => {

    const [carrito,setCarrito] = useContext(CarritoContext)
    const [deseado,setDeseado] = useContext(DeseadosContext)    

    const addTocart  = () => {
        setCarrito((currProducts) =>{
            const isProductsFound = currProducts.find((product) => product.id === id);
            if(isProductsFound){
                return currProducts.map((product) => {
                    if(product.id === id){
                        return{...product, quantity: product.quantity + 1 };
                    }else {
                        return product;
                    }
                })
            }else {
                return [...currProducts, {id , quantity: 1, precio: precio , nombre: nombre , img: ilustracion}]
            }
        }, nombre, ilustracion)
    }

    const removeProduct = (id) =>{
        setCarrito((currProducts) => {
            if(currProducts.find((product) => product.id === id)?.quantity === 1){
                return currProducts.filter((product) => product.id !== id);
            }else{
                return currProducts.map((product) => {
                    if(product.id === id){
                        return {...product, quantity: product.quantity - 1}
                    }else {
                        return product;
                    }
                })
            }
        })
    }

    const saveProduct = () => {
        setDeseado((currProducts) => {
            const isProductsFound = currProducts.find((product) => product.id === id);
            if (isProductsFound) {
                return currProducts.map((product) => {
                    if (product.id === id) {
                        return { ...product, quantity: product.quantity + 1 };
                    } else {
                        return product;
                    }
                })
            } else {
                return [...currProducts, { id, quantity: 1, precio: precio, nombre: nombre, img: ilustracion }]
            }
        }, nombre, ilustracion)
    }

    const removeSaveProduct = (id) => {
        setDeseado((currProducts) => {
            if (currProducts.find((product) => product.id === id)?.quantity === 1) {
                return currProducts.filter((product) => product.id !== id);
            } else {
                return currProducts.map((product) => {
                    if (product.id === id) {
                        return { ...product, quantity: product.quantity - 1 }
                    } else {
                        return product;
                    }
                })
            }
        })
    }

    const getQuantityById = (id) => {
        return carrito.find((product) => product.id === id)?.quantity || 0;
    }

    const quantityPerProduct = getQuantityById(id);

    const getQuantityByIdDeseados = (id) => {
        return carrito.find((product) => product.id === id)?.quantity || 0;
    }

    const quantityPerProductDeseados = getQuantityByIdDeseados(id);

  return (
            <div key={id} className="card-producto">
                {
                    quantityPerProduct > 0 && (
                        <div className='product-quantity'>{quantityPerProduct}</div>
                    )
                }
                <Link to={`/detalleproducto/${id}`}>
                    <img className="imagen-producto" src={`data:image/jpeg;base64,${ilustracion}`} alt="imagen del producto"/>
                </Link>
                <div className="footer_producto">
                    <h1 className="nombre-producto">{nombre}</h1>
                    <p className="precio-producto">{`PRECIO: $${precio}`}</p>       
                </div>
                <div className="boton_carrito">
                    {
                        quantityPerProduct === 0 ? (                       
                            <button className='btn_carrito' onClick={() => addTocart()}>Añadir al carrito</button>
                        ): (
                            <button className='btn_carrito_mas' onClick={() => addTocart()}>Añadir Mas</button>
                        )
                    }
                    {
                        quantityPerProduct > 0 && (
                            <button className='btn_carrito_menos' onClick={() => removeProduct(id)}>Remover</button>
                        )
                    }
                </div>
                <div className="btn-deseados">
                    <i class="bi bi-bookmark-star" onClick={() => saveProduct()}></i>
                </div>
            </div>
  )
}

export default Producto;