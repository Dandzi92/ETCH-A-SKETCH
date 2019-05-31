let ratioForGradualDark = 1;
let divgrid = document.getElementById("table");
let newdiv = document.createElement("div");

newdiv.style.cssText = `background-color: white; border-bottom: 1px solid green; 
		border-left: 1px solid green`;
divgrid.style.cssText = `grid-template: repeat(10, 1fr) / repeat(10, 1fr); 
		border-top: 1px solid green; border-right: 1px solid green`;

for (let i = 0; i < 10 ** 2; i++) {
    divgrid.appendChild(newdiv.cloneNode(true));
}
divgrid.onmouseover = makeBlackTrace;

let sizeButton = document.getElementsByClassName("size")[0];
let refreshButton = document.getElementsByClassName("refresh")[0];
let blackButton = document.getElementsByClassName("black")[0];
let rainbowButton = document.getElementsByClassName("rainbow")[0];
let gradualButton = document.getElementsByClassName("gradual")[0];

sizeButton.addEventListener("click", makeGrid);
refreshButton.addEventListener("click", refresh);
blackButton.addEventListener("click", pushBlackButton);
rainbowButton.addEventListener("click", pushRainbowButton);
gradualButton.addEventListener("click", pushGradualButton);

function makeBlackTrace(e) {
    if (e.target.nodeName == "DIV" && e.target !== divgrid) {
        e.target.style.backgroundColor = "black";
    }
}
function makeGrid() {
    let choice = prompt("type your preferable quantity of lines per line", "4");

    if (choice == null || choice == "" || choice == 0) {
        return;
    }

    let squaresPerLine = Number(choice);

    divgrid.innerHTML = "";

    divgrid.style.cssText = `grid-template: repeat(${squaresPerLine},
			 1fr) / repeat(${squaresPerLine} , 1fr); border-top: 1px solid green; 
			 border-right: 1px solid green`;

    for (let i = 0; i < squaresPerLine ** 2; i++) {
        divgrid.appendChild(newdiv.cloneNode(true));
    }
}
function makeRainbowTrace(e) {
    if (e.target.nodeName == "DIV" && e.target !== divgrid) {
        e.target.style.backgroundColor = `${makeRandomColor()}`;
    }
}
function refresh(e) {
    let gridSquares = divgrid.getElementsByTagName('div');

    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = "white";
    }
}
function makeRandomColor() {
    let color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    return color;
}
function makeGradualDark(e) {

    if (e.target.nodeName == "DIV" && e.target !== divgrid) {
        if (ratioForGradualDark == 1) {
            event.target.style.backgroundColor = "rgb(255, 255, 255)";
        }

        ratioForGradualDark -= 0.1;

        let rgbValueTarget = ratioForGradualDark * 255;
        let newRgbTarget = Math.round(rgbValueTarget);

        event.target.style.backgroundColor = `rgb(${newRgbTarget}, ${newRgbTarget}, ${newRgbTarget})`;

        if (event.target.style.backgroundColor == "rgb(0, 0, 0)") {
            ratioForGradualDark = 1;
        }
    }
}
function pushBlackButton(e) {
    divgrid.onmouseover = makeBlackTrace;
}
function pushRainbowButton(e) {
    divgrid.onmouseover = makeRainbowTrace;;
}
function pushGradualButton(e) {
    divgrid.onmouseover = makeGradualDark;;
}