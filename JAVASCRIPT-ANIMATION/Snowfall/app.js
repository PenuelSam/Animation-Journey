window.onload = function(){
    //Get the canavas and context and store them in variables
    let canvas = document.getElementById("sky");
    let ctx = canvas.getContext("2d")

    //set the canvas to the window height and width

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;
//reset the canvas when the window is resized
    window.addEventListener("resize", function(){
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    })

    //generate the snowflakes and apply attributes
    let mf = 100; //max flakes
    let flakes = [];
    //loop through the empty flakes and apply attributes

    for(let i = 0; i < mf; i++){
        flakes.push({
            x: Math.random() * w, 
            y: Math.random() * h,
            r: Math.random() * 5 + 2,
            d: Math.random() + 1
        })
    }

    //draw the flakes onto canvas
    function drawFlakes(){
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for(let i = 0; i < mf; i++){
            let flake = flakes[i]
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        animateFlakes();
    }

    //animate the flakes
    let angle = 0
    function animateFlakes(){
        angle += 0.01;
        for(let i = 0; i < mf; i++){
            let flake = flakes[i];
            flake.y += Math.pow(flake.d, 2) + 1
            flake.x += Math.sin(angle) * 2;
            //if the snowflake is out of bounds, reset it
            if(flake.y > h){
                flakes[i] = {
                    x: Math.random() * w,
                    y: 0,
                    r: flake.r,
                    d: flake.d
                }
            }
            //if the snowflake is out of bounds, reset it
            if(flake.x > w || flake.x < 0){
                flakes[i] = {
                    x: Math.random() * w,
                    y: flake.y,
                    r: flake.r,
                    d: flake.d
                }
            }
        }
    }

    setInterval(drawFlakes, 25);
}