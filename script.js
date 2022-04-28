const _hou = document.getElementById('horas'),
      _min = document.getElementById('minutos'),
      _sec = document.getElementById('segundos');
     

/*var input = document.querySelector('horas');
var input_valor = input.value;*/

let tempo = 100;
let cron = hou + min + sec;


var input_reset = document.getElementById('reseta');
var input_reset_value = input_reset.value;

var valor_hora = [];

/*let btn = document.querySelector("#envia");

btn.addEventListener("click", function(e)){
    e.preventDefault();
    let name = document.querySelector("#horas");
    let value = name.value;
}*/


function start(){
    var hou = parseInt(_hou.value),
        min = parseInt(_min.value),
        sec = parseInt(_sec.value);
    console.log(1);
    cron = setInterval(() => {watch(); }, tempo);
}

function pause(){
    console.log(2);
    clearInterval(cron);
}

function cont(){
    console.log(3);
    cron = setInterval(() => {watch(); }, tempo);

}

function reset(){
    console.log(4);

    valor_hora = [];
    document.getElementById("display_cronometro").innerText = valor_hora;
    clearInterval(cron);
    
}


function envia(){
    debugger;
    const hou_valor = _hou.value;
    const min_valor = _min.value;
    const sec_valor = _sec.value;
    document.getElementById("display_cronometro").innerText = hou_valor + ':' + min_valor + ':' + sec_valor;
    document.getElementById('horas').innerText = hou_valor;
    document.getElementById('minutos').innerText = min_valor;
    document.getElementById('segundos').innerText = sec_valor;
}



function watch(){
    sec --;

    if(sec == 00){
    sec = 60;
    min --;
    
    if(min == 00){
    min = 60;
    hou--
    }
    }

    let format = (hou < 10 ? "0" + hou : hou) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec: sec);
    document.getElementById('display_cronometro').innerText = format;

    console.log(sec, min, hou);
}


