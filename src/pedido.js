


class Pedido {

	constructor(platoArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg, usuarioArg) {
		this.plato = platoArg;
		this.tipoPlato = tipoPlatoArg;
		this.cantidad = cantidadArg;
		this.precio = precioArg;
		this.ingredientesEvitar = ingredientesEvitarArg;
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
		return "Plato: " + this.plato + " Tipo Plato: " + this.tipoPlato + " Cantidad: " + this.cantidad
		+ " Ingredientes a Evitar: " + this.ingredientesEvitar.forEach(elemento => console.log(elemento.toString() + "\n"))
		+ " Comentario Opcional Plato: " + this.comentarioOpcionalPlato;
	}
};

module.exports = {
	Pedido
}
