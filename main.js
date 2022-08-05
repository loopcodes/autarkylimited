const menu = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a')


links.forEach((link) => {
    link.addEventListener("click", () => {

        menu.classList.toggle("active");
    });
});


