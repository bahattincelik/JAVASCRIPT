//* ================= ÖDEVLER ================

// ? • Soru-1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.

//? • 0-25 arası not karşılığı FF olmalı,26-45 arası DD, 46-65 arası CC, 66- 75 arası BB, 76-
//? 90 arası BA, 91-100 arası AA olarak çevrilmelidir.
//? • 100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir.

const score = +prompt("Lutfen Puaninizi Giriniz :");

if (score > 100 && score < 0) {
  alert("Hatali bir puan degeri girdiniz");
} else if (score > 90) {
  alert("Notunuz AA");
} else if (score > 75) {
  alert("Notunuz BA");
} else if (score > 65) {
  alert("Notunuz BB");
} else if (score > 45) {
  alert("Notunuz CC");
} else if (score > 25) {
  alert("Notunuz DD");
} else alert("Notunuz FF");

//! • Soru-2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı
//! kullanarak yazınız.

const month = prompt("Lutfen ay ismini giriniz");

switch (month.toLowerCase()) {
  case "ocak":
    no = 1;
    break;
  case "subat":
    no = 2;
    break;
  case "mart":
    no = 3;
    break;
  case "nisan":
    no = 4;
    break;
  case "mayis":
    no = 5;
    break;
  case "haziran":
    no = 6;
    break;
  case "temmuz":
    no = 7;
    break;
  case "agustos":
    no = 8;
    break;
  case "eylul":
    no = 9;
    break;
  case "ekim":
    no = 10;
    break;
  case "kasim":
    no = 11;
    break;
  case "aralik":
    no = 12;
    break;

  default:
    alert("Lutfen gecerli bir ay giriniz");
    break;
}
alert(`Yilin ${no}. ayidir.`);

//todo • Soru-3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en
//todo büyüğünü yazdıran programı yazınız.

const s1 = +prompt("Lutfen 1. sayiyi giriniz");
const s2 = +prompt("Lutfen 2. sayiyi giriniz");
const s3 = +prompt("Lutfen 3. sayiyi giriniz");

let sum = s1 + s1 + s3;
let pow = s1 * s1 * s3;

const small = s1 < s2 ? (s1 < s3 ? s1 : s3) : s2 < s3 ? s2 : s3;
const big = s1 > s2 ? (s1 > s3 ? s1 : s3) : s2 > s3 ? s2 : s3;

alert(
  `Sayilari Toplami ${sum}, Sayilarin Carpimi ${pow}, En kucuk Sayi ${small}, En buyuk sayi ${big} `
);

//* • Soru-4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary
// *deyimi ile yapınız).

const num = prompt("Lutfen bir sayi giriniz");
const result = num % 2 == 0 ? "Sayi Cifttir" : "Sayi tektir";
alert(result);

//? • Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı
//? tasarlayınız. Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır

let query = prompt(
  "Lutfen bir sıcaklık ölçüsü birimi giriniz: fahrenayt icin F / Derece icin C"
);

let temperature = prompt("Lutfen bir sıcaklıgi giriniz");

if (query.toUpperCase() == "F") {
  temperature = (temperature - 32) / 1.8;
  query = "DERECE";
} else if (query.toUpperCase() == "C") {
  temperature = temperature * 1.8 + 32;
  query = "FAHRENAYT";
} else {
  alert("Hatali bir derece secimi yaptiniz");
}

alert(`${temperature} ${query} dir`);
