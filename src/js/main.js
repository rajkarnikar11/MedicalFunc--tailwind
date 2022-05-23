const menu = document.querySelector(".burger");
let toggler = 0;
function toggleMenu() {
	if (toggler === 0) {
		toggler = 1;
		// document.querySelector(".nav__item").style.opacity =
		// 	"1";

		document.querySelector(".nav__item").style.display = "flex";
		document.querySelector(".line__2").style.transform = "scale(0)";
		document.querySelector(".line__1").style.transform =
			"rotate(45deg) translate(-4px, -4px)";
		document.querySelector(".line__1").style.transformOrigin = "top left";
		document.querySelector(".line__3").style.transform = "rotate(-45deg)";
		document.querySelector(".line__3").style.transformOrigin =
			"bottom left";
		document.querySelector(".line__2").style.transformOrigin = "center";
		document.querySelector(".line__3").style.transitionDuration = ".3s";
		document.querySelector(".line__2").style.transitionDuration = ".3s";
		document.querySelector(".line__1").style.transitionDuration = ".3s";
	} else {
		toggler = 0;

		document.querySelector(".nav__item").style.display = "none";
		document.querySelector(".line__1").style.transform =
			"rotate(0deg) translate(0px, 0px)";
		document.querySelector(".line__2").style.transform = "scale(1)";
		document.querySelector(".line__3").style.transform = "rotate(-360deg)";
	}
}
menu.addEventListener("click", toggleMenu);
