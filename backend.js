var keys = ['1','2','3','4','5','6','7','8','9','0',
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R','S','T',
            'U','V','W','X','Y','Z'];
var isKeySelected = new Array(36);
isKeySelected.fill(false);
document.addEventListener('keydown', playKey);
function startGame(){
    isGameStarted = true;
    var key = Math.floor(Math.random()*36);
    document.getElementById("Key"+keys[key]).style.borderColor = 'cyan';
    document.getElementById("Key"+keys[key]).style.color = 'cyan';
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
            document.getElementById("Key"+keys[keyVal]).style.borderColor = '#f33';
            document.getElementById("Key"+keys[keyVal]).style.color = '#f33';
            document.getElementById("Key"+keys[keyVal]).style.backgroundColor = 'black';
            document.getElementById("buzzer").currentTime = 0;
            document.getElementById("buzzer").play();
        }
    }
}

function normal(){
    for(var i in keys){
        document.getElementById("Key"+keys[i]).style.borderColor = 'black';
        document.getElementById("Key"+keys[i]).style.color = 'black';
        document.getElementById("Key"+keys[i]).style.backgroundColor = 'cyan';
    }
}