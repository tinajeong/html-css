const modalClass = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image");
const regModal = document.querySelector(".regModal");

const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

function handleCloseclick() {
    modalClass.classList.remove("is-visible");
}

function handleRegClick(event) {
    event.preventDefault();

    const a = document.createElement('a');
    a.classList.add("bar-item");
    a.innerText = titleInput.value;
    a.href ="#";
    sidebar.appendChild(a);

    const img = document.createElement('img');
    img.alt = titleInput.value;
    img.src = imageInput.value;
    container.appendChild(img);

    handleCloseclick();
}
closeModal.addEventListener("click", handleCloseclick);
regModal.addEventListener("click", handleRegClick);
