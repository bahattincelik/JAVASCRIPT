const s1 = prompt("1. sayiyi giriniz");
const islem = prompt("Islemi giriniz");
const s2 = prompt("2. sayiyi giriniz");
let sonuc = 0;

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
} else {
  alert("Yanlis islem yaptiniz...");
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
