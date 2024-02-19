

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

    //event listener to change color on hover
    const columns = document.querySelectorAll(".column");
    for (let box of columns) {
            box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        })
    }
}



function resetGrid() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    resetGrid();
    let input = parseInt(prompt("Enter a number:"));
    generateGrid(input);
})
