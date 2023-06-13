import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import logo from './images/logo.png';

const Ingreso = ({ setIsLoggedIn, setShowIngreso, setUserData }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8888/login-utf8', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                if(data.message === 'Contraseña incorrecta' | data.message === 'Usuario no encontrado'){
                    setError(data.message);
                    setEmail('');
                    setPassword('');
                    alert(data.message);
                }else{
                    console.log('Ingreso correcto!');
                    console.log('Datos:', data);
                    setUserData(data);
                    navigate('/');
                }
                
            } else {
                setError(data.message);
                setEmail('');
                setPassword('');
                alert('Inicio de sesión incorrecto');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white border rounded-lg shadow-lg p-8 max-w-xs w-full">
                <img className="w-28 mb-6" src={logo} alt="Logo" />
                <h2 className="text-2xl font-bold mb-6">Inicia sesión</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="text-gray-700">Correo electrónico</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Contraseña</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </label>
                    {error && <div className="text-red-500">{error}</div>}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
            <div className="mt-4">
                ¿No tienes una cuenta?{' '}
                <Link
                    to="/selector"
                    className="text-blue-500 hover:text-blue-600 font-medium"
                >
                    Regístrate
                </Link>
            </div>
            <div>
                Olvidaste tu clave? {' '}
                <Link
                    to="/cambiarClave"
                    className="text-blue-500 hover:text-blue-600 font-medium"
                >
                    Cambia tu clave
                </Link>
            </div>
        </div>
    );
};
export default Ingreso;