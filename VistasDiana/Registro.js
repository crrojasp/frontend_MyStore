import { useState } from "react";
import axios from 'axios';
import './../Estilos/Registro.css';
import { Link } from "react-router-dom";

const Registro = () => {
    return (
        
        <div className="contRegistro">
            <label className="Bienvenido">
            Bienvenido a MyStore, elija por favor la opción que desee:
            </label>
            <div className="container">

                <Link to="/RegistroComprador" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Comprador
                </Link><br></br>
                <Link to="/RegistroVendedor" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Vendedor
                </Link>

            </div>
        </div>  
    );
};

export default Registro;