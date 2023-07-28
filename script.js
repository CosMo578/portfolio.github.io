const text = ["Web Development","3D Modeling","Hardware repairs", 'App Development'];
let holder = document.getElementById("changing-text");  

function changeText() {
  let index = Math.floor(Math.random() * texts.length);
  let text = texts[index];
  holder.innerHTML = text;
}

setInterval(changeText, 2000);


