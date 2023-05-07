const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const layers = parallax.querySelectorAll('.layer');

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.1;
    const movement = -(scrolled * speed);
    layer.style.transform = `translateY(${movement}px)`;
  });
});
