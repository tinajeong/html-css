const regBtn = document.getElementById("regBtn");
const modal = document.querySelector(".modal");

function handleRegClick() {
    modal.classList.add("is-visible");
}

regBtn.addEventListener("click",handleRegClick);
