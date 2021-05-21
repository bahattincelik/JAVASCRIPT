// ** Konsolda mesaj vermek için console.log() fonksiyonu kullanılır.
console.log("Hello javascript");
console.log("Javascript javadan kolay bir dildir..");
console.error("Bu bir hatadır.");
console.warn("Bu bir uyarıdır");

// alert("Dikkat"); // ? Ekrana pop-up mesaj çıkarır.

// ** ======================= DEĞİŞKEN TANIMLAMA ======================

//**  -----  VAR -----
// ? var keyword ile değişken tanımlanabilir.
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

var pi = 3.14;
console.log(pi);
console.log(typeof pi); // ? Number

pi = "3";
console.log(pi);
console.log(typeof pi); // ? String

pi = true;
console.log(pi);
console.log(typeof pi); // ? Boolean

// ** değişken tanımlama keyword'u kullanılmasa da değişken tanımlanmış oluyor.
isim = "Ahmet";
console.log(isim);
console.log(typeof isim); // ? String

isim = 4;
console.log(isim);
console.log(typeof isim); // ? Number

//**  -----  CONST -----
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).

// const piSayisi = 3.14;

// console.log(piSayisi);

// piSayisi = 3; // ! Hata const değişkene sonradan değer atılamaz.
// console.log(piSayisi); // ! Hata const değişkene sonradan değer atılamaz.

//**  -----  LET -----

//? Eger ki degiskenimizin degerinin degsimesi gerkiyor ise  const kullanamayiz. Bunun yerine let kullanabiliriz.

// ! LET Block scope bir degiskendir VAR Global scope bir tanimlamadir.
// * Block scope sadece tanimli oldugu alanda gecerlidir.
let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa"; //Cift Tirnak
let isim2 = "Ahmet"; //Tek Tirnak
let isim3 = `Alican`; //Backthick
console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

const sucuk = 40;
const sakiz = 2;
const kola = 5;
let toplamFiyat = sucuk + sakiz + kola;
toplamFiyat++;
toplamFiyat += 50;
console.log(toplamFiyat, kola); // ! Birden fazla degiskenin degerini yazdirmak icin , kullanilir
console.log("TOPLAM : ", toplamFiyat);

// ! + operatoru string birlestirme islemi de gerceklestirir
const ad = "Can";
const soyAd = "Canan";
console.log(ad + " " + soyAd);

const s1 = 7,
  s2 = "7";

console.log(s1 + s2);

const ad1 = "Mesut";
const yas = 55;

//Template
console.log("Benim Adim " + ad1 + " " + "yasim " + " " + yas + " dir");
console.log(`Benim Adim ${ad1} yasim ${yas} dir`);

const yil = 2021;
const dogumTarihi = 1980;
const sene = yil - dogumTarihi;
console.log("YAŞ: " + sene);
// ! console.log("YAŞ: " + yıl - dogumTarihi);//! hata
console.log("YAŞ: " + (yil - dogumTarihi));
console.log(`YAS: ${yil - dogumTarihi} `); // *Template Literal ile yazdirma.

const taban = 2;
const us = 3;

const sonuc = taban ** us; //? Us alma operatoru
console.log(sonuc);

//Mod Alma %

const sayi = 123;
const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100);
console.log(
  `Sayi : ${sayi} => Birler Basamagi ${birler}, Onlar Basamagi ${onlar}, Yuzler Basamagi ${yuzler}`
);
console.log("Birler : " + birler);
console.log("Onlar : " + onlar);
console.log("Yuzler : " + yuzler);

// * KARSILASTIRMA OPERATORLERI
// ! 3'lu karsilastirma operatoru kullanildiginda hem veri tipi hem de icerik kontrolu yapilir
const sayi1 = 100;
const sayi2 = "100";

console.log(typeof sayi1, typeof sayi2);

console.log(sayi1 == sayi2);
console.log(sayi1 === sayi2);

const x = true;
const y = true;
const z = undefined;

console.log(x && y && z);

// ** ================== TERNARY ===============

const name1 = prompt("Adinizi Giriniz");
const age = +prompt("Yasinizi Giriniz");

age >= 18
  ? console.log(`${name1} ehliyet alabilir `)
  : console.log(`${name1} ehliyet alamaz `);

//? const age = Number(prompt("Yasinizi Giriniz"));
// console.log("Yasiniz : " + age);
// console.log(typeof age);

const result =
  age >= 18 ? `${name1} ehliyet alabilir ` : `${name1} ehliyet alamaz `;

console.log(result);
