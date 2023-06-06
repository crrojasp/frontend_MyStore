import React, { useState } from "react";
import axios from "axios";
const CrearProducto = () => {
    const [producto, setProducto] = useState({ nombre: "", descripcion: "", precio: "", ilustracion: null, });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === "file" ? event.target.files[0] : event.target.value;
        setProducto({ ...producto, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("nombre", producto.nombre);
        data.append("descripcion", producto.descripcion);
        data.append("precio", producto.precio);
        data.append("ilustracion", producto.ilustracion);
        console.log(data);
        for (let [key, value] of data.entries()) {
            console.log(key, value);
        }
        try {
            await axios.post("http://143.198.78.159/producto/", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
                
            });
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100" >
            <div className="bg-white border rounded-lg shadow-lg p-25 max-w-xs w-full">
                <h1 className="text-2xl font-bold mb-6 justify-center">Crear Producto</h1>
                <form onSubmit={handleSubmit} className="bg-purple-300 space-y-6">
                    <label> Nombre: <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} /> </label>
                    <label> Descripción: <textarea name="descripcion" value={producto.descripcion} onChange={handleChange}></textarea> </label>
                    <label> Precio: <input type="number" name="precio" value={producto.precio} onChange={handleChange} /> </label>
                    <label> Ilustración: <input type="file" name="ilustracion" onChange={handleChange} /> </label>
                    <button type="submit"> Crear Producto </button>
                </form>
            </div>
        </div>
    );
};
export default CrearProducto;