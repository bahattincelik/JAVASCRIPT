// ======================================================
//            DİZİLERDE İTERASYON
// ======================================================
// const koordinatlar = [120, 100, -100, 220, 330];
// let negatif = 0;
// let pozitif = 0;
// ÖRNEK: FOR DÖNGÜLERİN DİZİLER İLE KULLANIIM
// for (let i = 0; i < koordinatlar.length; i++) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }
// FOR IN DONGUSU
// for (let i in koordinatlar) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }
// console.log(
//   `Negatif Koordinat Sayısı: ${negatif} Pozitif Koordinat sayisi ${pozitif}`
// );
//---------------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// saklandığı varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak
// ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// yazınız. Eğer o türden bir hayvan yok ise bulunamadığını yazdırsın.
//----------------------------------------------------------------
// const hayvanlar = [“fil”, “deve”, “kuş“, “deve”, “fare”, “kedi”, “deve”];
// const ara = prompt(“aramak istenilen hayvan türünü giriniz:“).toLowerCase();
// const bulDondur = function () {
//   let hayvanSayisi = 0;
//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) {
//       hayvanSayisi++;
//     }
//   }
//   return hayvanSayisi;
// };
// const sayi = bulDondur(ara);
// sayi == 0
//   ? console.log(“Aradiginiz hayvan bulunamadi”)
//   : console.log(`Aradiginiz ${ara} ’den ${sayi} adet bulunmaktadir`);
//  =========   FOR OF DONGUSU ===========
// for of dongusu for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
// let arabalar = [“BMW”, “Volvo”, “Mini”];
// let yazı = “”;
// for (let i of arabalar) {
//   console.log(i);
//   yazı += i + ” “; // i:  dizinin i. elemani demektir.
// }
// console.log(yazı);
//  =========   FOREACH DONGUSU ===========
let ogrenciler = ["John", "Ali", "Can"];
function yazdır(a) {
  console.log(a);
}
ogrenciler.forEach(yazdır);
ogrenciler.forEach((x) => console.log(x));
// Toplama örneği
const fiyatlar = [200, 300, 125, 450, 333, 123];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f));
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;
toplam = 0;
fiyatlar.forEach((a, i, d) => {
  toplam += a;
  console.log(` ${i} . iterasyon: ${toplam}`);
});
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;
// fiyatlar dizisinde her bir fiyata %10 zam yapalım.
// const fiyatlar = [200, 300, 125, 450, 333, 123];
const yenifiyat = [];
fiyatlar.forEach((d, i) => (yenifiyat[i] = (d * 1.1).toFixed(2)));
console.log(yenifiyat);
