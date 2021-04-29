let mapBtns = document.querySelectorAll(".mapBtn");
mapBtns.forEach((x) => {
  x.addEventListener("click", showLightbox);
});

let close = document.querySelector('.close');
close.addEventListener('click', closeLightbox);

function showLightbox(e) {
  e.preventDefault();
  let modal = document.querySelector(".modal");
  let modalHeading = document.querySelector(".modalHeading");
  console.log(e);
  modalHeading.textContent = e.target.dataset.name;
  modal.style.display = "block";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
});

function closeLightbox() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}