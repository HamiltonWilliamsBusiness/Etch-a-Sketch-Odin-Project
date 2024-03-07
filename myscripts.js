const container = document.querySelector('#holder');

// Create an array to store the div elements
const divElements = []; 

let nameClass = "colorSwap2";
let color = "white"

function func() {
    color = "green";
}

function func2() {
    color = "red";
}

function func3() {
    color = "white";
}

// Function to remove all div elements from the container
function clearGrid() {
    // Remove all child elements (divs) from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
// buttons

const buttonColor = document.getElementById("colorChanger");

buttonColor.addEventListener('click', func)

const buttonColor2 = document.getElementById("colorChanger2");

buttonColor2.addEventListener('click', func2)

const buttonColor3 = document.getElementById("colorChanger3");

buttonColor3.addEventListener('click', func3)

function func4(){
    let userInput = prompt('Enter a value 1-100');
    // alert(userInput)
    aSizeChange()

    for (let i = 1; i <= userInput; i++) {
        let colorChange = document.createElement('div');
        colorChange.classList.add("colorSwap");
    
        colorChange.addEventListener('mouseover', () => {
            if (color === "white") {
                colorChange.style.backgroundColor = "white";
            } if (color === "red") {
                colorChange.style.backgroundColor = "red";
            } if (color === "green") {
                colorChange.style.backgroundColor = "green";
            }
        });
    
        container.appendChild(colorChange);
        divElements.push(colorChange);
    }
}

const sizeChanger = document.querySelector('#sizeChanger');
sizeChanger.addEventListener('click', func4)

// Creating 16x16 grid of square divs & Loop that iterates 256 times

for (let i = 1; i <= 256; i++) {
    let colorChange = document.createElement('div');
    colorChange.classList.add("colorSwap");

    colorChange.addEventListener('mouseover', () => {
        if (color === "white") {
            colorChange.style.backgroundColor = "white";
        } if (color === "red") {
            colorChange.style.backgroundColor = "red";
        } if (color === "green") {
            colorChange.style.backgroundColor = "green";
        }
    });

    container.appendChild(colorChange);
    divElements.push(colorChange);
}

function aSizeChange(){
    // Delete Old Grid
    container.innerHTML = ''; // This will remove all child elements inside the container


    // Reset Old Div Array Value
    divElements = []

}




