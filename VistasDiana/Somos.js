import React from 'react';
import './../Estilos/Somos.css';
import Diana from './images/Diana.jpeg';
import Julian from './images/Julian.jpeg';
import Cristian from './images/Cristian.jpeg';



const Somos = () => {

  return (
   
    <section className="section-white">
    <div>
    <h1 className='Ourteam'>¿Quiénes somos?</h1>
    <label className='Ms'>My Store es un proyecto universitario que nace a raíz de ser una alternativa para que las pequeñas y medianas empresas puedan acceder a la virtualización de su empresa y así mismo, la personalización de espacios, en donde podrá hacer pagos, transacciones y tener estadísticas del movimiento de sus clientes.
    </label>
      <div className="team-members">
        <div className="Diana">
          <img src={Diana} alt="Diana" />
            <h3>Diana M. Bello</h3>
            <h4>FrontEnd</h4>
            <p className='descripcion'> Estudiante de la UN sede Bogotá, centrada en el FrontEnd.</p>
        </div>
        <div className="Julian">
          <img src={Julian} alt="Julian" />
            <h3>Julian Fernández</h3>
            <h4>FullStack</h4>
            <p className='descripcion'> Estudiante de la UN sede Bogotá, centrado en el desarrollo FullStack.</p>
        </div>
        <div className="Cristian">
          <img src={Cristian} alt="Cristian" />
            <h3>Cristian A. Rojas</h3>
            <h4>FullStack</h4>
            <p className='descripcion'> Estudiante de la UN sede Bogotá, centrado en el desarrollo FullStack.</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Somos;