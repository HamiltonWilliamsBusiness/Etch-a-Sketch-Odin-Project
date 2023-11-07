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

// Function to remove all div elements from the container
function clearGrid() {
    // Remove all child elements (divs) from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function func4() {

    clearGrid()
    let numDivs = slider.value * slider.value
    let divSize = 500 / numDivs;
    console.log(slider.value)
    console.log(slider.value * slider.value)
    for (let i = 1; i <= numDivs; i++) {
        let colorChange = document.createElement('div');
        // colorChange.classList.add("colorSwap");
        colorChange.style.width = divSize + "px";
        colorChange.style.height = divSize + "px";
        colorChange.style.flex = "1 1 auto";
        colorChange.style.border = "2px solid red";
        colorChange.style.boxSizing = "border-box";
        colorChange.style.margin = "0";
        colorChange.style.padding = "0";

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
    }

}

const buttonColor = document.getElementById("colorChanger");

buttonColor.addEventListener('click', func)

const buttonColor2 = document.getElementById("colorChanger2");

buttonColor2.addEventListener('click', func2)

const buttonColor3 = document.getElementById("colorChanger3");

buttonColor3.addEventListener('click', func3)

// const sizeChange = document.getElementById("sizeChange");

// sizeChange.addEventListener('click', func4)

// Get references to the slider input and the paragraph to display the value
// const slider = document.getElementById("myRange");
// const sliderValue = document.getElementById("sliderValue");

// Display the initial value
// sliderValue.textContent = "Value: " + slider.value;

// Add an event listener to update the displayed value when the slider changes
// slider.addEventListener("input", function () {
//     sliderValue.textContent = "Value: " + slider.value;
// });

// slider.addEventListener("input", func4);


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

