$(document).ready(function(){

    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' +  scroll / 2 + '%)'//este baja
               //translate()
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' +  scroll / 4 + '%)'//este sube este srcrcll detexta cada bes que halya un cam,bio en el scroll
               //translate()
            });
        }
    });

    $(window).resize(function(){//riseze cada ves que haya algun cambio de pantalla tamaño
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'//este sube (para tabletas cuando se cambiar a horizontal queda feo )
               //translate()
            });
        }
    })
})