Webcam.set({
    width:350,
    height: 300,
    image_format: 'png',
    png_quality:90
});
var error = "error!";
var results = "result";

camera = document.getElementById("camera");
Webcam.attach('#camera');

console.log("a")







function take_snapshot()
{
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("b")
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Lnx9LNof8/model.json',modelLoaded);



function modelLoaded(){
    console.log("modelLoaded!");
}




function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
console.log("c")







function gotResult(error, results) {
    if(error){
        console.log(error);
     } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
     }
}
