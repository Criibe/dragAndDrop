
var id;

function permitirDrop(event){
	event.preventDefault();
}

function dragStart(event){
	id = event.target.id;
	document.getElementById(id).classList.add('gelatina');

}

function drop(event){
	event.target.append(document.getElementById(id));
	document.getElementById("foto").classList.remove('gelatina');
}