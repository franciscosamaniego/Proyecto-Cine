import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <section>
      <h2>Reseñas Recientes</h2>
      <div id="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.title} <span>({review.rating}/5)</span></h3>
            <p>{review.review}</p>
            {review.image && <img src={URL.createObjectURL(review.image)} alt={review.title} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewList;
