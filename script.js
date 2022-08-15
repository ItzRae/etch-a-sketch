const grid = document.querySelector(".grid");
const color = document.querySelector(".color");
const reset = document.querySelector(".reset")
const random = document.querySelector(".random-color");
const sizeElement = document.querySelector(".size");
const button = document.querySelectorAll(".btn");
let size = sizeElement.value;
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

function resetGrid() {
    grid.innerHTML = '';
    makeGrid(size);
}

if (size == '' | size == null) 
{
    size = 16;
}
makeGrid(size);

reset.addEventListener('click', resetGrid);

random.addEventListener('click', function() {
    color.value = randomColor();
})

sizeElement.addEventListener('change', function() {
    size = sizeElement.value;
    resetGrid()
});

// button.addEventListener('click', function() {

// });

const randomColor = () => {
    // let color = 'rgb(';
    // let arr = [];
    // for (i = 0; i < 3; i++) {
    //     arr.push(Math.floor(Math.random() * 255));
    // }
    // color += arr.join(',');
    // return color + ')';
    return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6); 
}
