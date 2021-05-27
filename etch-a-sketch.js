// add grid display and grids to the container div
const container = document.querySelector(".container");
container.style.cssText = "display: grid; grid-template-rows: repeat(16, 50px); grid-template-columns: repeat(16, 50px); grid-gap: 5px;";


// create and add the 16 x 16 divs into the container, oh lord save us all
function createGridDivs(targetNoGrid = 16) {
    const containerDiv = document.querySelector(".container");
    let totalGridDivs = targetNoGrid * targetNoGrid;
    for (let i = 0; i < totalGridDivs; i++) {
        let div = document.createElement("div")
        div.id = i + 1;
        div.className = "pixels";
        div.addEventListener("mouseover", () => { // event listener that changes the div color during mouseover
            div.style.cssText = "background: #d0d0d0";
        });
        containerDiv.appendChild(div);
    };
};
createGridDivs();


// create button
const resetButn = document.createElement("button");
resetButn.id = "resetButn";
resetButn.textContent = "Reset Canvas";
const resetDiv = document.querySelector(".button");
resetDiv.appendChild(resetButn);
// event listener to reset the canvas on click
resetButn.addEventListener("click", () => {
    let divs = document.querySelectorAll(".pixels");
    divs.forEach(item => {
        item.style.cssText = "background: white";
    });
});
// event listener to modify the number of grids available (max 100)
resetButn.addEventListener("click", () => {
    const display = document.querySelector(".display");
    const oldContainer = document.querySelector(".container");
    let newContainer = document.createElement("div");
    newContainer.className = "container";
    let newTarget = prompt("How many squares per side to generate (max 100)");
    if (newTarget >= 100 || newTarget <= 0) {
        validTarget = prompt("Please enter a valid number ( 1 to 100 )");
        newTarget = validTarget;
    };
    if (document.querySelector(".container")) {
        display.removeChild(oldContainer);
        display.appendChild(newContainer);
    }
    newContainer.style.cssText = "display: grid; grid-template-rows: repeat(" + newTarget +", 50px); grid-template-columns: repeat(" + newTarget +", 50px); grid-gap: 5px;";
    createGridDivs(newTarget);
});