//function for the overlays with artist videos and decriptions to appear and dissapear

function openDescription_MartinG() {
  document.getElementById("myNav_MartinG").style.width = "100%";
}

function closeDescription_MartinG() {
  document.getElementById("myNav_MartinG").style.width = "0%";
}

function openDescription_Marsh() {
  document.getElementById("myNav_Marsh").style.width = "100%";
}

function closeDescription_Marsh() {
  document.getElementById("myNav_Marsh").style.width = "0%";
}

function openDescription_Alan() {
  document.getElementById("myNav_Alan").style.width = "100%";
}

function closeDescription_Alan() {
  document.getElementById("myNav_Alan").style.width = "0%";
}

function openDescription_Avicii() {
  document.getElementById("myNav_Avicii").style.width = "100%";
}

function closeDescription_Avicii() {
  document.getElementById("myNav_Avicii").style.width = "0%";
}

function openDescription_Chains() {
  document.getElementById("myNav_Chains").style.width = "100%";
}

function closeDescription_Chains() {
  document.getElementById("myNav_Chains").style.width = "0%";
}

//adding auto plays and pause audios when clicked

let martin_audio = new Audio('Audios/Martin-Garrix.mp3')
let marsh_audio = new Audio('Audios/Marshmello.mp3')
let alan_audio = new Audio('Audios/Alan-Walker.mp3')
let avicii_audio = new Audio('Audios/Avicii.mp3')
let chains_audio = new Audio('Audios/Chainsmokers.mp3')

function playAudio1(){
  let audio=martin_audio;
  audio.loop=true;
  audio.play(); 
}

function pauseAudio1(){
  let audio =martin_audio
  audio.pause(); 
}

function playAudio2(){
  let audio=marsh_audio;
  audio.loop=true;
  audio.play(); 
}

function pauseAudio2(){
  let audio =marsh_audio
  audio.pause(); 
}

function playAudio3(){
  let audio=alan_audio;
  audio.loop=true;
  audio.play(); 
}

function pauseAudio3(){
  let audio =alan_audio
  audio.pause(); 
}

function playAudio4(){
  let audio=avicii_audio;
  audio.loop=true;
  audio.play(); 
}

function pauseAudio4(){
  let audio =avicii_audio
  audio.pause(); 
}

function playAudio5(){
  let audio=chains_audio;
  audio.loop=true;
  audio.play(); 
}

function pauseAudio5(){
  let audio =chains_audio
  audio.pause(); 
}