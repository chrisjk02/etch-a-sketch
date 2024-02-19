

function generateGrid (numOfSquares) {
    const container = document.querySelector('.container');

    for (let i = 0; i < numOfSquares; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let j = 0; j < numOfSquares; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    
        container.appendChild(row);
    }
}


//event listener to change color on hover
const columns = document.querySelectorAll(".column");
for (let box of columns) {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    })
}

const reset = document.querySelector("#reset");
