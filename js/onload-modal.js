let modal = document.getElementById('audio-modal');
let btnOn = document.getElementById('audio-modal-btn-on');
let btnOff = document.getElementById('audio-modal-btn-off');
let btnMainOn = document.getElementById('audio-main-on');
let btnMainOff = document.getElementById('audio-main-off');

btnOn.onclick = function() {
  modal.style.display = 'none'
  document.getElementById('audio-bcg').play();
  btnMainOn.style.opacity = 0.6;
  btnMainOn.style.cursor = 'default';
}

btnOff.onclick = function() {
  modal.style.display = 'none';
  btnMainOff.style.opacity = 0.6;
  btnMainOff.style.cursor = 'default';

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    btnMainOff.style.opacity = 0.6;
    btnMainOff.style.cursor = 'default';
  }
}

btnMainOn.onclick = function(event) {
  document.getElementById('audio-bcg').play();
  btnMainOn.style.opacity = 0.6;
  btnMainOn.style.cursor = 'default';
  btnMainOff.style.opacity = 1;
  btnMainOff.style.cursor = 'pointer';
}

btnMainOff.onclick = function(event) {
  document.getElementById('audio-bcg').pause();
  btnMainOff.style.opacity = 0.6;
  btnMainOff.style.cursor = 'default';
  btnMainOn.style.opacity = 1;
  btnMainOn.style.cursor = 'pointer';
}

  