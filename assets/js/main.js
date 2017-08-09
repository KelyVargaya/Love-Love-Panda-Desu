var pictures = ["assets/img/a1.jpg",
                "assets/img/a2.jpg",
                "assets/img/a3.jpg",
                "assets/img/a4.jpg"];

var PicturesPanda = document.getElementById("PicturesPanda");

for (var i = 0; i < pictures.length; i++) {
    var LovePanda = document.createElement("img");
    LovePanda.src = pictures[i];
    LovePanda.setAttribute("class","bordes");
    allPictures.appendChild(LovePanda);
}