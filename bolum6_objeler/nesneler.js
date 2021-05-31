// ======================================================
//            NESNELER (OBJECTS)
//======================================================
// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.
// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.
// ! OBJECT
// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.

const insan = {
  ad: "Can",
  soyad: "Yilmaz",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "C++", "SQL", "Phyton"],
};
console.log(insan);

//.dot notasyonu ile verilere erisilebilirs
console.log(insan.ad);

//Koseli parantez erisimi (koseli parantez icerisine bir expression yazmak mumkundur)
console.log(insan["yas"]);

const yazi = "Adim";
console.log(` ${yazi} ${insan.ad} ve yasim ${insan["yas"]} dir`);

const bilgiSecimi = prompt(
  "Insan nesnesi hakkinda ne bilmek istersin? Seciminizi giriniz: ad, soyad, yas, meslek ve diller "
);

//console.log(insan[bilgiSecimi]);
if (insan[bilgiSecimi]) {
  console.log(insan[bilgiSecimi]);
} else {
  console.log(
    "Yanlis secim. Lutfen ad, soyad, meslek, diller, yas seklinde giriniz"
  );
}

insan.konum = "Turkiye";
insan.email = "a@gmail.com";
insan["dogumTarihi"] = 1990;
console.log(insan);
