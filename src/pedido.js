


class Pedido {

	constructor(platoArg, tipoPlatoArg, cantidadArg) {
		this.plato = platoArg;
		this.tipoPlato = tipoPlatoArg;
		this.cantidad = cantidadArg;
	}

	/***** Gets *****/
	getPlato() {
		return this.plato;
	}

	getTipoPlato() {
		return this.tipoPlato;
	}

	getCantidadArg() {
		return this.cantidadArg;
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

	toString() {
		return "Plato: " + this.plato + " Tipo Plato: " + this.tipoPlato + " Cantidad: " + this.cantidad;
	}

};

module.exports = {
	Pedido
}
