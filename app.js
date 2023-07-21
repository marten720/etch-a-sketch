const container = document.getElementById("container"); // accessing container


function createGrid(num) {
    container.style.setProperty('--grid-rows', num);
    container.style.setProperty('--grid-cols', num);
    for (c = 0; c < (num * num); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  createGrid(16, 16);