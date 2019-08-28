$(document).ready(function(){ 

    //$(selector).animate({parametros},velocidad,callback);
    //$('#boton').on('click',function(){
    //    $('#caja').animate({
    //        width: '300px',
    //        opacity: '0,2'
    //    }, 2000, function(){
    //        alert('Hola animacion');
    //    });
    //});

    //no hya naimaciones de color es con un puggling que tiene jquery asi que se soluciona usando css
    $('#boton').on('click',function(){
       $('#caja').animate({
         
       // width: '+=300px'
        marginLeft: '+=20px'

       }, 1000, function(){
          // alert('Hola animacion');
       });
       $('.caja').toggleClass('animacion');
       $('.caja').animate({
           marginLeft: '-=50px'
       },300);

    });
    
});