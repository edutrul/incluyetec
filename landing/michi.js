/* task: Replace dom elements to classes! */
/**
 * A simple Michi to play with two persons.
 * 
 * @author Eduardo Telaya Escobedo.
 * twitter account: @edutrul
 * gmail account: luis.eduardo.telaya@gmail.com
 */

/**
 * Execute when document is ready.
 */
$(document).ready(function() {
  
  
     var audiotypes={
        "mp3": "audio/mpeg",
        "mp4": "audio/mp4",
        "ogg": "audio/ogg",
        "wav": "audio/wav"
    }

    function ss_soundbits(sound){
        var audio_element = document.createElement('audio')
        if (audio_element.canPlayType){
            for (var i=0; i<arguments.length; i++){
                var source_element = document.createElement('source')
                source_element.setAttribute('src', arguments[i])
                if (arguments[i].match(/\.(\w+)$/i))
                    source_element.setAttribute('type', audiotypes[RegExp.$1])
                audio_element.appendChild(source_element)
            }
            audio_element.load()
            audio_element.playclip=function(){
                audio_element.pause()
                audio_element.currentTime=0
                audio_element.play()
            }
            return audio_element
        }
    }
$("#row-0 .cel-0").addClass('pressed');
playSound("row-0-cel-0.mp3");

var sleepTime = 350;
var gamepadInfo = document.getElementById("gamepad-info");
var ball = document.getElementById("ball");
var start;
var a = 0;
var b = 0;
var rAF = window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;
var rAFStop = window.mozCancelRequestAnimationFrame ||
  window.webkitCancelRequestAnimationFrame ||
  window.cancelRequestAnimationFrame;
window.addEventListener("gamepadconnected", function() {
  var gp = navigator.getGamepads()[0];
  gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
  gameLoop();
});
window.addEventListener("gamepaddisconnected", function() {
  gamepadInfo.innerHTML = "Waiting for gamepad.";
  rAFStop(start);
});
if(!('GamepadEvent' in window)) {
  // No gamepad events available, poll instead.
  var interval = setInterval(pollGamepads, 1);
}
function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if(gp) {
      gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
      gameLoop();
      clearInterval(interval);
    }
  }
}
function buttonPressed(b) {
  if (typeof(b) == "object") {
    return b.pressed;
  }
  return b == 1.0;
}
function gameLoop() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    //console.log(gamepads);

  if (!gamepads)
    return;
  var gp = gamepads[0];
  //console.log("GP object" + gp);
  
  // UP.
  if (buttonPressed(gp.buttons[12])) {
    pressed = $('.pressed');
    classCurrentCell = pressed.attr('class').split(' ')[0];
    if (pressed.parent().prev().find("." + classCurrentCell).length > 0) {
      $('.pressed').removeClass('pressed');
      current = pressed.parent().prev().find("." + classCurrentCell).addClass('pressed');
      
      classCurrentCell = current.attr('class').split(' ')[0];
      classCurrentRow = current.parent().attr('id').split(' ')[0];

      // Si esta marcado X - Jugar A.
      if (current.find("h1").hasClass("mark-x")) {
        playSound("casilla-ocupada-jugador-a-" + classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      // Si esta marcado O - Jugar B.
      else if (current.find("h1").hasClass("mark-o")) {
        playSound("casilla-ocupada-jugador-b-" + classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      // Si esta libre.
      else {
        playSound(classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      sleep(sleepTime);
    }
  }
  // DOWN.
  else if (buttonPressed(gp.buttons[13])) {
    pressed = $('.pressed');
    classCurrentCell = pressed.attr('class').split(' ')[0];
    if (pressed.parent().next().find("." + classCurrentCell).length > 0) {
      $('.pressed').removeClass('pressed');
      current = pressed.parent().next().find("." + classCurrentCell).addClass('pressed');
      
      classCurrentCell = current.attr('class').split(' ')[0];
      classCurrentRow = current.parent().attr('id').split(' ')[0];
      // Si esta marcado X - Jugar A.
      if (current.find("h1").hasClass("mark-x")) {
        playSound("casilla-ocupada-jugador-a-" + classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      // Si esta marcado O - Jugar B.
      else if (current.find("h1").hasClass("mark-o")) {
        playSound("casilla-ocupada-jugador-b-" + classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      // Si esta libre.
      else {
        playSound(classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      sleep(sleepTime);
    }
  }
  
  // RIGHT.
  if (buttonPressed(gp.buttons[15])) {
    pressed = $('.pressed');
    classCurrentCell = pressed.attr('class').split(' ')[0];
    if (pressed.next().length > 0) {
      $('.pressed').removeClass('pressed');
      current = pressed.next().addClass('pressed');
      
      classCurrentCell = current.attr('class').split(' ')[0];
      classCurrentRow = current.parent().attr('id').split(' ')[0];
      // Si esta marcado X - Jugar A.
      if (current.find("h1").hasClass("mark-x")) {
        playSound("casilla-ocupada-jugador-a-" + classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      // Si esta marcado O - Jugar B.
      else if (current.find("h1").hasClass("mark-o")) {
        playSound("casilla-ocupada-jugador-b-" + classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      // Si esta libre.
      else {
        playSound(classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      sleep(sleepTime);
    }
  }
  // LEFT.
  else if (buttonPressed(gp.buttons[14])) {
    pressed = $('.pressed');
    classCurrentCell = pressed.attr('class').split(' ')[0];
    if (pressed.prev().length > 0) {
      $('.pressed').removeClass('pressed');
      current = pressed.prev().addClass('pressed');
      
      classCurrentCell = current.attr('class').split(' ')[0];
      classCurrentRow = current.parent().attr('id').split(' ')[0];
      // Si esta marcado X - Jugar A.
      if (current.find("h1").hasClass("mark-x")) {
        playSound("casilla-ocupada-jugador-a-" + classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      // Si esta marcado O - Jugar B.
      else if (current.find("h1").hasClass("mark-o")) {
        playSound("casilla-ocupada-jugador-b-" + classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      // Si esta libre.
      else {
        playSound(classCurrentRow + "-" + classCurrentCell + ".mp3");
      }
      sleep(sleepTime);
    }
  }
  
  // 3.
  else if (buttonPressed(gp.buttons[2])) {
    pressed = $('.pressed');
    pressed.click();
    sleep(sleepTime);
  }
  
  var start = rAF(gameLoop);
};
  
  
  $('td').click(function() {
    if ($(this).find('h1').length == 0) {
      if ($('#players span').attr('id') == 'turn-a') {
        playSound("x.wav");
        $(this).append('<h1 class="mark-x" style="color: blue">X</h1>');
        verifyWinner();
        $('#players span').attr('id', 'turn-b');
        $('#players span').html('Es el turno del jugador B');
      }
      else {
        playSound("o.wav");
        $(this).append('<h1 class="mark-o" style="color: red">O</h1>');
        verifyWinner();
        $('#players span').attr('id', 'turn-a');
        $('#players span').html('Es el turno del jugador A');
      }
    }
  });
  
  function playSound(sound) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'music/' + sound);
    audioElement.setAttribute('autoplay', 'autoplay');
    $.get();
    audioElement.play();
  }
  
  /**
   * Verify winner.
   */
  function verifyWinner() {
    str_winner = null;
    if (winRowCell() == 'A' || winDiagonal() == 'A') {
      playSound("winner.wav");
      str_winner = 'El ganador es el jugador [A]';
      playSound("jugador-a-winner.mp3");
    }
    else if (winRowCell() == 'B' || winDiagonal() == 'B') {
      playSound("winner.wav");
      str_winner = 'El ganador es el jugador [B]';
      playSound("jugador-b-winner.mp3");
    }
    // tie
    else if ($('td h1').length == 9) {
      playSound("tie.wav");
      str_winner = 'Empate!';
      playSound("partida-empate.mp3");
    }
    
    // Show winner message and reload page.
    if (str_winner) {
      $('#players span').html(str_winner);
      alert(str_winner);
      document.location.reload();
    }
  }
  
  /**
   * Check if sb wins using row or cell.
   */
  function winRowCell() {
    player_a = 0;
    player_b = 0;
    isRow = true;
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if ($('#row-' + (isRow ? i : j) + ' .cel-' + (isRow ? j : i)).text() == 'X') {
          player_a++;
        }
        else if ($('#row-' + (isRow ? i : j) + ' .cel-' + (isRow ? j : i)).text() == 'O'){
          player_b++;
        }
      }
      if (player_a == 3) {
        return 'A';
      }
      else if (player_b == 3) {
        return 'B';
      }
      player_a = 0;
      player_b = 0;
      
      if (i == 2 && isRow) {
        isRow = false;
        i = 0;
      }
    }
  }
  
  /**
   * Check if sb win using diagonal left or right.
   * 
   * @return string
   *   A if player a wins, else B if player b wins.
   */
  function winDiagonal() {
    var player_str_a = 'X';
    var player_str_b = 'O';
    var player_str_turn = player_str_a;
    for (i = 0; i < 2; i++) {
      if ($('#row-0 .cel-0').text() == player_str_turn && 
          $('#row-1 .cel-1').text() == player_str_turn &&
          $('#row-2 .cel-2').text() == player_str_turn ) {
        return player_str_turn == player_str_a ? 'A' : 'B';
      }
      else if (
        $('#row-0 .cel-2').text() == player_str_turn && 
        $('#row-1 .cel-1').text() == player_str_turn &&
        $('#row-2 .cel-0').text() == player_str_turn
        ) {
        return player_str_turn == player_str_a ? 'A' : 'B';
      }
      var player_str_turn = player_str_b;
    }
  }
  
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
});
