document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    // Function to validate form inputs
    function validateForm(form) {
        const inputs = form.querySelectorAll("input[required]");
        for (const input of inputs) {
            if (!input.value) {
                alert(${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.);
                input.focus(); // Focus on the first invalid input
                return false;
            }
        }
        return true;
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validateForm(registerForm)) {
                alert("Registration Successful!");
                registerForm.reset();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (validateForm(loginForm)) {
                alert("Login Successful!");
                loginForm.reset();
            }
        });
    }

    // Mobile Navigation
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");

    if (menuIcon) {
        menuIcon.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuIcon.classList.toggle("active"); // Optional: add class for menu icon animation
        });
    }
});