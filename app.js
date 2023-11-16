const sign_up_btn = document.querySelector("#sign-up-btn");
const login_btn = document.querySelector("#login-btn");
const flexbox_container = document.querySelector(".flexbox-container");

sign_up_btn.addEventListener('click', () => {
    flexbox_container.classList.add("sign-up-mode");
});

login_btn.addEventListener('click', () => {
    flexbox_container.classList.remove("sign-up-mode");
});