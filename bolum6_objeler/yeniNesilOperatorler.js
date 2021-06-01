// ======================================================
//      YENİ NESİL OPERATORLER: DESTRUCTURING (OBJECT)
// ======================================================
// ES6 ile birlikte bir dizi ya da nesnenin içerisindeki
// elemanlar kolaylıkla ayrıştırılabilir.
const birey = {
  ad: "Can",
  konum: "Samsun",
  email: "can@gmail.com",
};
// 1.Yöntem Klasik yöntem
let ad1 = birey.ad;
let konum1 = birey.konum;
console.log(ad1, konum1);
ad1 = "Canan";
console.log(birey);
// * 2. YONTEM (OBJECT  DESTRUCTRING)
// ! Destructing kullanilirken "Key" isimleri nesneninki ile ayni olmalıdır aksi takdirde undefined degerler donerler*/
const { ad, konum, email } = birey; // birey nesnesindeki property'leri ayrıştırır.
console.log(ad, konum, email);
birey.ad = "Mustafa"; // birey nesnesindeki ad'ı günceller.
console.log(birey);
function bilgiAl() {
  return {
    id: "101",
    urunAdi: "Apple",
    fiyat: 15000,
  };
}
console.log(bilgiAl());
const { id, urunAdi, fiyat } = bilgiAl();
console.log(id, urunAdi);
// ======================================================
//    YENİ NESİL OPERATORLER: DESTRUCTURING(ARRAY)
// ======================================================

const isimler = ["Ahmet", "Can", "Veli"];

//Klasik yontem
const isim1 = isimler[0];
const isim2 = isimler[1];

//Dest
const [kisi1, kisi2, kisi3] = isimler; //Indeksleme mantigi var. kisi2 silinip yerine kisi3 yazilirsa kisi2 gelir
console.log(kisi1, kisi3);
