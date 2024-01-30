

// https://github.com/public-apis/public-apis?tab=readme-ov-file

const title = document.getElementById("Header");
title.innerText = "Random fox image";

const box = document.getElementById("box");
const foxImage = document.getElementById("fox-image");

const url = "https://randomfox.ca/floof/";

function fetchRandomfoximage() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      foxImage.src = data.image;
      foxImage.alt = "random fox image";
    })
    .catch((error) => {
      console.log("Error fetching random fox image:", error);
    });
}

const button = document.getElementById("button");
button.addEventListener("click", fetchRandomfoximage);