var sec = 0;
var min = 0;
var hours = 0;
var interval;

let start = document.getElementById('play');
start.addEventListener('click',iniciar);

let stop = document.getElementById('stop');
stop.addEventListener('click',parar);

let restart = document.getElementById('restart');
restart.addEventListener('click',limpar)


function watch() {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
  
    if (min == 60) {
      hours++;
      min = 0;
    }
    let n1 = document.getElementById("watch");
    n1.innerText = twoDigits(hours) + ":" + twoDigits(min) + ":" + twoDigits(sec);
  }
  

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function iniciar() {
  watch();
  interval = setInterval(watch, 1000);
}

function parar() {
  clearInterval(interval);
}

function limpar() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  hours = 0;

  document.getElementById("watch").innerText = "00:00:00";
}





