import React, { useState } from 'react';

// Datos de ejemplo para los productos
const initialProducts = [
  { id: 1, name: 'Balde de pochoclos grandes', price: 5000.00 },
  { id: 2, name: 'Vaso de gaseosa grande', price: 4000.00 },
  { id: 3, name: 'Nachos', price: 3500.00 },
  { id: 4, name: 'Combo familiar', price: 12000.00 },
];

const Products = ({ addToCart }) => {
  return (
    <section style={{ flex: 1, padding: '20px' }}>
      <h2>Productos para Comprar</h2>
      <ul>
        {initialProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false); // Estado para la visibilidad del carrito

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} agregado al carrito`);
  };

  const handlePayment = () => {
    alert('Pago realizado con éxito');
    setCart([]); // Limpia el carrito
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev); // Cambia la visibilidad del carrito
  };

  return (
    <div style={{ display: 'flex' }}>
      <Products addToCart={addToCart} />

      {/* Contenedor para el carrito */}
      {isCartVisible && (
        <div style={{
          flex: '0 0 300px', // Ancho fijo para el carrito
          padding: '20px',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <Cart cart={cart} handlePayment={handlePayment} />
        </div>
      )}

      {/* Contenedor para el botón del carrito */}
      <div style={{
        position: 'fixed',
        right: '20px',
        top: '20px',
        zIndex: 1000, // Asegura que el botón esté en el frente
      }}>
        <button onClick={toggleCartVisibility} aria-label="Mostrar/Ocultar Carrito" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <i className="fas fa-shopping-cart" style={{ fontSize: '24px' }}></i>
        </button>
      </div>
    </div>
  );
};

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

export default App;
