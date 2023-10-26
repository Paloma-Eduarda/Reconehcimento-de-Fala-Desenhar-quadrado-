function setup() {
  canvas = createCanvas(300, 250);
  canvas.position(540,340);
  video = createCapture(VIDEO);
  video.hide();
  classificar = ml5.imageClassifier('MobileNet', modelLoaded);
}

function draw(){
  image(video, 0,0, 300,300);
  classificar.classify(video, gotResult);
}
function modelLoaded(){
  console.log("Modelo Carregado!!");
}
function gotResult(error, result){
    if(error){
      console.error(error);
    }else{
      document.getElementById("objeto").innerHTML = result[0].label;
      document.getElementById("precisao").innerHTML = result[0].confidence;
    console.log(result);
    }
}
