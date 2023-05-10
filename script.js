const text = ["Web Development","3D Modeling","Hardware repairs", 'App Development'];
let holder = document.getElementById("changing-text");  

function changeText() {
  var index = Math.floor(Math.random() * texts.length);
  var text = texts[index];
  holder.innerHTML = text;
}

setInterval(changeText, 2000);


