import '../Estilos/Buscador.css'
import {Buscar} from './Icons'
function Buscador () {
    return (
        <>
            <h3 className='titulo'>Encuentra el producto que buscas</h3>
            <section className='container-buscador'>
                <input type="text" placeholder='Buscar producto' className='input-buscar'/>
                <button className='btn-buscar'>
                    <Buscar/>       
                    Buscar
                </button>
            </section>
        </>
    )
}

export default Buscador;