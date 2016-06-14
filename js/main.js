var contactos = ['Raymi', 'Mariana', 'Ana', 'Rodulfo', 'Andrea', 'Maria', 'Katy', 'Aldo'];
var imagenes = ['raymi', 'mariana', 'anamaria', 'rodulfo', 'andrea', 'mariapaula', 'katy', 'aldo'];
var chat;


$(document).ready(function() {
    $('.form-control').click(function() {
        var contactos = $('#inputNombre').val();
        console.log('el usuario escribio' + contactos);
        var chat = contactos[chat];
        console.log('El nombre es: ' + chat);
        if (nombre === chat) {
            nombres.splice(numeroAlAzar, 1);
            imagenes.splice(numeroAlAzar, 1);
            console.log('score :');
            score = score + 5;
            $('#score').text(score);
            desplegarNuevaJugada();
        } else {
            nombreAAdivinar != nombres[numeroAlAzar];
            alert('Sigue Intentando!!!!')
        }

    });
    desplegarNuevaJugada();
});


$('#inputMensaje').keypress(function(e) {

    if (e.which == 13) { // 13 es el codigo de la tecla ENTER

        var texto = $('#inputMensaje').val();
        console.log(texto);
        pintarMensaje(texto);
        $('#inputMensaje').val('');

    }

});