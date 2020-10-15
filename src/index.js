/******************************************************************************/
/******************************************************************************/
/********************Order'n'Go************************************************/
/******************************************************************************/
/******************************************************************************/



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


class Mesa {

	constructor(mesaArg, personasArg, cuentaArg, ocupadaArg) {
		this.mesa = mesaArg;						// N mesa (1, 2, 3...)
		this.personas = personasArg;
		this.cuenta = cuentaArg;
		this.pedidos = [];		// Array de objetos 'pedidos'
		this.ocupada = ocupadaArg;	 // boolean para mesa ocupada o no
	}

	/***** Gets *****/
	getMesa() {
		return this.mesa;
	}

	getPersonas() {
		return this.personas;
	}

	getCuenta() {
		return this.cuenta;
	}

	getPedidosToString() {
		return this.pedidos.forEach(elemento => console.log(elemento.toString() + "\n"));
	}

	getPedidos() {
		return this.pedidos;
	}

	getOcupada() {
		return this.ocupada;
	}

	/***** Sets *****/
	setMesa(mesaArg) {
		this.mesa = mesaArg;
	}

	setPersonas(personasArg) {
		this.personas = personasArg;
	}

	setCuenta(cuentaArg) {
		this.cuenta = cuentaArg;
	}

	setPedidos(pedidosArg) {
		this.pedidos = pedidosArg;
	}

	setOcupada(ocupadaArg) {
		this.ocupada = ocupadaArg;
	}

	toString() {
		return "Mesa: " + this.mesa + " Personas: " + this.personas + " Cuenta: " + this.cuenta +
		" Pedidos: " + this.pedidos.forEach(elemento => console.log(elemento.toString() + "\n")) + " Ocupada: " + this.ocupada;
	}

	incluirPedido(platoArg, tipoPlatoArg, cantidadArg) {
		let pedidoNuevo = new Pedido(platoArg, tipoPlatoArg, cantidadArg)
		this.pedidos.push(pedidoNuevo);
	}

	borrarPedido(numeroPedido) {
		this.pedidos.splice(numeroPedido)
	}

};

module.exports = {
	Mesa, Pedido
}
