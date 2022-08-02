const grid = document.querySelector(".grid");
const color = document.querySelector(".color");
const reset = document.querySelector(".reset")

let draw = false;

function makeGrid(pixels) {
    for (let i = 0; i < pixels * pixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");   
        pixel.addEventListener('mouseover', function () {
            if (!draw) return;
            pixel.style.backgroundColor = color.value;
        });
        pixel.addEventListener('mousedown', function () {
            pixel.style.backgroundColor = color.value;
        });

        grid.appendChild(pixel);
    }

    grid.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${pixels}, 1fr)`;
}

window.addEventListener('mousedown', function() {
    draw = true;
});
window.addEventListener('mouseup', function () {
    draw = false;
})


reset.addEventListener('click', function() {
    grid.innerHTML = '';
    makeGrid(16);
});


makeGrid(16);