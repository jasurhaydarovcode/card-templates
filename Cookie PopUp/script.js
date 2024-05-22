const tl = gsap.timeline({ defalts: { duration: 0.75, ease: "power3.inOut" } });
// Fade in container (Action 1)
tl.fromTo(
  ".conatiner",
  { scale: 0.2 },
  { scale: 1, duration: 2.5, ease: "elastic" }
);
// Text Animate (Action 2)
tl.fromTo(".text", { x: 500, opacity: 0 }, { x: 0, opacity: 1 }, "<.5");
// Rotate Cookie (Action 3)
tl.fromTo(
  ".cookie",
  { rotation: 180, x: -150, opacity: 0 },
  { rotation: 360, x: 0, duration: 0.75, opacity: 1 },
  "<"
);
// Cookie Jump (Action 4)
tl.fromTo(".cookie", { y: 0 }, { y: -25, ease: "elastic" }, "<1");
