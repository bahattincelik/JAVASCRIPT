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
console.log(toplamFiyat, kola); //Birden fazla degiskenin degerini yazdirmak icin , kullanilir
