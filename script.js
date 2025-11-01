const carousel = document.querySelector('#textCarousel');
const bootstrapCarousel = new bootstrap.Carousel(carousel, {
  interval: 2000,
  ride: 'carousel',
  pause: false // Nunca se detiene, ni al pasar el mouse
});