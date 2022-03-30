const container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('gridElement');
};

const gridElement = document.querySelectorAll('.gridElement');
gridElement.forEach((element) => {
    element.addEventListener('mouseenter' , () => {
        element.classList.add('pixel');
        console.log(element.classList);
    });
});