$(document).ready(function(){
   
    /*$('.caja').first().css({ pirmera caja
        background: '#000'
    });//clase caja primera
    $('.caja').last().css({
        background: '#000'   ultima caja
    });*/

  //con numero de index, como un arreglo
  /*/$('.caja').eq(2).css({
    background: '#000'
  });*/

    //fintarpor id y seleccionar mas cajas
  /*$('.caja').filter('#segunda').css({  
      background: '#f9a309'
  });*/

  //seleccionar cajas menos la de segunda
  $('.caja').not('#segunda').css({  background: '#f9a309' });
  
    
});