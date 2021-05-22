// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// Fonksiyonun tanımlanması
function yazdir() {
  console.log("Ahmet");
}
yazdir(); // Fonks. çağrılması
// Örnek: Parametreli Fonksiyon
function yazdirAd(ad, yas) {
  console.log(`Adiniz ${ad} Yasiniz ${yas}`);
}
yazdirAd("Mustafa", 23); // Call | invoke
yazdirAd("John", 21); // call | invoke
// Örnek: Parametreli, dönüş değerli Fonksiyon
function yasHesapla(dogum) {
  return 2021 - dogum;
}
console.log(`Yasiniz: ${yasHesapla(1990)}`);
alert(`Yasiniz: ${yasHesapla(1910)}`);
const yas = yasHesapla(1995);
console.log(`Yasiniz: ${yas}`);
// Örnek: Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonksiyon yaziniz.
const sayiniz = prompt("Sayinizini giriniz:");
// Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.
console.log(tekCift(sayiniz));
function tekCift(sayiniz) {
  const sonuc = sayiniz % 2 == 0 ? `${sayiniz} Çifttir` : `${sayiniz} Tektir`;
  return sonuc;
}
// ! 2.YÖNTEM  : FUNCTION EXPRESSION
const tekCift1 = function (sayiniz) {
  return sayiniz % 2 == 0 ? "ÇİFT" : "TEK";
};
console.log(tekCift1(5)); // invoke

//ORNEK: Buyuk sayiyi bulma

let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};
console.log(`En buyuk sayi ${buyukBul(5, 3, 8)}`);

// ! 3.YÖNTEM  : ARROW (OK) FONKSIYONLARI

const topla = (a, b) => a + b; //Arrow fon tanimlamasi
console.log(topla(5, 2)); //invoke
console.log(topla(3, 10)); //invoke

const ciftMi = (sayi) => (sayi % 2 == 0 ? "Cift" : "Tek");
console.log(ciftMi(5));

//Ornek : Us Alma

const taban = prompt("taban giriniz");
const us = prompt("Us giriniz");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));

//* Ornek: Menu
//! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmamiz lazim
const menu = () => {
  console.log("================================");
  console.log("        JAVASCRIPT DERS         ");
  console.log("================================");
};
menu();

//* Ornek: BILGI VER FONKSIYONU

//? 1. YONTEM
// const bilgiVer = (ad, soyad, dogum) => {
//   const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
//   return bilgi;
// };

//? 2. YONTEM
const bilgiVer = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;

console.log(bilgiVer("Mehmet", "Cakmak", 1989));
