import React from 'react'
import 'boxicons';

const Carrito = () => {
    return (
        <div className='carritos'>
            <div className="carrito">
                <div className="carrito_close">
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito_center">
                    <div className="carrito_item">
                        <img src="" alt="" />
                        <div>
                            <h3>tiitle</h3>
                            <p className='price'>$345</p>
                        </div>
                        <div>
                            <box_icon name="up-arrow" type="solid"></box_icon>
                            <p className="cantidad">1</p>
                            <box_icon name="down-arrow" type="solid"></box_icon>
                        </div>
                        <div className='remove_item'>
                            <box_icon name="trash"></box_icon>
                        </div>
                    </div>
                </div>
                <div className="carrito_footer">
                    <h3>Total : $....</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
        </div>
    );
}

export default Carrito;