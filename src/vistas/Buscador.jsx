import '../Estilos/Buscador.css'
import {Buscar} from './Icons'
function Buscador ({busqueda , buscarProducto}) {
    return (
        <>
            <h3 className='titulo'>Encuentra el producto que buscas</h3>
            <form className='container-buscador' >
                <input type="text" placeholder='Buscar producto' className='input-buscar'
                value={busqueda} onChange={buscarProducto}/>
                <button className='btn-buscar' type='submit'>
                    <Buscar/>       
                    Buscar
                </button>
            </form>
        </>
    )
}

export default Buscador;