
var box = document.getElementById('hours')
var box2 = document.getElementById('minutes')
var box3 = document.getElementById('seconds')

var relogio = setInterval(function time() {
    var hora = new Date().getHours()
    var minutes = new Date().getMinutes()
    var seconds = new Date().getSeconds()

    if (hora < 10) hora = '0' + hora;
    if (minutes < 10) minutes = '0' + minutes;

    box.querySelector('span').textContent = hora
    box2.querySelector('span').textContent = minutes
    box3.querySelector('span').textContent = seconds

})