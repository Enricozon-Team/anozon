// Usando GSAP para animaciones suaves
gsap.from("#hero-title", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "power2.out",
  onComplete: function () {
    // Después de la animación, hacer desaparecer el título
    gsap.to("#hero-title", { opacity: 0, duration: 1, delay: 2 });
  },
});

gsap.from("#hero p", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  delay: 0.3,
  ease: "power2.out",
});

gsap.from(".btn", {
  duration: 1,
  scale: 0,
  delay: 0.6,
  ease: "elastic.out(1, 0.5)",
});

// Animación de entrada de los productos
gsap.from(".producto", {
  duration: 1,
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  delay: 0.5,
  ease: "back.out(1.7)",
});
