//---------- Navbar ----------//

window.addEventListener("scroll", function () {
	let navbar = document.getElementById("navbar");
	navbar.classList.toggle("fixed", this.window.scrollY > 0);
});

// Typing animation
var typed = new Typed(".typing", {
	strings: ["Web Developer", "Software Developer", "UX Designer", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	backDelay: 1000,
	loop: true,
});

var typed = new Typed(".type", {
	strings: ["Web Developer", "Software Developer", "UX Designer", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	backDelay: 1000,
	loop: true,
});
// Portfolio Gallery

// Review Carousel
