const container = document.querySelector('#holder');
const divElements = []; // Create an array to store the div elements

// let colorChange = document.createElement('div');
// colorChange.addEventListener('click', func);
// colorChange.classList.add("colorSwap");

// container.append(colorChange);
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

const buttonColor = document.getElementById("colorChanger");

buttonColor.addEventListener('click', func)

const buttonColor2 = document.getElementById("colorChanger2");

buttonColor2.addEventListener('click', func2)

const buttonColor3 = document.getElementById("colorChanger3");

buttonColor3.addEventListener('click', func3)


// Creating 16x16 grid of square divs

// Loop that iterates 256 times

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

// for (let i = 1; i <= 256; i++) {
//     let colorChange = document.createElement('div');
//     colorChange.classList.add("colorSwap");

//     colorChange.addEventListener('mouseover', () => {
//         colorChange.classList.contains(nameClass) ? colorChange.classList.toggle("colorSwap") : colorChange.classList.toggle(nameClass)
//     });

//     container.appendChild(colorChange);
//     divElements.push(colorChange); // Add the div to the array
// }

