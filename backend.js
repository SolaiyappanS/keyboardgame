var keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
keys.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M");
keys.push("N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

var colors = ["#FFE98A", "#94F3E4", "#F582A7"];
var colorCounter = 0;
var color = colors[colorCounter];

var root = document.querySelector(":root");
root.style.setProperty("--primary-color", color);

var isKeySelected = new Array(36);
isKeySelected.fill(false);

document.addEventListener("keydown", playKey);

function startGame() {
  var key = Math.floor(Math.random() * 36);
  document.getElementById("Key" + keys[key]).style.borderColor = color;
  document.getElementById("Key" + keys[key]).style.color = color;
  document.getElementById("Key" + keys[key]).style.backgroundColor = "#212121";
  isKeySelected[key] = true;
}

function playKey(e) {
  if (keys.indexOf(e.key.toUpperCase()) != -1) {
    var keyVal = keys.indexOf(e.key.toUpperCase());
    if (isKeySelected[keyVal]) {
      document.getElementById("buzzer").pause();
      normal();
      isKeySelected[keyVal] = false;
      startGame();
      var coin = Math.floor(Math.random() * 17);
      document.getElementById("coin" + coin).currentTime = 0;
      document.getElementById("coin" + coin).volume = 0.1;
      document.getElementById("coin" + coin).play();
    } else {
      document.getElementById("Key" + keys[keyVal]).style.borderColor =
        "#FB5B5A";
      document.getElementById("Key" + keys[keyVal]).style.color = "#212121";
      document.getElementById("Key" + keys[keyVal]).style.backgroundColor =
        "#FB5B5A";
      document.getElementById("buzzer").currentTime = 0;
      document.getElementById("buzzer").play();
    }
  }
}

function normal() {
  for (var i in keys) {
    document.getElementById("Key" + keys[i]).style.borderColor = color;
    document.getElementById("Key" + keys[i]).style.color = "#212121";
    document.getElementById("Key" + keys[i]).style.backgroundColor = color;
    isKeySelected[i] = false;
  }
}

function changeColor() {
  colorCounter++;
  colorCounter = colorCounter % colors.length;
  color = colors[colorCounter];
  root.style.setProperty("--primary-color", color);
  normal();
  startGame();
}
