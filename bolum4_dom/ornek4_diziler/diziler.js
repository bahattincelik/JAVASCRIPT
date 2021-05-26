const dogum = 1980;
const yaslar = [30, 25, 44, 77];
const isimler = [
  "ahmet",
  "mustafa",
  "can",
  "bekir",
  "ayşe",
  20,
  40,
  true,
  23.4,
  2021 - dogum,
  yaslar,
];
console.log(isimler);
console.log(isimler[0]);
console.log((isimler[3] = "canan"));
isimler[isimler.length - 2] = false;
console.log(isimler);
// isimler dizisini 10. elemanının 0. elemanini yazdir.
console.log(isimler[10][0]);
isimler[11] = "İpek";
console.log(isimler);
// ========= DİZİYİ DEĞİŞTİREN METOTLAR ==============
const h1 = document.getElementById("meyveler");
let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
// pop() son elemani siler..
meyveler.pop(); // ["Elma", "Armut", "Muz"];
// push() dizinin sonuna eleman ekledi.
// dizinin son eleman sayisini dondurur.
const boyut = meyveler.push("Cilek", "Karpuz");
console.log(boyut);
// unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const boyut1 = meyveler.unshift("ayva");
console.log(boyut1);
// dizinin 0. indeks elemanini siler  ve silenen elemani dondurur.
const silinen = meyveler.shift();
console.log(silinen);
console.log(meyveler);
h1.innerHTML = meyveler;
