Webcam.set({
  width:350,
  height:300,
  image_format:"png",
  png_quality:100,
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie"src="'+data_uri+'"></img>'

  })
}
console.log("ml5 version: ",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ih2Tt7Gxu/model.json",modelLoaded)

function modelLoaded(){
  console.log("modelLoaded")

}
function check(){
  img=document.getElementById("selfie")
  classifier.classify(img,gotResult)
}
function gotResult(error,results){
  if(error){
    console.log(error)
  }
  ,{console.log(results)}
  

}