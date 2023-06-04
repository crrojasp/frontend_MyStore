import React, { useState } from "react";
import axios from "axios";
import "./../Estilos/CrearProducto.css";

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
            await axios.post("http://localhost:8888/producto/", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }

            });
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <div className="container">
            <div className="form">
                <h1 className="title">Crear Producto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Nombre:</label>
                        <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Descripción:</label>
                        <textarea name="descripcion" value={producto.descripcion} onChange={handleChange}></textarea>
                    </div>
                    <div className="input-group">
                        <label>Precio:</label>
                        <input type="number" name="precio" value={producto.precio} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Ilustración:</label>
                        <input type="file" name="ilustracion" onChange={handleChange} />
                    </div>
                    {producto.ilustracion && (
                        <div className="preview">
                            <img src={URL.createObjectURL(producto.ilustracion)} alt="Preview" />
                        </div>
                    )}
                    <button type="submit" className="submit-button">Crear Producto</button>
                </form>
            </div>
        </div>
    );

};
export default CrearProducto;