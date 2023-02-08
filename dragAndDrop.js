/**
 * Codigo para crear espacios en donde puedan ser arrastradas imagenes.
 * Para su funcionamientos se requieren de distintos div con la clase empty en HTML,
 * y uno de ellos deve contener un div con la clase fill.
 * @since 06/02/2023
 * @author Leonardo Jesús Figueroa Valdivia
 * @author Lucas Sanchez Cabrera
 * @author Jonathan Rodriguez
 */

//Seleccionamos los elementos fill y empty del documento
const fill= document.querySelector(".fill");
const empties= document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//Asignar a todos los elementos empty los event listener
for (const empty of empties){
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

//Cambia la clase fill por invisible
function dragStart() {
    this.className+= " hold";
    setTimeout(() => this.className= "invisible", 0);
    
}

//Cambia el div fill a dentro de otro div
function dragEnd(){
    this.className= "fill";
}


function dragOver(e){
    e.preventDefault();
}


function dragEnter(e){
    e.preventDefault();
    this.className+= " hovered";
}

//Cambia el div al que le quitamos la imagen a la clase empty
function dragLeave(){
    this.className= "empty";
}


function dragDrop(){
    this.className= "empty";
    this.append(fill);
}