//querySelector
//parametros: un selector css

/* const para = document.querySelector('p')
console.log(para); */

//querySelectorAll
//parametro: selector css

/* const paras = document.querySelectorAll('p')//node no es un array
console.log(paras); */
/* console.log(paras[1]);
 */
/* paras.forEach(para=>{
    console.log(para);
}) */

//getElementById
//parametro: nombre de la id
/* const titulo = document.getElementById('titulo');
console.log(titulo); */

//getElementsByClassName:
//parametro clase associada al elemento.
/* const errors = document.getElementsByClassName('error');
console.log(errors); */

//getElementsByTagName
//Parametro nombre del tag
/* const pars = document.getElementsByTagName('p');
console.log(pars); */

//Modifcar contenido de la pagina:
//innerhtml/innertext
/* let para = document.querySelector('p'); */
/* let paras = document.querySelectorAll('p');
let p1 = paras[0];
let contenidoP1 = p1.innerText;

console.log(contenidoP1);
p1.innerText = "test";
contenidoP1 = p1.innerText;
console.log(contenidoP1); */

//Obtener y establecer atributos
/* let enlace  = document.querySelector('a');
let url = enlace.getAttribute('href');
console.log(url);

enlace.setAttribute('href', 'http://www.duckduckgo.com');
url = enlace.getAttribute('href');
console.log(url);
 */
//añadir i eliminar estilos
//style

/* let error = document.querySelector('div.error');
error.style.backgroundColor = 'blue';
error.style.backgroundColor = '';

 */

//Añadir i eliminar classes
/* let error = document.querySelector('div.error');
error.classList.add("paco");
error.classList.remove("error")
error.classList.replace("paco","test") */

/* let paras = document.getElementsByTagName('p');
let hijo = paras[2];
console.log(hijo);
let padre = hijo.parentNode;
console.log(padre);
let primerHermano = padre.firstElementChild;
console.log(primerHermano);
siguienteHermano = hijo.previousElementSibling;
console.log(siguienteHermano); */

//Eventos
//dom reference
const par = document.querySelector('p');
//event creator
par.addEventListener('click',(e)=>{
    console.log(e.target.innerText);
    e.target.innerText = "Texto cambiado";
    console.log(e.target.innerText);
})
par.addEventListener('mouseover',()=>{
    console.log("mouse");
})
function escribeLog(){
    console.log("log");
}
function escribeMouse() {
    console.log("mouse");
}

document.addEventListener("keydown",(e)=>{
    console.log("Tecla presionada: " + e.key);
});