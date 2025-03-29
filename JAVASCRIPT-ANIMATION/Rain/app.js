const numDrops = 400;
const rainContainer = document.querySelector('.rain');

function randRange(min, max){
    return Math.random() * (max - min) + min;
}

function creatRain(){
    for(let i = 1; i <= numDrops; i++){
        let drop = document.createElement('div');
        drop.classList.add('drop');

        let startX = randRange(0, window.innerWidth);
        let startY = randRange(-100, window.innerHeight);
        let speed = randRange(2,4);
        let opacity = randRange(0.3, 1);

        drop.style.left = `${startX}px`;
        drop.style.top = `${startY}px`;
        drop.style.opacity= opacity;

        rainContainer.appendChild(drop);

        animateDrop(drop, startY, speed);
    }
}

function animateDrop(drop, startY, speed){
    let posY = startY;
    //let drift = randRange(-0.5, 0.5); // Small left/right movement
    function fall(){
        posY += speed;
        drop.style.transform = `translateY(${posY}px)`;
        //let driftX = Math.sin(posY / 50) * 10; // Create a wavy motion
       // drop.style.transform = `translate(${driftX}px, ${posY}px)`;
        if(posY > window.innerHeight){
            posY = randRange(-100, -10);
            drop.style.left = `${randRange(0, window.innerWidth)}px`;
        }

        requestAnimationFrame(fall);
    }
    fall();
}

creatRain();