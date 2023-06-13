import { useState } from "react";
import axios from 'axios';
import './../Estilos/Registro.css';
import { Link } from "react-router-dom";

const RegistroVendedor = () => {
    const [formDataUser, setFormDataUser] = useState({
        name: "",
        email: "",
        password: "",
        tipo: "vendedor",
        cellphone: "",
        nombre_tienda: "",
        rues: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormDataUser({
            ...formDataUser,
            [event.target.id]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validate(formDataUser);
        if (Object.keys(errors).length === 0) {
            try {
                const url = `https://httpsbackendmystoreunal.com/registro_vendedor?name=${formDataUser.name}&email=${formDataUser.email}&password=${formDataUser.password}&tipo=${formDataUser.tipo}&cellphone=${formDataUser.cellphone}&nombre_tienda=${formDataUser.nombre_tienda}&rues=${formDataUser.rues}&nombre=${formDataUser.name}`;
                const response = await axios.get(url);
                console.log(response.data);
                setRegistroExitoso(true);
            } catch (error) {
                console.error(error);
                console.log('Ocurrió un error al registrar el usuario');
            }
        } else {
            setErrors(errors);
            console.log(errors);
        }
    };    

    const validate = (values) => {
        const errors = {};
        if (!values.name.trim()) {
            errors.name = "El nombre es requerido";
        }
        if (!values.email) {
            errors.email = "El correo electrónico es requerido";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "El correo electrónico es inválido";
        }
        if (!values.password) {
            errors.password = "La contraseña es requerida";
        } else if (values.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres";
        }
        if (!values.cellphone) {
            errors.cellphone = "El número de teléfono celular es requerido";
        } else if (!/^[0-9]+$/.test(values.cellphone)) {
            errors.cellphone = "El número de teléfono celular es inválido";
        } else if (values.cellphone.length !== 10) {
            errors.cellphone = "El número de teléfono celular debe tener 10 dígitos";
        }
        if (!values.nombre_tienda.trim()) {
            errors.nombre_tienda = "El nombre de la tienda es requerido";
        }
        if (!values.rues.trim()) {
            errors.rues = "El número de registro único de establecimiento (RUES) es requerido";
        }
        if (values.password !== confirmPassword) {
            errors.confirmPassword = "Las contraseñas no coinciden";
        }
        return errors;
    };
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg">
            <div className="container">
                <h1 className="title font-bold text-center mb-5">
                    Registro para vendedor
                </h1>
                <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg">
                    {/* ... */}
                    {registroExitoso && (
                        <div className="text-green-500 text-center mt-4">
                            Registro exitoso. ¡Bienvenido!
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            className={`border ${errors.name ? "border-red-500" : "border-gray-400"} py-2 px-3 rounded-lg w-full focus:outline-none focus:ring`}
                            required
                            value={formDataUser.name}
                            onChange={handleChange}
                        />
                        {errors.name && (<div className="text-red-500 text-sm mt-1">{errors.name}</div>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Correo electrónico
                        </label>
                        <input
                            type="text"
                            id="email"
                            className={`border ${errors.email ? "border-red-500" : "border-gray-400"} py-2 px-3 rounded-lg w-full focus:outline-none focus:ring`}
                            required
                            value={formDataUser.email}
                            onChange={handleChange}
                        />
                        {errors.email && (<div className="text-red-500 text-sm mt-1">{errors.email}</div>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`border ${errors.password ? "border-red-500" : "border-gray-400"} py-2 px-3 rounded-lg w-full focus:outline-none focus:ring`}
                            required
                            value={formDataUser.password}
                            onChange={handleChange}
                        />
                        {errors.password && (<div className="text-red-500 text-sm mt-1">{errors.password}</div>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                            Confirmar contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={`border ${errors.confirmPassword ? "border-red-500" : "border-gray-400"} py-2 px-3 rounded-lg w-full focus:outline-none focus:ring`}
                            required
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        {errors.confirmPassword && (<div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cellphone" className="block text-gray-700 font-bold mb-2">
                            Teléfono celular
                        </label>
                        <input
                            type="text"
                            id="cellphone"
                            className={`border ${errors.cellphone ? "border-red-500" : "border-gray-400"} py-2 px-3 rounded-lg w-full focus:outline-none focus:ring`}
                            required
                            value={formDataUser.cellphone}
                            onChange={handleChange}
                        />
                        {errors.cellphone && (<div className="text-red-500 text-sm mt-1">{errors.cellphone}</div>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nombre_tienda" className="block text-gray-700 font-bold mb-2">
                            Nombre de la tienda
                        </label>
                        <input
                            type="text"
                            id="nombre_tienda"
                            className={`border ${errors.nombre_tienda ? "border-red-500" : "border-gray-400"} py-2 px-3 rounded-lg w-full focus:outline-none focus:ring`}
                            required
                            value={formDataUser.nombre_tienda}
                            onChange={handleChange}
                        />
                        {errors.nombre_tienda && (<div className="text-red-500 text-sm mt-1">{errors.nombre_tienda}</div>)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rues" className="block text-gray-700 font-bold mb-2">
                            RUES
                        </label>
                        <input
                            type="text"
                            id="rues"
                            className={`border ${errors.rues ? "border-red-500" : "border-gray-400"} py-2 px-3 rounded-lg w-full focus:outline-none focus:ring`}
                            required
                            value={formDataUser.rues}
                            onChange={handleChange}
                        />
                        {errors.rues && (<div className="text-red-500 text-sm mt-1">{errors.rues}</div>)}
                    </div>

                    <div className="Tyc">
                        <label className="Acepto">
                            <input type="checkbox" name="terminos" id="terminos" />
                            <a href="https://drive.google.com/file/d/1kqZJPK8JE6Z2EBkCKHfubotGNlVDRduN/view?usp=drive_link" />
                            Acepto los términos y condiciones.
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                        >
                                Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistroVendedor;