import React, { useContext } from "react";
import { CarritoContext } from "../CarritoContext";

export const ShoppingCart = () => {
    const [carrito, setCarrito] = useContext(CarritoContext);

    const quantity = carrito.reduce((acc, curr) => {
        return acc + curr.quantity;
    } , 0);

    const PrecioTotal = carrito.reduce((acc, curr) => acc + curr.quantity * curr.precio , 0);

  return (
    <div className="cart-container">
      <div>
        <div>Items in cart: {quantity}</div>
        <div>Total: ${PrecioTotal}</div>
        <button onClick={() => console.log(carrito)}>Checkout</button>
      </div>
    </div>
  );
};  