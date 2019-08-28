$(document).ready(function(){ 

    $('#ejecutar').on('click',function(){
        
        $('.caja').animate({ 
            marginLeft: '500px'
        }, 5000);

        $('.caja').animate({ 
            marginLeft: '0px'
        }, 5000);
       //lo lleva la derecha y dspues isquierda 
    });

    $('#parar').on('click',function(){
        
        $('.caja').stop(true,false);//el primero la limpia, salta al final//y sin ningun parametro pues se para como tal
       
    });
    
});