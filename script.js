let mapBtns = document.querySelectorAll(".mapBtn");
mapBtns.forEach((x) => {
  x.addEventListener("click", showLightbox);
});

function showLightbox(e) {
  e.preventDefault();
  let modal = document.querySelector(".modal");
  let modalHeading = document.querySelector(".modalHeading");
  console.log(e);
  console.log(e.target.parentElement.id);
  modalHeading.textContent = e.target.parentElement.id;
  modal.style.display = "block";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
});