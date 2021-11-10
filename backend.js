var keys = ['1','2','3','4','5','6','7','8','9','0',
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R','S','T',
            'U','V','W','X','Y','Z'];
var colors = ['#0ff','#cd0','#f4b','#ade','#fc9','#8e9'];
var colorCounter = 0;
var color = colors[0];
var root = document.querySelector(':root');
var isKeySelected = new Array(36);
isKeySelected.fill(false);
document.addEventListener('keydown', playKey);

function startGame(){
    isGameStarted = true;
    var key = Math.floor(Math.random()*36);
    document.getElementById("Key"+keys[key]).style.borderColor = color;
    document.getElementById("Key"+keys[key]).style.color = color;
    document.getElementById("Key"+keys[key]).style.backgroundColor = 'black';
    isKeySelected[key] = true;
}

function playKey(e){
    if(keys.indexOf((e.key).toUpperCase()) != -1){
        var keyVal = keys.indexOf((e.key).toUpperCase());
        if(isKeySelected[keyVal]){
            document.getElementById("buzzer").pause();
            normal();
            isKeySelected[keyVal] = false;
            startGame();
            var coin = Math.floor(Math.random()*17);
            document.getElementById("coin"+coin).currentTime = 0;
            document.getElementById("coin"+coin).volume = 0.1;
            document.getElementById("coin"+coin).play();
        }
        else{
            document.getElementById("Key"+keys[keyVal]).style.borderColor = 'orangered';
            document.getElementById("Key"+keys[keyVal]).style.color = 'orangered';
            document.getElementById("Key"+keys[keyVal]).style.backgroundColor = 'black';
            document.getElementById("buzzer").currentTime = 0;
            document.getElementById("buzzer").play();
        }
    }
}

function normal(){
    for(var i in keys){
        document.getElementById("Key"+keys[i]).style.borderColor = color;
        document.getElementById("Key"+keys[i]).style.color = 'black';
        document.getElementById("Key"+keys[i]).style.backgroundColor = color;
        isKeySelected[i] = false;
    }
}

function changeColor(){
    colorCounter++;
    colorCounter = colorCounter%(colors.length);
    color = colors[colorCounter];
    root.style.setProperty('--primary-color', color);
    normal();
    startGame();
}