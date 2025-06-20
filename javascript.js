let cellWidth = 16;
let cellHeight = 16;
const etchContainer = document.querySelector("#etchContainer");
const resetBtn = document.querySelector("#reset");
const changeBtn = document.querySelector("#change");
let cellBackgroundColor = "white";
let cellDrawingColor = "white";

let cellArray = [];

populateGrid(cellWidth, cellHeight);

resetBtn.addEventListener("click", function () {
	let cells = document.querySelectorAll(".subdiv");
	cells = Array.from(cells);
	cells.forEach((cell) => (cell.style.backgroundColor = cellBackgroundColor));
	cells.forEach((cell) => (cell.style.opacity = "1"));
});

changeBtn.addEventListener("click", function () {
	let newCellSize = prompt("Please Select Grid Size (e.g. 16 for a 16x16)");
	while (newCellSize > 100 || newCellSize <= 0) {
		alert("Invalid size, please only between 1 to 100");
		newCellSize = prompt("Please Select Grid Size (e.g. 16 for a 16x16)");
	}

	// Clear out existing Cells
	let cells = document.querySelectorAll(".maindiv");
	cells = Array.from(cells);
	cells.forEach((cell) => cell.remove());
	//
	cellHeight = newCellSize;
	cellWidth = newCellSize;

	changeCellSizeText(cellWidth, cellHeight);
	populateGrid(cellWidth, cellHeight);
});

function changeCellSizeText(cellWidth, cellHeight) {
	const sizeText = document.querySelector("#sizeText");
	sizeText.textContent = `Current Size: ${cellWidth} x ${cellHeight}`;
}
function populateGrid(cellWidth, cellHeight) {
	for (y = 0; y < cellHeight; y++) {
		cellArray[y] = document.createElement("div");
		cellArray[y].setAttribute("class", "maindiv");

		etchContainer.appendChild(cellArray[y]);

		for (x = 0; x < cellWidth; x++) {
			let pixel = document.createElement("div");
			pixel.setAttribute("class", "subdiv");
			pixel.style.backgroundColor = cellBackgroundColor;
			pixel.addEventListener("mouseenter", function changeColor() {
				pixel.style.backgroundColor = getRandomColor();
				let currentOpacity = getComputedStyle(pixel).opacity;
				let reducedOpacity = (currentOpacity -= 0.1);
				pixel.style.opacity = reducedOpacity;
			});

			cellArray[y][x] = pixel;
			cellArray[y].appendChild(cellArray[y][x]);
		}
	}
}

function getRandomColor() {
	let r = Math.round(Math.random() * 255);
	let g = Math.round(Math.random() * 255);
	let b = Math.round(Math.random() * 255);

	const rgb = `rgb(${r},${g},${b})`;
	return rgb;
}
