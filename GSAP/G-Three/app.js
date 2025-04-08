var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

// Animate the letters with GSAP
gsap.from(".ml12 .letter", {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "expo.out",
    stagger: 0.06, // stagger each letter by 0.06 seconds
    delay: 2 // start after 2 seconds
  });

TweenMax.from(".left", 3, {
    left: "-50%",
    ease: Expo.easeInOut,
    delay: 3.4 
})
TweenMax.from(".header h1", 3, {
    left: "-140%",
    ease: Expo.easeInOut,
    delay: 3.4 
});

TweenMax.staggerFrom(".images > div", 1 , {
    y: 60,
    opacity: 0 ,
    ease: Power2.easeOut,
    delay: 6,
}, 0.2)
TweenMax.staggerFrom(".header > p", 1 , {
    y: 60,
    opacity: 0 ,
    ease: Power2.easeOut,
    delay: 5.6,
}, 0.2)

TweenMax.from(".link", 1, {
    opacity: 0,
    ease: SteppedEase.config(1),
    repeat: -1,
    repeatDelay: 0.2,
    delay: 7.8,
} )
