var pictures = ["assets/img/a1.jpg",
                "assets/img/a2.jpg",
                "assets/img/a3.jpg",
                "assets/img/a4.jpg"];

var PicturesPanda = document.getElementById("PicturesPanda");

for (var i = 0; i < pictures.length; i++) {
    var panda = document.createElement("img");
    panda.src = pictures[i];
    panda.setAttribute("class","bordes");
    PicturesPanda.appendChild(panda);
}