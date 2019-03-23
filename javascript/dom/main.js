var cajas = document.getElementsByTagName('div');//obtenemos el documento y los obtenemos por el nombre de tipo de variable

cajas[0].textContent = 'Hola Mundo';//forma normal
//cajas[2].innerHTML = '<h1>Hola</h1>';//de forma en modificar el html

var cajas1 = document.getElementsByClassName('caja');//por nombre

var cajas3 = document.getElementById('primeracaja'); //por id
//cajas3.innerHTML = '<h1>Hola</h1>';

//como agregar nodos en este cajo mas cajas con 5 pasos
//(1) crear
var caja = document.createElement('div');
//(2) nodo de texto
var conteneido = document.createTextNode('Hola viejo');
//(3) añadir el nodo de texto al elementos
caja.appendChild(conteneido);//agregamos o incrustamos el ocntenido
//(4) agregar atributos a las caja
caja.setAttribute('class','caja naranja');
//(5) agregar el elementos al documento
//hay varias formas para agregarlo pero aqui esta una
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

//modificando la calse o id del elementos

caja.id = 'primera';
caja.className = 'caja naranja';

//conocer el elementos padre de un elementos
var padre = cajas[0].parentNode;//nos devuelve el elemento padre

padre.insertBefore(caja, cajas[0]);//insertar la caja antes de la priemra caja

//reemplazar una caja

padre.replaceChild(caja, cajas[2]);

//eliminar nodos

padre.removeChild( cajas[3]);