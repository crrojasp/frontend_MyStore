import './../Estilos/VistaProducto.css';
function VistaProducto(mostrar,producto,cerrar){
    
    return (        
        <div className="modal-container" onClick={cerrar} style={{display: mostrar ? 'grid' : 'none'}}>
            <section className="modal-body">
                <div className="imagen-container">
                    <img src={`data:image/jpeg;base64,${producto.ilustracion}`} alt={producto.nombre} className="imagen-container" />
                </div>
                <div className="data"></div>
            </section>
        </div>
    )
}

export default VistaProducto;
