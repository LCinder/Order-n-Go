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

		if(cuentaArg == undefined)
			this.cuenta = false;
		else {
			if(cuentaArg == "true")
				this.cuenta = true
			else if(cuentaArg == "false")
				this.cuenta = false
			else
				this.cuenta = cuentaArg
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

	getPropina() {
		return this.propina.propinaCantidad;
	}

	getPagarSeparado() {
		return this.pagarSeparado;
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

	setPagarSeparado(pagarSeparadoArg) {
		this.pagarSeparado = pagarSeparadoArg;
	}


	/****************************************************************************/
	/****************************************************************************/
	/****************************************************************************/
	/****************************************************************************/
	/****************************************************************************/
	/****************************************************************************/

	getValuesUnique(v) {
			return v.filter((a, i, j) => j.indexOf(a) === i)
	}

	hayCuenta() {
		if(this.cuenta)
			return "Cuenta pedida";
		else
			return "Cuenta no pedida";
	}

	estaOcupada() {
		if(this.ocupada)
			return "Mesa ocupada";
		else
			return "Mesa no ocupada";
	}

	hayPropina() {
		return this.propina.haypropina;
	}

	toString() {
		return "Mesa: " + this.mesa + "\n---------------------\n"
		+ "\nPersonas: " + this.personas + "\nCuenta: " + hayCuenta()
		// + "\nPedidos: " + this.pedidos.forEach(elemento => console.log(elemento.toString() + "\n"))
		+ "\nOcupada: " + estaOcupada();
	}

	incluirPedido(platoArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg, usuarioArg) {
		let pedidoNuevo = new pedido.Pedido(platoArg, tipoPlatoArg, cantidadArg, precioArg, ingredientesEvitarArg, comentarioOpcionalPlatoArg, usuarioArg)
		this.pedidos.push(pedidoNuevo);
	}

	mostrarPedidos() {
		let cad = ""
		let n = 1;

		this.pedidos.forEach(elemento => {
			if(elemento != null && elemento != undefined) {
				cad += "Plato " + n + "\n---------------------\n" + elemento.toString() + "\n\n";
				n++;
			}
		});
		return cad;
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

	pagarPorSeparado() {
		let v = [], total = [], precioUsuario = 0;
		let pedidos = this.getPedidos();

		pedidos.forEach(e => (v.push(e.getUsuario())))

		let usuarios = this.getValuesUnique(v);

		//evitamos pasar por el for
		if(usuarios.length <= 1)
			return total;

		for (let i=0; i < usuarios.length; i++) {
			for (let j=0; j < pedidos.length; j++) {
				if(usuarios[i] == pedidos[j].getUsuario())
						precioUsuario += pedidos[j].getPrecio()
			}
			total.push({usuario: i, precioTotal: precioUsuario});
			precioUsuario = 0;
		}
		return total;
	}

};

module.exports = {
	Mesa
}
//
// let mesa2 = new Mesa(1, 10, false, true);
// mesa2.incluirPedido(54, "Plato1", 1, 5, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
// mesa2.incluirPedido(4, "Plato2", 2, 15, ["Ingrediente1", "Ingrediente2"], "Vacio", 2)
// mesa2.incluirPedido(34, "Plato3", 1, 3, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
// mesa2.incluirPedido(78, "Plato4", 1, 2, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
// mesa2.incluirPedido(98, "Postre", 2, 1.2, ["Ingrediente1", "Ingrediente2"], "Vacio", 1)
// mesa2.incluirPedido(33, "Postre", 1, 5, ["Ingrediente1"], "Vacio", 1)
// console.log(mesa2.pagarPorSeparado()[1].precioTotal)
