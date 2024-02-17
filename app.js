const container = document.querySelector('.container');


for (let i = 0; i < 4; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 4; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);
    }

    container.appendChild(row);
}