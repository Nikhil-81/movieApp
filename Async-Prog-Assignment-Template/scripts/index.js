let moviearr = [
  "https://images5.alphacoders.com/689/thumbbig-689398.webp",
  "https://images4.alphacoders.com/559/thumbbig-559552.webp",
  "https://images3.alphacoders.com/606/thumbbig-606650.webp",
  "https://images5.alphacoders.com/114/thumbbig-1142280.webp",
  "https://images6.alphacoders.com/714/thumbbig-714381.webp",
  "https://images4.alphacoders.com/653/thumbbig-653613.webp",
  "https://images4.alphacoders.com/601/thumbbig-601832.webp",
  "https://images5.alphacoders.com/677/thumbbig-677723.webp",
];
let count = 0;
console.log(moviearr);
let image = document.querySelector("#image");
image.setAttribute("src", moviearr[count]);
count = 1;

let id = setInterval(function () {
  if (count == moviearr.length) {
    count = 0;
  }
  image.setAttribute("src", moviearr[count]);
  count++;
}, 3000);

let data_movie = JSON.parse(localStorage.getItem("movies")) || [];
let cont = document.querySelector("#movies");
display();
function display() {
  data_movie.forEach(function (el, index) {
    let name = document.createElement("p");
    name.setAttribute("class", "m_name");
    let data = document.createElement("p");
    data.setAttribute("class", "m_data");
    let rating = document.createElement("p");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let image = document.createElement("img");
    image.setAttribute("src", el.image);
    image.setAttribute("class", "movie_poster");
    let divRating = document.createElement("span");
    divRating.setAttribute("class", "ratingBox");
    let str = document.createElement("span");
    str.setAttribute("class", "material-symbols-outlined star_rating");

    name.innerText = el.name;
    data.innerText = el.data;
    rating.innerText = el.rating;
    str.innerText = "star";

    divRating.append(str, rating);
    card.append(image, name, data, divRating);
    cont.append(card);
  });
}
function sortdata_lh() {
  cont.innerHTML = [];
  let x = data_movie.sort(function (a, b) {
    return a.rating - b.rating;
  });
  display();
}
function sortdata_hl() {
  cont.innerHTML = [];
  let y = data_movie.sort(function (a, b) {
    return b.rating - a.rating;
  });
  display();
}
