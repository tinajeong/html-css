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

function imageExists(image_url) {
  const headers = new Headers({
    "Content-Type": "image/png",
  });
  console.log(image_url);
  fetch(image_url, headers)
    .then((res) => {
      if (res.ok) {
        console.log("Image exists.");
        return true;
      } else {
        console.log("Image does not exist.");
        return false;
      }
    })
    .catch((err) => console.log("Error:", err));

  return false;
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
  } else if (!imageExists(imageInput.value)) {
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
