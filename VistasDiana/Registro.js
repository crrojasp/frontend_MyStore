import { useState } from "react";
import axios from 'axios';
import './../Estilos/Registro.css';
import { Link } from "react-router-dom";

const Registro = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg h-screen">
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