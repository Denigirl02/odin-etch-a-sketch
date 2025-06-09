let cellWidth = 16;
let cellHeight = 16;
const etchContainer = document.querySelector("#etchContainer");
const resetBtn = document.querySelector("#reset");
const changeBtn = document.querySelector("#change");
let cellBackgroundColor = "red";
let cellDrawingColor = "white";

let cellArray = [];

resetBtn.addEventListener("click", function () {
	let cells = document.querySelectorAll(".subdiv");
	cells = Array.from(cells);
	cells.forEach((cell) => (cell.style.backgroundColor = cellBackgroundColor));
});

for (y = 0; y < cellHeight; y++) {
	cellArray[y] = document.createElement("div");
	cellArray[y].setAttribute("class", "maindiv");

	etchContainer.appendChild(cellArray[y]);

	for (x = 0; x < cellWidth; x++) {
		let pixel = document.createElement("div");
		pixel.setAttribute("class", "subdiv");
		pixel.style.backgroundColor = cellBackgroundColor;
		pixel.addEventListener("mouseenter", function changeColor() {
			pixel.style.backgroundColor = cellDrawingColor;
		});

		cellArray[y][x] = pixel;
		cellArray[y].appendChild(cellArray[y][x]);
	}
}
