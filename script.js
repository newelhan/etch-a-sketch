const mainGrid = document.querySelector('.main-grid');
let loadGridSize = prompt('Please enter the grid amount', '16')

generateGrid(loadGridSize);

function generateGrid(amount) {
  let gridInnerColumn = ``;
  let gridColumn;

  for (let i = 0; i < amount; i++) {
    gridInnerColumn += `<div></div>`;
    gridColumn = `<div class="grid-column">${gridInnerColumn}</div>`
  };

  for (let i = 0; i < amount; i++) {
    mainGrid.insertAdjacentHTML('afterbegin', `${gridColumn}`);
  };

  //grid hover
  document.querySelectorAll('.grid-column div').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = 'black';
    });
  });
};