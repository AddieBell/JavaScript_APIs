"use strict";

console.log("Hello Fetch API");

// Program State
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "YizYIssm87tnLV1KsW7XleDxlygvdtQp";

// Select elements
let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");

// Event Handlers
searchBtn.addEventListener("click", (event) => {
  fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => res.json())
    .then((body) => {
      // Show the gif on the dom
      gifEle.src = body.data.images.original.url;
      feedbackEle.textContent = "";
    })
    .catch((err) => {
      console.error(err);
      // Show the error message on the dom
      feedbackEle.textContent = err.message;
    });

  searchInput.value = "";
});
