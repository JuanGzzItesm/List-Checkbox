
//Funcion para llamar a las funciones de cada boton dependiendo del click

function agregarTodo(){

	document.getElementById("button").addEventListener("click",nuevo);

	document.getElementById("borrar").addEventListener("click",borra);

	document.getElementById("clear").addEventListener("click",clear);

	document.getElementById("mark").addEventListener("click",mark);


}

//Funcion que nos permite crear un nuevo elemento de lista dando click en POST TODO

function nuevo(){


	//PARA QUE LA PAGINA NO HAGA REFRESH
	event.preventDefault()

	/*SE CREAN LOS ELEMENTOS DE LISTA Y CHECKBOX, SE OBTIENE EL VALOR
	DEL CUADRO DE TEXTO Y A PARTIR DE AQUI SE LE HACE APPEND PRIMERO
	EL CHECKBOX AL LI Y DESPUES TODO EL CONJUNTO A UL */

	let content = document.getElementById("tarea").value;

	let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "caja";

	let node = document.createElement("li");
	let textnode = document.createTextNode(content);

	node.appendChild(checkbox);

	
	node.appendChild(textnode);


	document.getElementById("lista").appendChild(node);
	
          

}

//Funcion para marcar todo 

function mark(){

// accesamos al checkbox por el nombre y marcamos todos los de la lista, lo mismo para desmarcar

	let prueba = document.getElementsByName("caja");

	for ( let i = 0; i < prueba.length ; i ++){

		prueba[i].checked = true;
	}

}

//Funcion para desmarcar todo

function clear(){

	let prueba = document.getElementsByName("caja");

	for ( let i = 0; i < prueba.length ; i ++){

		prueba[i].checked = false;
	}
}

//Funcion que borra todo el contenido dentro de la lista

function borra(){

	document.location.reload(true);
}

function init(){

	agregarTodo();

}

init();