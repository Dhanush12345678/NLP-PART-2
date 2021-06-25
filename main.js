var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML = "";
recognition.start();    
}

recognition.onresult = function(event)
{
console.log(event);
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content == "take my selfie")
{
console.log("Taking Selfie");
speak()
}
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Hello Buddy , Taking Your Selfie In Five Seconds.This App Is Designed By Dhanush";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
}

camera = document.getElementById("camera");
Webcam.set(
    {
        width : 360, 
        height : 250, 
        image_format : 'jpeg' , 
        jpeg_quality : 90,
    });