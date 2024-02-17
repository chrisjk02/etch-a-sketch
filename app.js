const container = document.querySelector('.container');
const gridItem = document.createElement('div');
gridItem.style.backgroundColor = 'red';
gridItem.style.width = '100px';
gridItem.style.gap = '1rem';

for (let i = 0; i < 16; i++) {
    container.appendChild(gridItem);
}