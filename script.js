const mainGrid = document.querySelector('.main-grid');

function setGridSize() {
  while (true) {
    let gridSize = prompt('Enter the grid amount (10-100)', '16')
      if (isNaN(gridSize) || !gridSize) {
        alert('Enter the proper amount')
      } else if (gridSize > 100) {
        alert('Grid size must be less than 100 spaces')
      } else if (gridSize < 10) {
        alert('Grid size must be more than 10 spaces')
      } else {
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

  //grid hover
  document.querySelectorAll('.grid-column div').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = 'black';
    });
  });
};

document.querySelector('.js-change-grid')
  .addEventListener('onclick', () => {
    generateGrid(setGridSize());
  })

generateGrid(setGridSize());