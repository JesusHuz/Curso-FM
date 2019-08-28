$(document).ready(function(){ 

    $('#titulo').text('Encabezado Modificado');//mpdifca el texto

    $('#titulo').html('<u>Encabezado Modificado</u>');//mpdifca el texto con html

    var nombre = $('#nombre');

    nombre.on('change', function(){
        $('#titulo').text(nombre.val());//.val acede al valor
    });

    $('#enlace').text('Enlace modificado');

    $('#enlace').attr('herf','www.google.com');//modifica el atributo(el atrivuto,valor)

    $('#enlace').attr({  //modifica multiples atributos
        'class':'azul',
        'target': '_black'
    });


});