const modalClass = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

function handleCloseclick() {
    modalClass.classList.remove("is-visible");
}
closeModal.addEventListener("click", handleCloseclick);
