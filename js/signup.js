
const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".Login");

loginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn");
    moveBtn.innerHTML = "Login";
    login.classList.add("loginform");
    signup.classList.remove("signupform");
})
signupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginform");
    signup.classList.add("signupform");
    moveBtn.innerHTML = "Signup";
})