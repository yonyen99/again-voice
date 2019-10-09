const synth = window.speechSynthesis;
const  text = document.querySelector("#text");
const voices = document.querySelector("#voice");
let voiceList = [];
const getVoice = () =>{
    voiceList = synth.getVoices();
    voiceList.forEach( voice =>{
        const option = document.createElement("option");
        option.textContent = voice.name +"("+ voice.lang +")";
        option.setAttribute('data-lang',voice.lang);
        option.setAttribute('data-name',voice.name);
        voices.appendChild(option);
    });
}
getVoice();
if(synth.onvoiceschanged !==undefined){
    synth.onvoiceschanged = getVoice;
}
//speak
 const speak = () =>{
     if(text.value !== ""){
         const speakText = new SpeechSynthesisUtterance(text.value);
         const selectedVoice = voices.selectedOptions[0].getAttribute('data-name');
         voiceList.forEach(voice =>{
             if(voice.name === selectedVoice){
                 speakText.voice =voice;
             }
         })
         synth.speak(speakText);
     }
 }
 const btn = document.querySelector('button');
 btn.addEventListener('click',speak);
// addEventListener('keyup',speak);