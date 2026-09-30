const rolagem = document.querySelector(".rolagem");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        rolagem.style.opacity = "0";
    } else {
        rolagem.style.opacity = "1";
    }

});