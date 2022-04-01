const container = document.querySelector('.container');
const clear = document.querySelector('#clear');
const buttons = document.querySelectorAll('.button');

createGrid(16);

function createGrid(gridSize) {
    for (i = 0; i < (gridSize * gridSize); i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('gridElement');
    };
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    makeGridDynamic();
};

buttons.forEach((button) => {
    button.addEventListener('click' , (e) => {
        if (e.target.id == 'clear') {
            clearGrid();
        } else {
            removeCurrentGrid();
            createGrid(e.target.id);
        };
    });
});

function removeCurrentGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

function makeGridDynamic() {
    const gridElement = document.querySelectorAll('.gridElement');
    gridElement.forEach((element) => {
        element.addEventListener('mouseenter' , (e) => {
            e.target.classList.add('pixel');
        });
    });
};

function clearGrid() {
    const gridElement = document.querySelectorAll('.gridElement');
    gridElement.forEach((element) => {
        element.classList.remove('pixel');
    });
};