$(document).ready(function(){ 

    $('#boton').on('click',function(){
        //$(this).addClass('naranja');//la agrega
       // $(this).removeClass('boton'); //quita todas la clases a boton
      // $(this).toggleClass('naranja');

       $(this).css({
           'height':'100px',
           'width':'100px'
       });

    });
});