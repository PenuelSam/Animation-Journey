const allcontainer = gsap.utils.toArray(".container-item") 
const venueImageWrap = document.querySelector(".container-img-wrap");
const venueImage = document.querySelector(".container-img");

function initContainer(){
    allcontainer.forEach((link) => {
        link.addEventListener("mouseenter", venueHover);
        link.addEventListener("mouseleave", venueHover);
        link.addEventListener("mousemove", moveVenueHover);
    });
}

function moveVenueHover(e){
    let xpos = e.clientX;
    let ypos = e.clientY;
    const tl = gsap.timeline();
    tl.to(venueImageWrap, {
        x: xpos,
        y: ypos,
    });
}

function venueHover(e){
    if(e.type === "mouseenter"){
        const targetImage = e.target.dataset.img

        const tl = gsap.timeline();
        tl.set(venueImage, {
            backgroundImage: `url(${targetImage})`, 
        }).to(venueImageWrap, {
            duration: 0.5,
            autoAlpha: 1
        })
    } else if(e.type === "mouseleave"){
        const tl = gsap.timeline();
        tl.to(venueImageWrap,{
            duration: 0.5,
            autoAlpha: 0,
        })
    }
}

function init(){
    initContainer();
}

window.addEventListener("load", function(){
    init();
})