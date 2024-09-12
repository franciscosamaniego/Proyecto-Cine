document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const reviewsList = document.getElementById('reviews-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        if (title && rating && review) {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');

            reviewElement.innerHTML = `
                <h3>${title} <span>(${rating}/5)</span></h3>
                <p>${review}</p>
            `;

            reviewsList.appendChild(reviewElement);

            form.reset();
        }
    });
});
