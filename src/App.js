import React, { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import NowShowing from './components/NowShowing';
import Products from './components/Products';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);
  const [isProductsVisible, setIsProductsVisible] = useState(false); // Estado para la visibilidad de los productos

  const addReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  const toggleProductsVisibility = () => {
    setIsProductsVisible((prev) => !prev); // Cambia la visibilidad de los productos
  };

  return (
    <div>
      <header>
        <h1>Reseñas de Películas y Series, Cinema Devoto</h1>
      </header>
      <main>
        {!isProductsVisible ? (
          <>
            <ReviewForm addReview={addReview} />
            <ReviewList reviews={reviews} />
            <NowShowing />
            {/* Botón para mostrar productos */}
            <button onClick={toggleProductsVisibility}>
              Mostrar Productos
            </button>
          </>
        ) : (
          <>
            {/* Renderiza los productos solo si isProductsVisible es true */}
            <Products />
            {/* Botón para ocultar productos y mostrar otras secciones */}
            <button onClick={toggleProductsVisibility}>
              Ver reseñas
            </button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
