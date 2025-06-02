const burgerMenu2 = document.querySelector(".burger-menu2");

const burgerMenu = document.querySelector(".burger-menu");

burgerMenu2.addEventListener("click", () => {
  burgerMenu2.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});
