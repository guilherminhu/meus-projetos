window.onload = function() {

    var segundos = 0;
    var dezenas = 0;
    var appendDezenas =
    document.getElementById("dezenas")
    var appendSegundos =
    document.getElementById("segundos")
    var buttonIniciar = document.getElementById('iniciar');
    var buttonParar = document.getElementById('parar');
    var buttonReiniciar = document.getElementById('reiniciar');
    var Interval ;

    buttonIniciar.onclick = function() {

       clearInterval(Interval); 
       Interval = setInterval(startTimer, 10);
    }

    buttonParar.onclick = function() {
clearInterval(Interval);

    }

    buttonReiniciar.onclick = function() {

        clearInterval(Interval);
        segundos = "00";
        dezenas = "00";
        appendSegundos.innerHTML = segundos;
        appendDezenas.innerHTML = dezenas;
    }

    function startTimer () {

       dezenas++;
       
       if(dezenas <= 9) {
        appendDezenas.innerHTML = "0" + dezenas;
       }

       if (dezenas > 9) {
        appendDezenas.innerHTML = dezenas;
       }

       if (dezenas > 99) {
        console.log("segundos");
        segundos++;
        appendSegundos.innerHTML = "0" + segundos;
        dezenas = 0;
        appendDezenas.innerHTML = "0" + 0;
       }

       if (segundos > 9) {
        appendSegundos.innerHTML = segundos;
       }
    }




}