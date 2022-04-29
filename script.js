const _hou = document.getElementById("horas"),
    _min = document.getElementById("minutos"),
    _sec = document.getElementById("segundos");


var hou = null,
    min  = null,
    sec  = null;
/*var input = document.querySelector('horas');
var input_valor = input.value;*/

let tempo = 100;
// let cron = hou + min + sec;

var input_reset = document.getElementById("reseta");
var input_reset_value = input_reset.value;

var valor_hora = [];

/*let btn = document.querySelector("#envia");

btn.addEventListener("click", function(e)){
    e.preventDefault();
    let name = document.querySelector("#horas");
    let value = name.value;
}*/

function start() {
    debugger;
    console.log(1);
    cron = setInterval(() => {
        watch();
    }, tempo);
}

function pause() {
    console.log(2);
    clearInterval(cron);
}

function cont() {
    console.log(3);
    cron = setInterval(() => {
        watch();
    }, tempo);
}

function reset() {
    debugger;
    console.log(4);
    document.getElementById("display_cronometro").innerText = " 00:00:00";
    _hou.value = "";
    _min.value = "";
    _sec.value = "";
    hou = null;
    min = null;
    sec = null;
    clearInterval(cron);
}

function envia() {

    let hou_valor = parseInt(_hou.value);
    let min_valor = parseInt(_min.value);
    let sec_valor = parseInt(_sec.value);

    hou = hou_valor,
        min = min_valor,
        sec = sec_valor;

    if (hou_valor < 10) {
        if (hou_valor == "") {
            hou_valor = "00";
        } else {
            hou_valor = `0${hou_valor}`;
        }
    }
    if (min_valor < 10) {
        if (min_valor == "") {
            min_valor = "00"
        } else {
            min_valor = `0${min_valor}`;
        }
    }
    if (sec_valor < 10) {
        if (sec_valor == "") {
            sec_valor = "00"
        } else {
            sec_valor = `0${sec_valor}`;
        }
    }
    document.getElementById("display_cronometro").innerText =
        hou_valor + ":" + min_valor + ":" + sec_valor;

}

function watch() {
    if(hou != null && min != null && sec != null){
        sec--;

    if (sec == 00) {
        sec = 60;
        min--;

        if (min == 00) {
            min = 60;
            hou--;
        }
    }

    let format =
        (hou < 10 ? "0" + hou : hou) +
        ":" +
        (min < 10 ? "0" + min : min) +
        ":" +
        (sec < 10 ? "0" + sec : sec);
    document.getElementById("display_cronometro").innerText = format;

    console.log(sec, min, hou);
    }
}
