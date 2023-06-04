import { useState, useEffect } from "react";
import axios from 'axios';
function Test(){

    const [productos,setProductos] = useState([])

    const obtener_productos = async () => {
        try {
            const response = await axios.get('http://164.92.76.182/productos');
            setProductos(response.data.productos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        obtener_productos();
    }, []);

    /*
    useEffect(()=>{
        const getProductos = async() =>{
            const response = await axios.get('http://164.92.76.182/productos');
            const listaProductos = response.data
            const { productos } = listaProductos
            
            const products = productos.map(producto => {
                return {
                    id: producto.id,
                    nombre : producto.nombre,
                    descripcion : producto.descripcion,
                    precio : producto.precio,
                    img : producto.ilustracion
                }
            })
            setProductos(products)
        }
        getProductos()
    },[])
    */
    return(
        <div>
            <h1>Hola mundo</h1>
            {
                productos.map(producto => {
                    return (
                        <div> 
                            <img src={`data:image/jpeg;base64,${producto.ilustracion}`} alt={producto.nombre} style={{ width: '70%', height: '70%' }} />
                            <p>{producto.nombre}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default Test;