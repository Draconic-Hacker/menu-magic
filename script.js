const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

// Adiciona a classe 'active' ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  menu.classList.add("active");
});

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});