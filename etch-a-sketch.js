// add grid display and grids to the container div
const container = document.querySelector(".container");
container.style.cssText = "display: grid; grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr); grid-gap: 5px;";

// create and add the 16 x 16 divs into the container, oh lord save us all
let targetNoGrid = 256;
for (let i = 0; i < targetNoGrid; i++) {
    let div = document.createElement("div")
    div.id = i + 1;
    // div.textContent = i + 1; // ensuring the correct number of divs are created on the html
    div.addEventListener("mouseover", () => { // event listener that changes the div color during mouseover
        div.style.cssText = "background: #d0d0d0";
    });
    container.appendChild(div);
}