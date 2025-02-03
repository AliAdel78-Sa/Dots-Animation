function createDot() {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dot.style.backgroundColor = generateRandomColor();
	document.body.append(dot);
	moveDot(dot);
}
function moveDot(dot) {
	const randomTop = Math.floor(Math.random() * screen.height);
	const randomLeft = Math.floor(Math.random() * screen.width);
	const randomWidth = Math.floor(Math.random() * 4 + 1);
	const randomSpeed = Math.floor(Math.random() * 5 + 2);
	let currentTop = randomTop;
	let currentLeft = randomLeft;
	dot.style.width = randomWidth + "px";
	dot.style.top = Math.floor(Math.random() * screen.height) + "px";
	dot.style.left = randomLeft + "px";

	// Updating Position Every 10 Milliseconds
	setInterval(() => {
		currentTop += randomSpeed;
		currentLeft += randomSpeed;
		if (currentTop > screen.height) {
			currentTop = -randomWidth;
		}
		if (currentLeft > screen.width) {
			currentLeft = -randomWidth;
		}

		dot.style.left = currentLeft + "px";
		dot.style.top = currentTop + "px";
	}, 10);

	// Changing Colors Every 1000 Milliseconds
	setInterval(() => {
		dot.style.backgroundColor = generateRandomColor();
	}, 1000);
}
function generateRandomColor() {
	const characters = "abcde"; // i choose Those Characters Only
	let color = "#";
	for (let i = 0; i < 6; i++) {
		const randomColor =
			characters[Math.floor(Math.random() * characters.length)];
		color += randomColor;
	}
	return color;
}
for (let i = 0; i < 150; i++) {
	createDot();
}
