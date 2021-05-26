// Ac butonuna her tiklandiginda calisir.
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};

//resmin uzerinde mouse her geldiginde lamba_on resmini goster
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
});

//resmin uzerinde mouse her ayrildiginda lamba_off resmini goster
document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
});

//Klavye den her bir tusa basildiginda bu fonksiyon tetiklenecek
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");

  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");
h1.appendChild(yazi);
// sonDiv.appendChild(h1);
sonDiv.after(h1);
h1.className = "yeni-h1";
//Olusturdugumuz h1 elemanina bir class adi atadik.
// h1.style.marginTop = "20px";
// h1.style.color = "red";
// h1.style.textAlign = "left";

document.querySelector(".ekle").onclick = function () {
  // ekleme yapılacak listeyi al
  const liste = document.querySelector(".liste");
  //input elemanina girilen yeni satirin degerini al
  const satir = document.querySelector(".dil").value;
  // yeni girilen satiri saklamak icin bir li olusturduk.
  const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  const textNode = document.createTextNode(satir);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  liste.appendChild(yeniLi);
};

document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");

  liste.removeChild(liste.lastElementChild);
};
