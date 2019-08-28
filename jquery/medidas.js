$(document).ready(function(){ 

    var titulo = $('#titulo');
    var info = $('#info');

    info.append('Ancho: ' + titulo.width() + '<br />');//ancho

    info.append('Ancho: ' + titulo.innerWidth() + '<br />');//ancho mas padding

    info.append('Ancho: ' + titulo.outerWidth() + '<br />');//ancho mas padding + borde 

    info.append('Ancho: ' + titulo.outerWidth(true) + '<br />');//ancho mas padding + borde + margin

    info.append('Alto: ' + titulo.outerHeight(true) + '<br />');//ancho mas padding + borde + margin
       

    
});