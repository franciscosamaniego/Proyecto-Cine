import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { title, rating, review, image };
    addReview(newReview);
    setTitle('');
    setRating(1);
    setReview('');
    setImage(null);
  };

  return (
    <section>
      <h2>Deja tu reseña</h2>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label>Calificación (1-5):</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>{star}</option>
          ))}
        </select>

        <label>Reseña:</label>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} required />

        <label>Imagen de la película:</label>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
        
        <button type="submit">Enviar Reseña</button>
      </form>
    </section>
  );
};

export default ReviewForm;
