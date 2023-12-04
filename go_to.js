// Get the card elements and main image element
const cards = document.querySelectorAll('.card');
const mainImage = document.querySelector('#main-image');

// Add a click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove the active class from all cards
    cards.forEach(card => {
      card.classList.remove('active');
    });
    
    // Add the active class to the clicked card
    card.classList.add('active');
    
    // Get the source of the clicked card's image and update the main image source
    const imageSrc = card.querySelector('img').getAttribute('src');
    mainImage.setAttribute('src', imageSrc);
  });
});