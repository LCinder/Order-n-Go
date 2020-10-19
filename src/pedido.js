


class Pedido {

	constructor(platoArg, tipoPlatoArg, cantidadArg, precioArg) {
		this.plato = platoArg;
		this.tipoPlato = tipoPlatoArg;
		this.cantidad = cantidadArg;
		this.precio = precioArg;
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

	toString() {
		return "Plato: " + this.plato + " Tipo Plato: " + this.tipoPlato + " Cantidad: " + this.cantidad;
	}

};

module.exports = {
	Pedido
}
