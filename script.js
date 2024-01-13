const mainGrid = document.querySelector('.main-grid');

document.querySelector('.change-grid-button')
.addEventListener('click', () => {
  generateGrid(setGridSize());
})

function setGridSize() {
  while (true) {
    let gridSize = prompt('Enter the grid amount (10-100)', '16')
    //checks each case, whether it's true or not
    //compares the line with the expression (true in this case)
    //expression should mostly be a boolean, as you will compare each line whether it's true or false
    switch (true) {
      case isNaN(gridSize) || !gridSize: 
        alert('Grid size entered is invalid, grid is automatically 16x16')
        return gridSize = 16;

      case gridSize > 100:
        alert('Grid size must be less 100x100');
        break;
      
      case gridSize < 10:
        alert('Grid size must be more than 10x10');
        break;

      default:
        return gridSize;
    }
  }
}

function generateGrid(amount) {
  let gridColumns = ``;

  for (let i = 0; i < amount; i++) {
    let gridInnerColumn = ``;

    for (let j = 0; j < amount; j++) {
      gridInnerColumn += `<div></div>`;
    };

    gridColumns += `<div class="grid-column">${gridInnerColumn}</div>`
  };

  mainGrid.innerHTML = gridColumns;

  let gridColor;
  const inputColor =  document.querySelector('.input-color');
  inputColor.oninput = () => {
    gridColor = inputColor.value;
  };

  //grid hover
  document.querySelectorAll('.grid-column div').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = gridColor || 'black';
    });
  });
};

generateGrid(setGridSize());