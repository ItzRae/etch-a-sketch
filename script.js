

function makeGrid(pixels) {
    const grid = document.querySelector(".grid");
    for (let i = 0; i < pixels * pixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");   
        grid.appendChild(pixel);
    }

    grid.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${pixels}, 1fr)`;
}

makeGrid(16);