// Get the container and create the canvas
let canvasContainer = document.getElementById("canvas");
let canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.id = "drawingCanvas";
canvas.style.backgroundColor = "#ddd";
canvasContainer.appendChild(canvas);


// Create color picker input
toolbar = document.createElement("div");
toolbar.style.position = "absolute";
toolbar.style.top = "50px";
toolbar.style.left = "100px";
toolbar.style.zIndex = "1000";
toolbar.style.background = "rgba(255, 255, 255, 0.8)";
toolbar.style.padding = "10px";
toolbar.style.borderRadius = "5px";

toolbar.innerHTML = '<input type="color" id="colorPicker" value="#df4b26">';
document.body.appendChild(toolbar);

// Handle compatibility for older IE browsers
if (typeof G_vmlCanvasManager !== "undefined") {
    canvas = G_vmlCanvasManager.initElement(canvas);
}

let ctx = canvas.getContext("2d");
let selectedColor = "#df4b26";

document.getElementById("colorPicker").addEventListener("input", function (e) {
    selectedColor = e.target.value;
});

// Variables for tracking mouse events and drawing
let paint = false;
let clickX = [];
let clickY = [];
let clickDrag = [];
let clickColor = [];

// Function to store drawing positions
function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickColor.push(selectedColor);
}

// Function to redraw the canvas based on stored positions
function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;

    for (let i = 0; i < clickX.length; i++) {
        ctx.beginPath();
        ctx.strokeStyle = clickColor[i]; // Use selected color
        if (clickDrag[i] && i) {
            ctx.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            ctx.moveTo(clickX[i] - 1, clickY[i]);
        }
        ctx.lineTo(clickX[i], clickY[i]);
        ctx.closePath();
        ctx.stroke();
    }
}

// Event listeners for mouse actions
canvas.addEventListener("mousedown", function (e) {
    let mouseX = e.pageX - canvas.offsetLeft;
    let mouseY = e.pageY - canvas.offsetTop;
    paint = true;
    addClick(mouseX, mouseY);
    redraw();
});

canvas.addEventListener("mousemove", function (e) {
    if (paint) {
        addClick(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop, true);
        redraw();
    }
});

canvas.addEventListener("mouseup", function () {
    paint = false;
});

canvas.addEventListener("mouseleave", function () {
    paint = false;
});
