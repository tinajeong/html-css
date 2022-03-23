const modalClass = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image");
const regModal = document.querySelector(".regModal");

const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

function handleCloseclick() {
  modalClass.classList.remove("is-visible");
  sidebar.classList.remove("black");
}

function isValidHttpUrl(url_str) {
    let url;
    try {
      url = new URL(url_str);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
}

function handleRegClick(event) {
  event.preventDefault();

  if (titleInput.value === "") {
    alert("전시회 명을 입력하세요.");
    return;
  }
  if (imageInput.value === "") {
    alert("전시회 이미지 주소를 입력하세요.");
    return;
  } else if (!isValidHttpUrl(imageInput.value)) {
    alert("유효한 이미지 주소가 아닙니다.");
    return;
  }
  const a = document.createElement("a");
  a.classList.add("bar-item");
  a.innerText = titleInput.value;
  a.href = "#";
  sidebar.appendChild(a);

  const img = document.createElement("img");
  img.alt = titleInput.value;
  img.src = imageInput.value;
  container.appendChild(img);

  handleCloseclick();
}
closeModal.addEventListener("click", handleCloseclick);
regModal.addEventListener("click", handleRegClick);
