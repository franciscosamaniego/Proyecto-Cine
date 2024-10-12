import React from 'react';

const Cart = ({ cart, handlePayment }) => {
  return (
    <section>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button onClick={handlePayment}>Pagar</button>
      )}
    </section>
  );
};

export default Cart;
