// Animação ao rolar: mostrar seções com efeito suave
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

// Observa todas as seções e o cabeçalho
document.querySelectorAll('.section, .hero').forEach(section => {
  observer.observe(section);
});
