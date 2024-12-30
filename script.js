function createDot() {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dot.style.backgroundColor = generateRandomColor();
	document.body.append(dot);
	moveDot(dot);
}
function moveDot(dot) {
	const randomLeft = Math.floor(Math.random() * screen.width);
	const randomWidth = Math.floor(Math.random() * 4 + 1);
	const randomSpeed = Math.floor(Math.random() * 3 + 2);
	let currentLeft = randomLeft;
	dot.style.width = randomWidth + "px";
	dot.style.top = Math.floor(Math.random() * screen.height) + "px";
	dot.style.left = randomLeft + "px";

	// Updating Position Every 10 Milliseconds
	setInterval(() => {
		currentLeft += randomSpeed;
		if (currentLeft > screen.width) {
			currentLeft = -randomWidth;
		}

		dot.style.left = currentLeft + "px";
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
for (let i = 0; i < 100; i++) {
	createDot();
}
