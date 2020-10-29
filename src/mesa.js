/******************************************************************************/
/******************************************************************************/
/********************Mesa******************************************************/
/******************************************************************************/
/******************************************************************************/


const pedido = require("./pedido.js")

class Mesa {

	constructor(mesaArg, personasArg, cuentaArg, ocupadaArg) {
		this.mesa = mesaArg;						// N mesa (1, 2, 3...)
		this.personas = personasArg;
		this.cuenta = cuentaArg;
		this.pedidos = [];		// Array de objetos 'pedidos'
		this.ocupada = ocupadaArg;	 // boolean para mesa ocupada o no
		this.propina = {"haypropina": false, propinaCantidad: 0};
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

	getPrecioTotal() {
		return this.precio;
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

	darPropina(propinaArg) {
		this.propina.haypropina = true;
		this.propina.propinaCantidad = propinaArg;
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

	setPrecioTotal(precioTotalArg) {
		this.precioTotal = precioTotalArg;
	}

	hayPropina() {
		return this.propina.haypropina;
	}

	getPropina() {
		return this.propina.propinaCantidad;
	}

	toString() {
		return "Mesa: " + this.mesa + " Personas: " + this.personas + " Cuenta: " + this.cuenta +
		" Pedidos: " + this.pedidos.forEach(elemento => console.log(elemento.toString() + "\n")) + " Ocupada: " + this.ocupada;
	}

	incluirPedido(platoArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg) {
		let pedidoNuevo = new pedido.Pedido(platoArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg)
		this.pedidos.push(pedidoNuevo);
	}

	borrarPedido(numeroPedido) {
		this.pedidos.splice(numeroPedido)
	}

	sumaPrecioTotal() {
		let precio = 0;
		this.pedidos.forEach(e => precio += e.getPrecio());

		if(this.hayPropina())
			precio += this.getPropina()

		return precio;
	}

};

module.exports = {
	Mesa
}
//
//
// let mesa = new Mesa(2, 3, false, true)
// mesa.incluirPedido(1, "Postre", 3)
//
// console.log(mesa.toString())
