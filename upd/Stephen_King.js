document.addEventListener('DOMContentLoaded', () => {
    notification();
  });

function notification() {
    if (console.log(device.mobile())) || (console.log(device.tablet())) {
         window.location.href = "error.html"
         alert("Данный сайт доступен только с ПК!")
    }
}

function drop() {
    document.getElementById("main-page-anchors").className = "visible";
}
function hide() {
    document.getElementById("main-page-anchors").className = "invisible";
}
function calc() {
    result=0;
    var s='';
    total=0;
    if (f.b1.value>0) {
        result = result + 599*f.b1.value;
    }
    if (f.b2.value>0) {
        result = result + 799*f.b2.value;
    }
    if (f.b3.value>0) {
        result = result + 699*f.b3.value;
    }
    if (f.b4.value>0) {
        result = result + 399*f.b4.value;
    }
    if (f.b5.value>0) {
        result = result + 749*f.b5.value;
    }
    if (f.b6.value>0) {
        result = result + 649*f.b6.value;
    }
    if (f.b7.value>0) {
        result = result + 499*f.b7.value;
    }
    if (f.b8.value>0) {
        result = result + 899*f.b8.value;
    }
    if (f.b9.value>0) {
        result = result + 649*f.b9.value;
    }
    if (f.b10.value>0) {
        result = result + 599*f.b10.value;
    }
    total = Number(f.b1.value) + Number(f.b2.value) + Number(f.b3.value) + Number(f.b3.value) + Number(f.b4.value) + Number(f.b5.value) + Number(f.b6.value) + Number(f.b7.value) + Number(f.b8.value) + Number(f.b9.value) + Number(f.b10.value);
    if (document.getElementById("d1").checked) {
        total = total *100;
    }
    if (document.getElementById("d2").checked) {
        total = total *300;
    }
    if ((document.getElementById("d1").checked) || (document.getElementById("d2").checked)) {
    result = result + total;
    }
    f.sum.value=String(result) + " ₽";
}
function city_live() {
    if (document.getElementById("d1").checked) {
        f.city.value = "Москва";
        f.city.disabled = true;
    }
    if (document.getElementById("d2").checked) {
        f.city.value = " ";
        f.city.disabled = false;
    }
}
function picture() {
    var s = "Книги/" + f.book.value + ".jpeg";
    f.pict.src = s;
}
