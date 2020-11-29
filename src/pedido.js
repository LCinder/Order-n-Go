


class Pedido {

	constructor(platoArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg, usuarioArg) {
		this.plato = platoArg;
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
	getPlato() {
		return this.plato;
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
	setPlato(platoArg) {
		this.plato = platoArg;
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

		res += "Id Plato: " + this.plato + "\nTipo Plato: " + this.tipoPlato + "\nCantidad: " + this.cantidad;

		if(this.ingredientesEvitar.length != 0) {
			res += "\nIngredientes a Evitar: " + this.ingredientesEvitar.forEach(elemento => {
					cad += elemento + ", ";
			});
		}

		if(this.comentarioOpcionalPlato  != 0)
			res += "\nComentario Opcional Plato: " + this.comentarioOpcionalPlato;

		return res;
	}
};

module.exports = {
	Pedido
}
