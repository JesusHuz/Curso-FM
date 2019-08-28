$(document).ready(function(){
//efecto menu
    $('.menu a').each(function(index, elemento){ //each es a cada elementos por separado y el index es como el vetor la posicion
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });
//efecto header

    if( $(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }
//scroll elementos menu
    var acercaDe = $('#acerca-de').offset().top;
    var menu = $('#platillo').offset().top;
    var  galeria = $('#galeria').offset().top;
    var  ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100//numero para mejor la posicion donde caera aumenta creo
        }, 500);
    });

    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:menu//numero para mejor la posicion donde caera aumenta creo
        }, 500);
    });

    $('#btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria//numero para mejor la posicion donde caera aumenta creo
        }, 500);
    });

    $('#btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion//numero para mejor la posicion donde caera aumenta creo
        }, 500);
    });
});