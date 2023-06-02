import { useState } from "react";
import axios from 'axios';
import './../Estilos/Registro.css';
import { Link } from "react-router-dom";

const Registro = () => {
    const [hoveredComprador, setHoveredComprador] = useState(false);
    const [hoveredVendedor, setHoveredVendedor] = useState(false);

    const handleMouseEnterComprador = () => {
        setHoveredComprador(true);
    };

    const handleMouseLeaveComprador = () => {
        setHoveredComprador(false);
    };

    const handleMouseEnterVendedor = () => {
        setHoveredVendedor(true);
    };

    const handleMouseLeaveVendedor = () => {
        setHoveredVendedor(false);
    };

    return (
        <div className="h-screen flex items-center justify-center bg-white">
            <div className="flex space-x-10 mx-4">
                <Link
                    to="/RegistroComprador"
                    onMouseEnter={handleMouseEnterComprador}
                    onMouseLeave={handleMouseLeaveComprador}
                    className={`${hoveredComprador ? "bg-purple-700 transform hover:scale-105" : "bg-purple-500 transform hover:scale-100"
                        } hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300`}
                >
                    <span className="text-lg">Comprador</span>
                </Link>
                <Link
                    to="/RegistroVendedor"
                    onMouseEnter={handleMouseEnterVendedor}
                    onMouseLeave={handleMouseLeaveVendedor}
                    className={`${hoveredVendedor ? "bg-purple-700 transform hover:scale-105" : "bg-purple-500 transform hover:scale-100"
                        } hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300`}
                >
                    <span className="text-lg">Vendedor</span>
                </Link>
            </div>
        </div>
    );
};

export default Registro;
