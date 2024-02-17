const container = document.querySelector('.container');


for (let i = 0; i < 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.style.backgroundColor = 'grey';
    gridItem.style.width = '100px';
    container.appendChild(gridItem);
}