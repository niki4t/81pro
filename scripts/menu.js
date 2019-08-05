var menuButton = document.querySelector(".header__btn");
var menuBg = document.querySelector(".header");
var closeBg = document.querySelector(".header__button-close");

menuButton.onclick = function() {
	menuBg.style.display = "block";
	closeBg.style.display = "block";
}
closeBg.onclick = function() {
	menuBg.style.display = "none";
	closeBg.style.display = "none";
}