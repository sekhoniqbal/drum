const pads = [
  {"key":"Z","src":"sounds/52[kb]crunchsd.aif.mp3","name":"crunchsd"},
  {"key":"X","src":"sounds/57[kb]flange_down_sd.aif.mp3","name":"flange down sd"},
  {"key":"Q","src":"sounds/111[kb]brushingsd.aif.mp3","name":"brushingsd"},
  {"key":"W","src":"sounds/12[kb]elecsnare.aif.mp3","name":"elecsnare"},
  {"key":"E","src":"sounds/15[kb]big-fat-snare2.aif.mp3","name":"big fat snare2"},
  {"key":"A","src":"sounds/16[kb]filtosd.aif.mp3","name":"filtosd"},
  {"key":"S","src":"sounds/289[kb]chunky-big-snare1.wav.mp3","name":"chunky big snare1"},
  {"key":"D","src":"sounds/49[kb]flangeup_sd.aif.mp3","name":"flangeup sd"},
  {"key":"C","src":"sounds/60[kb]clapsd.aif.mp3","name":"clapsd"}
];



var htmlarr = pads.map(a=>`<div id="${a.name}" onclick="play(event)" class="drum-pad">${a.key}<audio class="clip" id="${a.key}" alt="${a.name}" src="${a.src}">
</audio>
</div>`);
html = htmlarr.join("\n");

window.onload = function(){
  document.getElementById("pads").innerHTML=html;
};

function play(event){

  var element = event.target;
  element.firstElementChild.currentTime=0;
  element.firstElementChild.play();
  document.getElementById("display").innerHTML=pads.filter(a=>a.name==element.id)[0].name.toUpperCase();
}
window.onkeypress = function(event){
  var key = event.key.toUpperCase();
  if(["Q","W","E","A","S","D","Z","X","C"].indexOf(key)!=-1)
  var element = document.getElementById(key);
  element.currentTime=0;
  element.play();
  document.getElementById("display").innerHTML=pads.filter(a=>a.name==element.parentElement.id)[0].name.toUpperCase();
  };
