$(document).ready(function(){ 

    var contenedor = $('#contenedor');
    var contador = 1;
   

    $('#agregar').on('click', function(){
        var caja = $('<div></div>').attr('class', 'caja').text(contador);
        contador++;
//
       // contenedor.append(caja);//nor permite agrega la inicio del contenedor
       //contenedor.prepend(caja);// los organiza al reves

       //contenedor.before(caja);//antes del ocntenedor
       contenedor.after(caja);//despues del ocntenedor

    });

});
