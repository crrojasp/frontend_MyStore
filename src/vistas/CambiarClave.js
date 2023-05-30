import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const CambiarClave = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-purple-700">
            <div className="bg-white border rounded-lg shadow-lg p-8 max-w-xs w-full">
                <img className="w-28 mb-6" src={logo} alt="Logo" />
                <h2 className="text-2xl font-bold mb-6">Cambiar contraseña</h2>
                <form className="space-y-4">
                    <label className="block">
                        <span className="text-gray-700">Contraseña anterior</span>
                        <input
                            type="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Nueva contraseña</span>
                        <input
                            type="password"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800"
                    >
                        Cambiar contraseña
                    </button>
                </form>
            </div>
            <div className="mt-4">
                <Link
                    to="/ingreso"
                    className="text-white hover:text-gray-300 font-medium"
                >
                    Volver al inicio de sesión
                </Link>
            </div>
        </div>
    );
};

export default CambiarClave;