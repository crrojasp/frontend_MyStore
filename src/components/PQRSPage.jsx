import React, { useState } from 'react';
import './../Estilos/PQRSPage.css';

const PQRSPage = () => {
    const [selectedOption, setSelectedOption] = useState('Queja');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleInputChange = (e) => {
        setQuejaData({
            ...quejaData,
            [e.target.name]: e.target.value,
        });
    };

    // Estado para el formulario de Queja
    const [quejaData, setQuejaData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    // Estado para el formulario de Reclamo
    const [reclamoData, setReclamoData] = useState({
        nombre: '',
        email: '',
        detallesReclamo: '',
    });

    // Estado para el formulario de Petición
    const [peticionData, setPeticionData] = useState({
        nombre: '',
        email: '',
        detallesPeticion: '',
    });

    // Estado para el formulario de Sugerencia
    const [sugerenciaData, setSugerenciaData] = useState({
        nombre: '',
        email: '',
        sugerencia: '',
    });

    // Función para manejar los cambios en el formulario de Queja
    const handleQuejaInputChange = (e) => {
        setQuejaData({ ...quejaData, [e.target.name]: e.target.value });
    };

    // Función para manejar los cambios en el formulario de Reclamo
    const handleReclamoInputChange = (e) => {
        setReclamoData({ ...reclamoData, [e.target.name]: e.target.value });
    };

    // Función para manejar los cambios en el formulario de Petición
    const handlePeticionInputChange = (e) => {
        setPeticionData({ ...peticionData, [e.target.name]: e.target.value });
    };

    // Función para manejar los cambios en el formulario de Sugerencia
    const handleSugerenciaInputChange = (e) => {
        setSugerenciaData({ ...sugerenciaData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la acción específica para cada formulario (Queja, Petición, Reclamo, Sugerencia)
        switch (selectedOption) {
            case 'Queja':
                // Acción para el formulario de Queja
                console.log('Enviar queja:', quejaData);
                break;
            case 'Petición':
                // Acción para el formulario de Petición
                console.log('Enviar petición:', peticionData);
                break;
            case 'Reclamo':
                // Acción para el formulario de Reclamo
                console.log('Enviar reclamo:', reclamoData);
                break;
            case 'Sugerencia':
                // Acción para el formulario de Sugerencia
                console.log('Enviar sugerencia:', sugerenciaData);
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <div className="flex justify-center space-x-20">
                <br></br>
                <br></br>
                <button
                    className={`option-button ${selectedOption === 'Queja' ? 'selected' : ''}`}
                    onClick={() => handleOptionChange('Queja')}
                >
                    Queja
                </button>
                <button
                    className={`option-button ${selectedOption === 'Petición' ? 'selected' : ''}`}
                    onClick={() => handleOptionChange('Petición')}
                >
                    Petición
                </button>
                <button
                    className={`option-button ${selectedOption === 'Reclamo' ? 'selected' : ''}`}
                    onClick={() => handleOptionChange('Reclamo')}
                >
                    Reclamo
                </button>
                <button
                    className={`option-button ${selectedOption === 'Sugerencia' ? 'selected' : ''}`}
                    onClick={() => handleOptionChange('Sugerencia')}
                >
                    Sugerencia
                </button>
            </div>
            <div>
                {selectedOption === 'Queja' && (
                    <div>
                        <br></br>
                        <br></br>
                        <h2 className="text-3xl text-purple-800 font-bold mb-4 text-center">Formulario de Queja</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
                            <div className="flex flex-col mx-auto">
                                <div className="flex space-x-10 mx-auto">
                                    <div className="w-1/2">
                                        <div className="form-container mx-auto p-4 bg-white rounded shadow">
                                            <label htmlFor="nombre" className="block mb-2">
                                                Nombre:
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Ingrese su nombre"
                                                value={quejaData.nombre}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="form-container mx-auto p-4 bg-white rounded shadow">
                                            <label htmlFor="email" className="block mb-2">
                                                Correo electrónico:
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Ingrese su correo electrónico"
                                                value={quejaData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 flex justify-center">
                                    <div className="form-container mx-auto max-w-md p-4 bg-white rounded shadow">
                                        <label htmlFor="mensaje" className="block mb-2">
                                            Mensaje:
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            placeholder="Ingrese su mensaje de queja"
                                            value={quejaData.mensaje}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-5">
                                    <button
                                        className="btn-submit bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse"
                                        type="submit"
                                    >
                                        Enviar Queja
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {selectedOption === 'Petición' && (
                    <div>
                        <br></br>
                        <br></br>
                        <h2 className="text-3xl text-purple-800 font-bold mb-4 text-center">Formulario de Petición</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
                            <div className="flex flex-col mx-auto">
                                <div className="flex space-x-10 mx-auto">
                                    <div className="w-1/2">
                                        <div className="form-container mx-auto p-4 bg-white rounded shadow">
                                            <label htmlFor="nombre" className="block mb-2">
                                                Nombre:
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Ingrese su nombre"
                                                value={peticionData.nombre}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="form-container mx-auto p-4 bg-white rounded shadow">
                                            <label htmlFor="email" className="block mb-2">
                                                Correo electrónico:
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Ingrese su correo electrónico"
                                                value={peticionData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 flex justify-center">
                                    <div className="form-container mx-auto max-w-md p-4 bg-white rounded shadow">
                                        <label htmlFor="mensaje" className="block mb-2">
                                            Mensaje:
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            placeholder="Ingrese su mensaje de petición"
                                            value={peticionData.mensaje}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-5">
                                    <button
                                        className="btn-submit bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse"
                                        type="submit"
                                    >
                                        Enviar Petición
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {selectedOption === 'Reclamo' && (
                    <div>
                        <br></br>
                        <br></br>
                        <h2 className="text-3xl text-purple-800 font-bold mb-4 text-center">Formulario de Reclamo</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
                            <div className="flex flex-col mx-auto">
                                <div className="flex space-x-10 mx-auto">
                                    <div className="w-1/2">
                                        <div className="form-container mx-auto p-4 bg-white rounded shadow">
                                            <label htmlFor="nombre" className="block mb-2">
                                                Nombre:
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Ingrese su nombre"
                                                value={reclamoData.nombre}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="form-container mx-auto p-4 bg-white rounded shadow">
                                            <label htmlFor="email" className="block mb-2">
                                                Correo electrónico:
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Ingrese su correo electrónico"
                                                value={reclamoData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 flex justify-center">
                                    <div className="form-container mx-auto max-w-md p-4 bg-white rounded shadow">
                                        <label htmlFor="detalles" className="block mb-2">
                                            Detalles de la reclamación:
                                        </label>
                                        <textarea
                                            id="detalles"
                                            name="detalles"
                                            placeholder="Ingrese los detalles de su reclamación"
                                            value={reclamoData.detalles}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-5">
                                    <button
                                        className="btn-submit bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse"
                                        type="submit"
                                    >
                                        Enviar Reclamo
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {selectedOption === 'Sugerencia' && (
                    <div>
                        <br></br>
                        <br></br>
                        <h2 className="text-3xl text-purple-800 font-bold mb-4 text-center">Formulario de Sugerencia</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
                            <div className="flex flex-col mx-auto">
                                <div className="flex space-x-10 mx-auto">
                                    <div className="w-1/2">
                                        <div className="form-container mx-auto p-4 bg-white rounded shadow">
                                            <label htmlFor="nombre" className="block mb-2">
                                                Nombre:
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Ingrese su nombre"
                                                value={sugerenciaData.nombre}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="form-container mx-auto p-4 bg-white rounded shadow">
                                            <label htmlFor="email" className="block mb-2">
                                                Correo electrónico:
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Ingrese su correo electrónico"
                                                value={sugerenciaData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 flex justify-center">
                                    <div className="form-container mx-auto max-w-md p-4 bg-white rounded shadow">
                                        <label htmlFor="sugerencia" className="block mb-2">
                                            Sugerencia:
                                        </label>
                                        <textarea
                                            id="sugerencia"
                                            name="sugerencia"
                                            placeholder="Ingrese su sugerencia"
                                            value={sugerenciaData.sugerencia}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-5">
                                    <button
                                        className="btn-submit bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse"
                                        type="submit"
                                    >
                                        Enviar Sugerencia
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PQRSPage;