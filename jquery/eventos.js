$(document).ready(function(){ 

    var boton = $('#boton');//un tip importantes para usarlo y mejora el rendiemiento 
    var boton1 = $('#desactivar');

   //$('#boton').click(function(){      
   //    alert('hola');
   //});

    //function saludos(){
    //    alert('Saludos')
    //}

    //boton.click(saludos);

    //boton.on('click',saludos);//forma moderna de ponerlo

    //boton.on('mouseenter', function(){
    //    document.body.style.background = '#000';//se puede con jquery tambien
    //});
//
    //boton.on('mouseleave', function(){
    //    document.body.style.background = '#fff';//se puede con jquery tambien cuando salga del boton pinta en blanco
    //});

    //eleminar eventos
    //boton.on('click',function(){
    //    alert('Saludos');
    //});
//
    //boton1.on('click',function(){
    //    boton.off('click');
    //});

    //cambiar la ufncion del link 
    $('a').on('click',function(e){
        e.preventDefault();
    });
});