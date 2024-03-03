gsap.from(".nav__title", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: -100,
});

gsap.from(".nav__mid", {
  opacity: 0,
  duration: 1.2,
  delay: 1,
  y: -100,
});

gsap.from(".nav__right", {
  opacity: 0,
  duration: 1.2,
  delay: 1.5,
  y: -100,
});

gsap.from(".hero__cta__right", {
  opacity: 0,
  duration: 2.5,
  delay: 1,
});

gsap.from("#photo_1", {
  opacity: 0,
  x: -500,
  duration: 2,
});
gsap.from("#photo_3", {
  opacity: 0,
  x: 200,
  duration: 2,
});
gsap.from("#photo_2", {
  opacity: 0,
  x: 200,
  transform: "rotate(30deg)",
  duration: 2,
});
gsap.from("#photo_4", {
  opacity: 0,
  x: -100,
  transform: "rotate(-45deg)",
  duration: 2,
});

gsap.from(".box", {
  opacity: 0.25,
  transform: "rotate(65deg)",
  duration: 2,
});
