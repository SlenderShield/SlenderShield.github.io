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
let owlCarousel = $(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	items: 1,
	// nav:true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1200: {
			items: 2,
		},
	},
});
