const detailsForm = document.querySelector("#destination_details_form");
let container = document.querySelector("#destinations_container");
let first = document.querySelector(".first");

function createDestCard(name, location, photoURL, description) {
  let card = document.createElement("div");
  card.className = "card";

  let img = document.createElement("img");
  img.setAttribute("alt", name);

  let constantPhotoUrl =
    "https://i4.hurimg.com/i/hurriyet/75/1110x740/5b0bf20a5379ff2048bd76f5.jpg";
  if (photoURL.length === 0) {
    img.setAttribute("src", constantPhotoUrl);
  } else {
    img.setAttribute("src", photoURL);
  }
  card.appendChild(img);
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTitle = document.createElement("h4");
  cardTitle.innerText = name;
  cardBody.appendChild(cardTitle);

  let cardSubtitle = document.createElement("h4");
  cardSubtitle.innerText = location;
  cardBody.appendChild(cardSubtitle);

  if (description.length !== 0) {
    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = "description";
    cardBody.appendChild(cardText);
  }

  let cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.innerText = "Remove";
  cardDeleteBtn.addEventListener("click", removeDestination);
  cardBody.appendChild(cardDeleteBtn);

  card.appendChild(cardBody);
  return card;
}

function removeDestination(e) {
  let card = e.target.parentElement.parentElement;
  card.remove();
}

detailsForm.addEventListener("submit", (e) => {
  e.preventDefault();


  document;
  let destName = e.target.elements["name"].value;
  let destLocation = e.target.elements["location"].value;
  let destPhoto = e.target.elements["photo"].value;
  let destDesc = e.target.elements["description"].value;

  //   emptying the values after the submission
  for (let i = 0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value = "";
  }
  //   creating card with written funct before
  let destCard = createDestCard(destName, destLocation, destPhoto, destDesc);

  let wishListContainer = document.getElementById("destinations_container");
  if (wishListContainer.children.length === 0) {
    document.getElementById("title").innerHTML = "My Wish List";
  }
  // adding the Card
  document.querySelector("#destinations_container").appendChild(destCard);
});
