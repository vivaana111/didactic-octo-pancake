function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FDPkj7bb1/', modelReady);
}
function modelReady(){
    classifier.classify(gotResults) ;
}
function gotResults (error , results){
if (error) {
    console.error(error) ;

}
else{
    console.log (results) ;
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML = 'I can hear'+ results[0].label;
    document.getElementById("result_confidence").innerHtml = 'Accuracy'+(results[0].confidence * 100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rbg("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('bird')
    img1 = document.getElementById('cat')
    img2 = document.getElementById('dog')
    img3 = document.getElementById('owl')

    if(results[0].label=="hoot"){
        img.src='owl.gif';
    }
    else if(results[0].label=="chirp"){
        img.src='bird.gif';
       
    }
    else if(results[0].label=="bark"){
        img.src='dog.gif';
       
    }
    else{
        img.src='cat.gif';
       
    }

}
}