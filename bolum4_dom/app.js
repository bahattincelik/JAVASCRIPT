const r = document.getElementById("r").value;
// ! Class'lara erişim için .class_adı
// ! id'li bir HTML elemanına erisim için ise #id
const h = document.querySelector(".h").value;

const hesapla = (r, h) => Math.PI * r * r * h;
