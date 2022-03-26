const container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.addEventListener('mouseenter', () => {
        div.classList.add('pixel');
    })
}