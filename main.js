const root = document.querySelector('#root');
const promptButton = document.querySelector('#prompt-button');


const startPage = () => {
    for(let i = 1; i < 257; i++) {
        createSquare(i);
    }
    colorSquares();
    promptButton.addEventListener('click', () => {
        let clientAnswer = parseInt(prompt('Change de grid layout'));
        console.log(clientAnswer);
    });
}

const createSquare = number => {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.textContent = number;
    root.appendChild(square);
}

const colorSquares = () => {
    const squares = root.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add('square-on-hover');
        })
    })
}



document.addEventListener('DOMContentLoaded', startPage())