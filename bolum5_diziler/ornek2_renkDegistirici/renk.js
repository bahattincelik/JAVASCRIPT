// const renkler = [
//   "red",
//   "blue",
//   "green",
//   "yellow",
//   "black",
//   "pink",
//   "purple",
//   "brown",
// ];

// const rastgeleSayi = Math.floor(Math.random() * renkler.length);

// document.querySelector("body").style.backgroundColor = renkler[rastgeleSayi];

document.querySelector(".btn").addEventListener("click", () => {
  const renkler = [
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "pink",
    "purple",
    "brown",
  ];

  const rastgeleSayi = Math.floor(Math.random() * renkler.length);

  document.querySelector("body").style.backgroundColor = renkler[rastgeleSayi];
  document.querySelector(".renk").innerHTML = renkler[rastgeleSayi];
  document.querySelector("h1").style.color = renkler[rastgeleSayi];
});
