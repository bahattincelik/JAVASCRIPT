const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

const liste = document.createElement("ul");
liste.className = "liste";
document.querySelector(".liste-div").appendChild(liste);

const listeyeEkle = function (satir) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(satir));
  liste.appendChild(li);
};

const diziyiListeyeEkle = function () {
  for (let i in maaslar) {
    listeyeEkle(maaslar[i]);
  }
};

diziyiListeyeEkle();

document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("Lutfen veri girisi yapiniz");
  } else {
    //inputtan gelen veriyi diziye kaydet
    maaslar.push(Number(satir.value));
    //inputten gelen gelen veriyi listeye yazdir
    listeyeEkle(satir.value);
    //islemler bittikten sonra inputta kalan veriyi sil
    satir.value = "";
  }
};

document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi");
  } else {
    maaslar.pop();
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastElementChild);
  }
};
