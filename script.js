// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function abrirlivro() {
    window.open("https://twitter.com/knj_brasil/status/1684324789807185924", "_blank");
}

function doe() {
  window.open("https://twitter.com/demonarmys/status/1659559586846613504", "_blank");
}
