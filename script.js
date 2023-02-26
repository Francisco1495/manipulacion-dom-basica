/*Los querselectors es lo que usamos para agarrar elementos de HTML y poder meterlos modificarlos con Javascriopt*/

var h1 = document.querySelector('h1');
var p = document.querySelectorAll('p');
var parrafito = document.querySelector('.parrafito');
var pid = document.querySelector('#pid');
var input = document.querySelector('input'); /*Como vez estos se seleccion ya sea por etiqueta de html, id, clase*/

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//Como escribimos codigo HTML desde Javascript? Para esto tenemos varias maneras de hacerlo, una de estas maneras es usando la propiedad .innerHTML, el cual reemplaza el elemento, en este caso nuestro h1 en HTML es "Manipulacion del DOM basica", si al utilizar esteme todo de cambio como se muestra abajo, nuestro h1 cambiara a "Patito", si miras esto en nuestro inspector de elementos, veras que en efectivo el h1 ahora es patito, pero si te fijas en si en archivo HTML, este sigue diciendo "Manipulacion del DOM basica"

h1.innerHTML = 'Patito';

//Inclusive puedes agregar una etiqueta HTML usando la propiedad .innetHTML, en el ejemplo de abajo agregamos la etiqueta <br> la cual es  salto de linea

h1.innerHTML = 'Patito <br> Feo';

//Igual tenemos manera de solo agregar texto, sin cambiar en si nuestro html, esta propiedad es usando .innetText, en el ejemplo de abajo podra ver en tu archivo que tal cual como esta esta escrito podras ver que esta la etiqueta <br> puesta.

h1.innerText = 'Patito <br> Feo'

//En javascript podemos tambien podemos encontrar atributos que hayamos puesto en HTML utilizando la propiedad .getAttribute(), mira el ejemplo de abajo. si te fijas en el archivo HTMl en la etiqueta h1 pusimos una clase, la cual se llama verde, si te fijas abajo hicimos un console.log() en el cual adentro de los parentesis ponemos la etiqueta y el a propiedad la cual queda como h1.getAttribute('class'). si nos fijamos en la consola veras que nos sale impresa la palabra "verde", la cual es el nombre de la clase que le pusimos al h1

console.log(h1.getAttribute('class'));

//Ahora si bien vimos en el ejemplo de arriba podemos encontrar los attirbutos (clases), tambien podemos modificar dichos atributos, para esto utilizamos la propiedad .setAttribbute(). si te fijas en el ejemplo de abajo dentro de los parentesis de la propiedad, primero agregamos el atributo entre comillas, seguido ponemos una coma y de nuevo entre comillas ponemos el nuevo valor. una vez hecho esto refrescamos la pagina y checamos los elementos, podras ver que la clase de la etiqueta h1 ahora cambia a "rojo", mientras que si te fijas en si en archivo HTML en visual studio code este sigue diciendo "verde".

// h1.setAttribute('class', 'rojo'); // sientete libro de de comentar esto para que veas el cambio, tuve que comentarlo para poder usar los ejemplo de mas abajo

//Tenemos tambien propiedades que son exclusivamente para las clases, esta es con la propiedad .classlist, con esto podemos agregar usando .classList.add() o remover usando classList.remove(). Mira los ejemplos de abajo.

h1.classList.add('rojo'); //aqui estamos agregando el valor rojo a la clase del h1

h1.classList.remove('verde'); //aqui estamos agregando el valor verde a la clase del h1

//Tenemos otras funciones con la propiedad .classlist, la cual puede ser usando el toggle que es cmbio el valor de la classe si hay un evento

// h1.classList.toggle('toggle') 


//En javascript igual podemos cambiar el valor de algun elemento, si te fijas en nuestro HTML en la etiquet <input> tenemos el valor 123 en el atributo value, para hacer el cambio utilizamos la propiedad .value, mira el ejemplo de abajo. ahora nuestro input cambiara su valor predeterminado a 456, 

input.value = "456"

//Para poder crear Elementos nuevos de HTML utilizando javascript podemos usar la propiedad document.createElement(), mira el ejemplo ejemplo de abajo

var img = document.createElement('img'); //Creamos una variable llamado img, en la cual pusimos nuestra propiedad de crear un elemento, el es en si una etiqueta <img>


img.setAttribute('src', 'https://scontent.fcul2-1.fna.fbcdn.net/v/t39.30808-6/311292514_431067672471408_3887039212744149602_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE_QW7awjq-0xd9REAf4HaUji5p0yMJrO6OLmnTIwms7jiQ-4E5_NQgJP55KQR8GkcsoHAOEqDD_0PATQFI99l7&_nc_ohc=wA6K4RMKBDAAX8mpxoV&_nc_ht=scontent.fcul2-1.fna&oh=00_AfAzze5XVyx7bbz_X6R0do7h2zkrK6IJQxstQ2C5k8mbXQ&oe=63FF0E05'); //a nuestro elemento nuevo creado <img> le vamos a agregar atributos, en este caso la fuente o source, en html es "src" entre comilla, luego una coma y agregamos el valor a este atributo que en este caso es el link de la imagent, igual entre comillas.

console.log(img); //Ahora bien aqui esto lo usamos para que veas que el elemento creado por nosotros si aparece en consola con su atributo creado y el valor del atributo que en este caso es el link de la imagen

pid.innerText = ' ';

pid.append(img) //Ahora lo que debemos de hacer es agregar esta iamgent al html, en este caso lo vamos a agregar a elemento que tiene el atributo id con el valor "pid" esto usando la propiedad .append(), fijate que al principio de este documento creamos una variable llamada "pid" la cual contiene este atributo, y vuala!!!! mira como es que agregamos esa iamgent, cuando en realidad esa imagen no nos aparece en nuestro archivo HTML pero si nos aparece en nuestro elemento.
