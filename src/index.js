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
	function getPlato() {
		return this.plato;
	}

	function getTipoPlato() {
		return this.tipoPlato;
	}

	function getCantidadArg() {
		return this.cantidadArg;
	}

	/***** Sets *****/
	function setPlato(platoArg) {
		this.plato = platoArg;
	}

	function setTipoPlato(tipoPlatoArg) {
		this.tipoPlato = tipoPlatoArg;
	}

	function setCantidad(cantidadArg) {
		this.cantidad = cantidadArg;
	}

}


class Mesa {

	constructor(mesaArg, personasArg, cuentaArg, pedidosArg) {
		this.mesa = mesaArg;
		this.personas = personasArg;
		this.cuenta = cuentaArg;
		this.pedidos = pedidosArg;
	}

	/***** Gets *****/
	function getMesa() {
		return this.mesa;
	}

	function getPersonas() {
		return this.personas;
	}

	function getCuenta() {
		return this.cuenta;
	}

	function getPedidos() {
		return this.pedidos;
	}

	/***** Sets *****/
	function setMesa(mesaArg) {
		this.mesa = mesaArg;
	}

	function setPersonas(personasArg) {
		this.personas = personasArg;
	}

	function setCuenta(cuentaArg) {
		this.cuenta = cuentaArg;
	}

	function setPedidos(pedidosArg) {
		this.pedidos = pedidosArg;
	}

}
