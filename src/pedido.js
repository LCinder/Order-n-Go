


class Pedido {

	constructor(platoIdArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg, usuarioArg) {
		this.platoId = platoIdArg;
		this.platoNombre = this.getNombreForId(platoIdArg);
		this.tipoPlato = tipoPlatoArg;
		this.cantidad = cantidadArg;
		this.precio = precioArg;
		if(ingredientesEvitarArg != null && ingredientesEvitarArg != "")
			this.ingredientesEvitar = ingredientesEvitarArg;
		else
			this.ingredientesEvitar = []
		this.comentarioOpcionalPlato = comentarioOpcionalPlatoArg;
		this.usuario = usuarioArg;
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
		if(ingredientesEvitarArg.length > 0)
			this.ingredientesEvitar = ingredientesEvitarArg;
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

		if(this.ingredientesEvitar.length != 0 && this.ingredientesEvitar != undefined)
			res += "\nIngredientes a Evitar: "
			+ this.ingredientesEvitar.forEach(elemento => {
					cad += elemento + ", ";
			});

		if(this.comentarioOpcionalPlato  != 0 && this.comentarioOpcionalPlato != undefined)
			res += "\nComentario Opcional Plato: " + this.comentarioOpcionalPlato;

		return res;
	}

	getIdForNombre(nombrePlato) {
		let nombres = [];
		nombres.push({plato: "Plato 1", id: 1})
		nombres.push({plato: "Plato 2", id: 2})
		nombres.push({plato: "Plato 3", id: 3})
		nombres.push({plato: "Plato 4", id: 4})
		nombres.push({plato: "Plato 5", id: 5})
		nombres.push({plato: "Plato 6", id: 6})
		nombres.push({plato: "Plato 7", id: 7})

		return nombres.find(key => nombres[key].plato === nombrePlato)
	}

	getNombreForId(id) {
		let nombres = [];
		nombres.push({plato: "Plato 1", id: 1})
		nombres.push({plato: "Plato 2", id: 2})
		nombres.push({plato: "Plato 3", id: 3})
		nombres.push({plato: "Plato 4", id: 4})
		nombres.push({plato: "Plato 5", id: 5})
		nombres.push({plato: "Plato 6", id: 6})
		nombres.push({plato: "Plato 7", id: 7})

		if(nombres[id] == undefined)
			return "Plato " + id

		return "nombres[id].plato";// nombres.find(key => nombres[id].plato === nombrePlato)
	}

};

module.exports = {
	Pedido
}
