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
h1.style.marginTop = "20px";
h1.style.color = "red";
h1.style.textAlign = "left";

document.querySelector(".ekle").onclick = function () {};
