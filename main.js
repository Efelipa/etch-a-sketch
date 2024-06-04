const root = document.querySelector('#root');
const promptButton = document.querySelector('#prompt-button');


// This function starts all the functionalities of the page.
const startPage = () => {
    // Firstly, create a 16x16 square table
    for(let i = 1; i < 257; i++) {
        createSquare(i);
    }
    // Secondly, gave to these squares the opportunity to change their color only if hover on it.
    colorSquares();
    // Finally, create a event only when you click on the button to change the layout.
    promptButton.addEventListener('click', () => {
        let clientAnswer = parseInt(prompt('Change de grid layout'));
        if(clientAnswer && clientAnswer <= 64) {
            changeLayout(clientAnswer);
        } else {
            alert(`Can't change grid layout. The number is high.`);
        }
    });
}

// Function made to create a N number of squares
const createSquare = number => {
    // Create a div
    const square = document.createElement('div');
    // Set a class fot this div
    square.setAttribute('class', 'square');
    // Give a unique number for that square
    square.textContent = number;
    // Create this square into the root element
    root.appendChild(square);
}

// Function to give to each square a event listener when you hover on it
const colorSquares = () => {
    const squares = root.querySelectorAll('.square');
    
    // Select all squares
    // For each square, give it a hover event and activate a class on it.
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            // Random colors
            const red = Math.round(Math.random() * 256);
            const green = Math.round(Math.random() * 256);
            const blue = Math.round(Math.random() * 256);
            square.style.background = `rgb(${red}, ${green}, ${blue})`;
        })
    })
}
// Function that changes the layout content of the squares. It receives a number as an argument to change the flex-basis of each square.
const changeLayout = squaresPerRow => {
    const squares = root.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.flexBasis = `calc(100% / ${squaresPerRow})`;
    })
}


// Execute the function startPage only when the page is loaded.
document.addEventListener('DOMContentLoaded', startPage())