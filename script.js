const container = document.querySelector('.container');
const clear = document.querySelector('#clear');
const buttons = document.querySelectorAll('.button');
const color = document.querySelector('#color-selector');
const rainbow = document.querySelector('#rainbow');

createGrid(16);

function createGrid(gridSize) {
    for (i = 0; i < (gridSize * gridSize); i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('gridElement');
        div.classList.add('gridLine');
    };
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    if (rainbow.classList.contains('on') == true) {
        rainbowMode();
    } else {
        makeGridDynamic();
    }
};

function removeCurrentGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

buttons.forEach((button) => {
    button.addEventListener('click' , (e) => {
        if (e.target.id == 'clear') {
            clearGrid();
        } else if (e.target.id == 'toggle-grid') {
            showGrid();
        } else if (e.target.id == 'rainbow') {
            rainbow.classList.toggle('on');
            if (rainbow.classList.contains('on') == true) {
                rainbowMode();
            } else {
                makeGridDynamic();
            };
        } else {
            removeCurrentGrid();
            createGrid(e.target.id);
        };
    });
});

function makeGridDynamic() {
    const gridElement = document.querySelectorAll('.gridElement');
    gridElement.forEach((element) => {
        element.addEventListener('mouseenter' , (e) => {
            e.target.style.backgroundColor = `${document.getElementById('color-selector').value}`;
        });
    });
};

function showGrid() {
    const gridElement = document.querySelectorAll('.gridElement');
    gridElement.forEach((element) => {
        element.classList.toggle('gridLine');
    });
};

function clearGrid() {
    const gridElement = document.querySelectorAll('.gridElement');
    gridElement.forEach((element) => {
        element.style.backgroundColor = 'rgb(255,255,255)';
    });
};

function selectRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r},${g},${b})`;
    return randomColor
}

function rainbowMode() {
    const gridElement = document.querySelectorAll('.gridElement');
    gridElement.forEach((element) => {
        element.addEventListener('mouseenter' , (e) => {
            e.target.style.backgroundColor = selectRandomColor();
        });
    });
};