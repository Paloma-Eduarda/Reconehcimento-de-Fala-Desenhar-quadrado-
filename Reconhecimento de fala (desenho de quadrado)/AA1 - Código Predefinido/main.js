var x = 0;
var y =0;

var controle = "";
var reconhecimentoFala = window.webkitSpeechRecognition;
var reconhecimento = new reconhecimentoFala();

function start(){
reconhecimento.start();
}
reconhecimento.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A fala foi reconhecida como " + content;

    if(content == "quadrado"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML = "Desenhando Quadrado! ";
        controle = "desenhe";
    }
}
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if(controle=="desenhe"){
        rect(x,y,50,50);
    }
    
}