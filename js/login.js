document.getElementById('loginBtn').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';


    toggleForm('login');
    document.getElementById('registerForm').style.display = 'none';

});

document.getElementById('overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const hiddenRegisterForm = document.getElementById('register-form')


    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    hiddenRegisterForm.style.display = 'none';

    const loginTab = document.getElementById("tab-login");
    const registerTab = document.getElementById("registerTitle");
    if (formType === 'login') {
        loginTab.classList.add("active");
        loginTab.classList.remove("inactive");

        registerTab.classList.add("inactive");
        registerTab.classList.remove("active");

        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        hiddenRegisterForm.style.display = 'none';

    } else if (formType === 'register') {
        registerTab.classList.add("active");
        registerTab.classList.remove("inactive");

        loginTab.classList.add("inactive");
        loginTab.classList.remove("active");


        registerForm.style.display = 'block';
        hiddenRegisterForm.style.display = 'block';

    }
}

function showRegisterForm() {
    const form = document.getElementById("registerForm");
    form.style.width = "auto";
    form.style.height = "auto";
    form.style.overflow = "visible";
    form.style.visibility = "visible";
}

