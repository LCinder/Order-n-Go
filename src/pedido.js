


class Pedido {

	constructor(platoArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg) {
		this.plato = platoArg;
		this.tipoPlato = tipoPlatoArg;
		this.cantidad = cantidadArg;
		this.precio = precioArg;
		this.ingredientesEvitar = ingredientesEvitarArg;
		this.comentarioOpcionalPlato = comentarioOpcionalPlatoArg;
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
		this.ingredientesEvitar = ingredientesEvitarArg;
	}

	setComentarioOpcionalPlato(comentarioOpcionalPlatoArg) {
		this.comentarioOpcionalPlato = comentarioOpcionalPlatoArg;
	}

	toString() {
		return "Plato: " + this.plato + " Tipo Plato: " + this.tipoPlato + " Cantidad: " + this.cantidad
		+ " Ingredientes a Evitar: " + this.ingredientesEvitar.forEach(elemento => console.log(elemento.toString() + "\n"))
		+ " Comentario Opcional Plato: " + this.comentarioOpcionalPlato;
	}

};

module.exports = {
	Pedido
}
