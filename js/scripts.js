
const buton_menu = document.querySelector('.menu-button');
const disable_menu = document.querySelector('.disable-buttom');

buton_menu.addEventListener('click', () => {
    const menu_bar = document.querySelector('.menu-bar');

    menu_bar.classList.add('active');
});

disable_menu.addEventListener('click', () => {
    const menu_bar = document.querySelector('.menu-bar');

    menu_bar.classList.remove('active');
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", function(event) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const gdprCheckbox = document.getElementById("inlineRadio1");

        if (nameInput.value.trim() === "") {
            alert("Por favor, ingrese su nombre.");
            event.preventDefault();
            return;
        }

        if (emailInput.value.trim() === "") {
            alert("Por favor, ingrese su correo electrónico.");
            event.preventDefault();
            return;
        }

        if (!gdprCheckbox.checked) {
            alert("Debe aceptar nuestra política de privacidad para continuar.");
            event.preventDefault();
            return;
        }

    });
});









