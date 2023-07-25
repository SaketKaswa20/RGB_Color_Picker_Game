const colorBoxes = document.querySelectorAll('.color-box');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('messageDisplay');
const resetButton = document.getElementById('resetButton');

let colors = [];
let pickedColor;

resetGame();

// Set up event listeners for color boxes
colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const clickedColor = box.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            changeColors(clickedColor);
            resetButton.textContent = 'Play Again?';
        } else {
            box.style.backgroundColor = '#f7f7f7';
            messageDisplay.textContent = 'Try Again';
        }
    });
});

// Set up event listener for the reset button
resetButton.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';

    colorBoxes.forEach((box, index) => {
        box.style.backgroundColor = colors[index];
        box.style.display = 'block';
    });
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeColors(color) {
    colorBoxes.forEach(box => {
        box.style.backgroundColor = color;
    });
}
