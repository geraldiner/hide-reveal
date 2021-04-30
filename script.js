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
  let modalImgContainer = document.querySelector('.imgContainer');
  let modalDescription = document.querySelector('.modalDescription');

  let mapArea = e.target.dataset.name;

  modalHeading.textContent = mapArea;
  modalDescription.textContent = mapAreas[mapArea].desc;

  let mapAreaImgs = mapAreas[mapArea].img;
  modalImgContainer.innerHTML = '';
  mapAreaImgs.forEach((image) => {
    modalImgContainer.innerHTML += `<img class="modalImg" src="img/${image}.png">`
  });


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

let mapAreas = {
  'Campsite': {
    img: ['campsite'],
    desc: 'The Campsite invites any visitor passing through Happi.'
  },
  'Market': {
    img: ['market', 'market_cafe'],
    desc: 'The Market is where you can do a little shopping for new furniture at Nook\'s Cranny, or a new outfit at the Able Sisters.'
  },
  'Plaza': {
    img: ['plaza', 'plaza_event'],
    desc: 'The Plaza is the central area of Happi, where any special events or celebrations are sure to take place.'
  },
  'Farm': {
    img: ['farm', 'orchard'],
    desc: 'The Happi Farm features a pumpkin patch and fruit orchard. Stop by and feel free to pick whatever\'s in season.'
  },
  'Residential Area': {
    img: ['residential'],
    desc: 'Stop by your friends\' homes in the Residential Area. Right in the middle is also our Representative-run Happi Cafe.'
  },
  'Museum': {
    img: ['museum'],
    desc: 'Spend some time at our museum in the Fossil, Fish, Bug, or Art Exhibits. Don\'t forget to catch the nightly beetle battles in the Bug Exhibit.'
  },
  'Sushi Bar': {
    img: ['sushibar'],
    desc: 'If you\'re feeling hungry, stop by the Sushi Bar at the North end of the island. All our seafood is freshly caught off the pier right out back.'
  },
  'Hiking Trail': {
    img: ['hikingtrail'],
    desc: 'For peace and quiet.'
  }
}