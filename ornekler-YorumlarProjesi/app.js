import yorumlar from "./data.js";

//Bilgilere Eriselim

const foto = document.getElementById("kisi-resim");
const yazar = document.getElementById("yazar");
const aciklama = document.getElementById("aciklama");
const is = document.getElementById("meslek");

//Butonlara eriselim

const ileriBtn = document.querySelector(".ileri-btn");
const geriBtn = document.querySelector(".geri-btn");
const rastgeleBtn = document.querySelector(".rastgele-btn");

let index = 0;

kisiyiGoster(index);

function kisiyiGoster(index) {
  const kisi = yorumlar[index];
  const { resim, ad, meslek, yorum } = kisi; // Destructring
  foto.src = resim;
  yazar.textContent = ad;
  is.innerHTML = meslek;
  aciklama.textContent = yorum;
}

ileriBtn.onclick = function () {
  index++;
  if (index > yorumlar.length - 1) {
    index = 0;
  }
  kisiyiGoster(index);
};
geriBtn.onclick = function () {
  index--;
  if (index < 0) {
    index = yorumlar.length - 1;
  }
  kisiyiGoster(index);
};
rastgeleBtn.onclick = function () {
  index = Math.floor(Math.random() * yorumlar.length);

  kisiyiGoster(index);
};
