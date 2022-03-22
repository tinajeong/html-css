const regBtn = document.getElementById("regBtn");
const modal = document.querySelector(".modal");
//const sidebar = document.querySelector(".sidebar");

function handleRegClick() {
    modal.classList.add("is-visible");
    sidebar.classList.add("black");
}

regBtn.addEventListener("click",handleRegClick);
