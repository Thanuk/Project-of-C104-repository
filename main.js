Webcam.set({
    img_format : "jpeg",
    jpg_quality : 100,
    height : 400,
    width : 400,
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function TakeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "picture" src = "' +data_uri+'"/>';
    });
}

console.log("ml5 version = ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gOAEfPrhh/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}