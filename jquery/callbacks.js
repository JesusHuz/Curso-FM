$(document).ready(function(){ 

    //function saludo(){
    //    alert('hola');
    //}
//
    //$('#ejecutar').on('click',function(){
    //    $('.caja').slideUp(1000, function(){
    //        $(this).slideDown(1000);
    //    });
    //});

    $('#ejecutar').on('click',function(){
        $('.caja').slideUp(300);
        alert('animacion iniciada');
        $('.caja').slideDown(300);
        
    });
    //sin callback se ejecuta inmediatamente despues de slideup mientras que arriba se ejecuta despues de finalizar el slideup
});