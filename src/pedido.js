

const datos = require("./infoPedidos.json")

class Pedido {

	//constructor(platoIdArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg, usuarioArg) {
	constructor(platoIdArg, cantidadArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg, usuarioArg) {
		this.platoId = platoIdArg;
		this.platoNombre = this.getNombreFromId(platoIdArg) //this.getNombreForId(platoIdArg);

		if(datos.platos[platoIdArg-1] == undefined)
			this.tipoPlato = "Plato inventado"
		else
			this.tipoPlato = datos.platos[platoIdArg-1].tipoPlato;

		this.cantidad = cantidadArg;

		if(datos.platos[platoIdArg-1] == undefined)
			this.precio = 100

		else
			this.precio = parseInt(datos.platos[platoIdArg-1].precio);

		if(ingredientesEvitarArg != null && ingredientesEvitarArg != "")
			this.ingredientesEvitar = ingredientesEvitarArg;
		else
			this.ingredientesEvitar = ""

		if(comentarioOpcionalPlatoArg != null && comentarioOpcionalPlatoArg != "")
			this.comentarioOpcionalPlato = comentarioOpcionalPlatoArg;
		else
			this.comentarioOpcionalPlato = ""

		if(usuarioArg != null && usuarioArg != "")
			this.usuario = usuarioArg;
		else
			this.usuario = 1
	}


	/***** Gets *****/
	getPlatoId() {
		return this.platoId;
	}

	getPlatoNombre() {
		return this.platoNombre;
	}

	getTipoPlato() {
		return this.tipoPlato;
	}

	getCantidad() {
		return this.cantidad;
	}

	getPrecio() {
		return this.precio;
	}

	getIngredientesEvitar() {
		return this.ingredientesEvitar;
	}

	getComentarioOpcionalPlato() {
		return this.comentarioOpcionalPlato;
	}

	getUsuario() {
		return this.usuario;
	}

	/***** Sets *****/
	setPlatoId(platoIdArg) {
		this.platoId = platoIdArg;
	}

	setPlatoNombre(platoNombreArg) {
		this.platoNombre = platoNombreArg;
	}

	setTipoPlato(tipoPlatoArg) {
		this.tipoPlato = tipoPlatoArg;
	}

	setCantidad(cantidadArg) {
		this.cantidad = cantidadArg;
	}

	setPrecio(precioArg) {
		this.precio = precioArg;
	}

	setIngredientesEvitar(ingredientesEvitarArg) {
		let ing = ingredientesEvitarArg.split(",")

		if(ing.length > 0)
			this.ingredientesEvitar = ingredientesEvitarArg
	}

	setComentarioOpcionalPlato(comentarioOpcionalPlatoArg) {
		this.comentarioOpcionalPlato = comentarioOpcionalPlatoArg;
	}

	setUsuario(usuarioArg) {
		this.usuario = usuarioArg;
	}

	toString() {
		const cad = "";
		let res = "";

		res += "Id Plato: " + this.platoId + "\nNombre  Plato: " + this.platoNombre
		+ "\nTipo Plato: " + this.tipoPlato + "\nCantidad: " + this.cantidad;

		if(this.ingredientesEvitar.length != "" && this.ingredientesEvitar != undefined)
			res += "\nIngredientes a Evitar: "
			+ this.ingredientesEvitar;

		if(this.comentarioOpcionalPlato  != 0 && this.comentarioOpcionalPlato != undefined)
			res += "\nComentario Opcional Plato: " + this.comentarioOpcionalPlato;

		return res;
	}

	getIdFromNombre(nombrePlato) {
		return datos.platos.find(key => datos.platos[key].nombre === nombrePlato)
	}

	getNombreFromId(id) {
		if(datos[id] == undefined)
			return "Plato " + id

		return datos.platos[id].nombre;// nombres.find(key => nombres[id].plato === nombrePlato)
	}

};

module.exports = {
	Pedido
}
