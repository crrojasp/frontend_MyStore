import React from 'react';
import './../Estilos/Somos.css';

const Planes = () => {

  return (
   
    <section className="section-white">
    <div>
    <h1 className='Ourteam'>¿Qué planes manejamos?</h1>
      <div className="team-members">
        <div className="Diana">
            <h3>E-commerce</h3>
            <h3>0.1 USD</h3>
            <p className='descripcion'> 
                <li>
                    Te pone en el top por defecto de búsqueda.
                </li>
                <li>
                    Te da prioridad en cuanto a la búsqueda de un mismo objeto.
                </li>
                <li>
                    Te da 24 horas siendo el e-commerce principal.
                </li>
            </p>
        </div>
        <div className="Julian">
            <h3>Comprador Top</h3>
            <h4>0.1 USD</h4>
            <p className='descripcion'> 
                <li>
                    Te muestra de forma prioritaria los mejores descuentos.
                </li>
                <li>
                    Te da prioridad en el momento de hacer la negociación
                </li>
            </p>
        </div>
        <div className="Cristian">
            <h3>E-commerce personalizado</h3>
            <h4>2 USD</h4>
            <p className='descripcion'> 
            <li>
                Tienes más opciones de personalización, durante un mes.
                </li>
                <li>
                Tienes prioridad en cuanto a la búsqueda de un mismo objeto.
                </li>
            </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Planes;