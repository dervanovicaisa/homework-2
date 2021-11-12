var images = [
  "https://i.ibb.co/5cyWgrR/86569ff32bf66e39dcd79d66fcfae814.jpg",
  "https://i.ibb.co/wczYVKJ/640x640.jpg",
  "https://i.ibb.co/ZcDKnhD/ETOWi-A5-WAAAgf5-P.jpg",
  "https://i.ibb.co/NVZ7hm2/Selena-Gomez-De-Una-Vez-Official-Single-Cover.png",
  "https://i.ibb.co/7Gvt4Fg/Uyire-1998-500x500.jpg",
];

var num = 0;

function next() {
  let slider = document.getElementById("slide");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function previous() {
  let slider = document.getElementById("slide");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}

document.onkeydown = function (event) {
  var e = event || window.event;
  if (e.keyCode == "37") {
    //LEFT
    previous();
  } else if (e.keyCode == "39") {
    //RIGHT
    next();
  }
};

document.getElementById("slide").addEventListener("click", function () {
  this.style.width = "90%";
  this.style.height = "90%";
  let container = document.getElementById('container');
  let createElementX = document.createElement("button");
  createElementX.className = "x";
  createElementX.innerHTML = "X";
  createElementX.style.height = '20px';
  container.append(createElementX);
  createElementX.addEventListener("click", function () {
    document.getElementById("slide").style.width = "100%";
    this.style.display = "none";
  });
});

document.getElementById("next").addEventListener("click", next);
document.getElementById("prev").addEventListener("click", previous);
