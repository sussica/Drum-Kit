var jinxAudio = {
  "1": new Audio('sounds/Jinx_Select.ogg'),
  "2": new Audio('sounds/jinx.wav'),
  "3": new Audio('sounds/Jinx.attack08.ogg'),
  "Q": new Audio('sounds/059_jinx_base_qattack_oc_01.wav'),
  "W": new Audio('sounds/093_jinx_base_w_oc_02.wav'),
  "E": new Audio('sounds/047_jinx_base_e_triggered_oh_02.wav'),
  "R": new Audio('sounds/079_jinx_base_r_oc_01.wav')
};

var last=null;

window.onkeyup = function(event) {
  var keyPressed = event.key.toUpperCase();

  if (jinxAudio[keyPressed]) {
    if(last){last.pause();
    last.currentTime = 0;}
    jinxAudio[keyPressed].play();
    last=jinxAudio[keyPressed];
  }

}
