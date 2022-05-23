const menu = document.querySelector(".burger");
let toggler = 0;
function toggleMenu() {
	if (toggler === 0) {
		toggler = 1;
		// document.querySelector(".nav__item").style.opacity =
		// 	"1";
		document.querySelector(".nav__item").style.display = "flex";
	} else {
		toggler = 0;

		document.querySelector(".nav__item").style.display = "none";
	}
}
menu.addEventListener("click", toggleMenu);
