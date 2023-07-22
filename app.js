let color = "black";
let click = true;

// creating new grid
function createGrid(num) {
    let container = document.querySelector("#container");
    let items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.remove());

    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for (let c = 0; c < num * num; c++) {
        let cell = document.createElement("div");

        // changes color when hovering over grid item
        cell.addEventListener("mouseover", coloring);
        cell.classList.add("grid-item");
        container.insertAdjacentElement("beforeend", cell);
    };
};

createGrid(16);

function newGrid(num) {
    if (num >= 1 && num <= 100) // ensures the site doesn't crash due to invalid num
        createGrid(num);
}

function coloring() {
    if (click) {
        if (color === "white")
            this.style.opacity -= 0.1;

        else {
            // changing opacity by 10% if color hasn't been changed
            if (this.style.backgroundColor === color) {
                if(parseFloat(this.style.opacity)) {
                    this.style.opacity = parseFloat(this.style.opacity) + 0.2;
                } else {
                    this.style.opacity = 0.2;
                }
            }

            else {
                this.style.backgroundColor = color;
                this.style.opacity = 0.2;
            }
        }
    }
}

function resetBoard() {
    let items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.style.opacity = 0);
}

function changeColor(col) {
    color = col;

    if (color === "white")
        document.querySelector(".currColor").textContent = "Currently Selected: Eraser";
    else
        document.querySelector(".currColor").textContent = `Currently Selected: ${color.charAt(0).toUpperCase() + color.slice(1)}`;
}

document.querySelector(".pause").addEventListener("click", (e) => {
    click = !click;
    if (click) {
        document.querySelector(".mode").textContent = "Mode: Coloring";
        document.querySelector(".pause").textContent = "Pause";
    }
    else {
        document.querySelector(".mode").textContent = "Mode: Not Coloring";
        document.querySelector(".pause").textContent = "Continue";
    }
});