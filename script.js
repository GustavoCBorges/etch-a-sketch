const container = document.querySelector('.container');
const button = document.querySelector('.button');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('gridElement');
};

const gridElement = document.querySelectorAll('.gridElement');
gridElement.forEach((element) => {
    element.addEventListener('mouseenter' , () => {
        element.classList.add('pixel');
    });
});

button.addEventListener(('click'), () => {
    gridElement.forEach((element) => {
        element.classList.remove('pixel');
    });
});