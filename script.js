
//Como vez en la clase anterior vimos la manera de cambiar el HTML usando javascript, pero la manera ideal de que se hagan cambios en el HTML es cuando el usuario haga una interaccion con la pagina, mira  las nuevas varias que creamos, pusimos nuevos inputs y aparte un boton

var h1 = document.querySelector('h1');
var input1 = document.getElementById('calculo1');
var input2 = document.getElementById('calculo2');
var btn = document.getElementById('btnCalcular')
var pResult = document.getElementById('result')
var form = document.getElementById('form')

//Como ves tenemos dos inputs y un boton que dice "calcular" abajo tgenemos creada una funcion que es donde vamos a sumar los dos valores puestos en los inputs y el boton hara que el resultado salga con un text que dice "El Resultado es: ", nota que creamos una etiqueta de parrafo en el HTML la cual esta vacia.

form.addEventListener('click', sumarInputValues);

//Fijate que hemos agregado los add event listener el cual nos dice cuando un suario h

function sumarInputValues(event){
    //console.log({event});
    //event.preventDefault();
    var sumaInputs = (Number(input1.value) + Number(input2.value));
    pResult.innerHTML = "El Resultado es: " + sumaInputs;
};

h1.addEventListener("mouseover", pasarmouse);

function pasarmouse(event){
    console.log({event});
    h1.onmouseover = h1.style.color = 'red'
}

h1.addEventListener("mouseout", quitarmouse);

function quitarmouse(){
    h1.onmouseout = h1.style.color = 'black'
}