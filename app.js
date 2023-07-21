const container = document.getElementById("container"); // accessing container
const newSize = document.getElementById("quantity"); // new size of grid
const btn = document.getElementsByClassName("reset"); // might not work because reset is a class not id!!!!!!!

// creating new grid
function createGrid(num) {
    container.style.setProperty('--grid-rows', num);
    container.style.setProperty('--grid-cols', num);
    for (c = 0; c < num ** 2; c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };

    hoverColor();
};

// changes color when hovering over grid item
function hoverColor() {
    let items = document.querySelectorAll(".grid-item");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "black";

        // changing opacity by 10%
        if(parseFloat(item.style.opacity)) {
            item.style.opacity = parseFloat(item.style.opacity) + 0.1;
            } else {
            item.style.opacity = 0.1;
            }
        });
    });
}
  
  // initializing default grid
  createGrid(16, 16);

function newGrid() {
    if (newSize.value < 1 || newSize.value > 100)
        newSize.value("Incorrect value!");
    else {
        eraseGrid();
        createGrid(newSize.value);
    }
}

function eraseGrid() {
    let items = document.querySelectorAll(".grid-item");
    items.forEach(item => {
        item.style.backgroundColor = "white";
    });
}

btn[0].addEventListener("click", newGrid);