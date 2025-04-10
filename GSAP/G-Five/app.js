gsap.to(".row-1, .row-2", 1, {
    top: 0,
    ease: "power4.out",
    delay: 1,
    stagger: {
        amount: 0.5,
    },
});

gsap.to(".brand-name", 1, {
    left: 0,
    ease: "power4.out",
    delay: 2.5,
    stagger: {
        amount: 0.5,
    },
});

gsap.from(".lets-talk p", 0.1, {
    opacity: 0,
    ease: "power4.out",
    delay: 2,
});

gsap.from(".text", 2, {
    scale: 0,
    ease: "power4.out",
    delay: 2,
});

gsap.from(".text", 20, {
    rotation: 360,
    ease: Linear.easeNone,
    repeat: -1,
});

gsap.to(".box", 1, {
    top: "100%",
    ease: "power4.out",
    delay: 2,
});

gsap.to(".h1, p", 1, {
    top: 0,
    ease: "power4.out",
    delay: 2.5,
    stagger: {
        amount: 0.5,
    },
});

gsap.to(".h-stripe", 1, {
    top: "500%",
    ease: "power4.out",
    delay: 4
});

gsap.to(".line", 1, {
    scaleX: 0,
    ease: "power4.out",
    delay: 3.5,
});

gsap.to(".marquee", 1, {
    bottom: "-10em",
    ease: "power4.out",
    delay: 3,
});