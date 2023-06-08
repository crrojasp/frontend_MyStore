import React from 'react';
import './../Estilos/Somos.css';
import Diana from './images/Diana.jpeg';
import Julian from './images/Julian.jpeg';
import Cristian from './images/Cristian.jpeg';



const Somos = () => {

  return (
    <section className="section-white">
    <div> <h1 className='Ourteam'>¿Quiénes somos?</h1>
      <div className="team-members">
        <div className="Diana">
          <img src={Diana} alt="Diana" />
            <h3>Diana M. Bello L.</h3>
            <h4>FrontEnd</h4>
            <p className='descripcion'> Estudiante de la UN sede Bogotá, centrada en el front</p>
        </div>
        <div className="Julian">
          <img src={Julian} alt="Julian" />
            <h3>Julian Fernández</h3>
            <p className='descripcion'> Estudiante de la UN sede Bogotá, centrado en el desarrollo FullStack</p>
            <p>FullStack</p>
        </div>
        <div className="Cristian">
          <img src={Cristian} alt="Cristian" />
            <h3>Cristian A. Rojas</h3>
            <p className='descripcion'> Estudiante de la UN sede Bogotá, centrado en el desarrollo FullStack</p>
            <p>FullStack</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Somos;