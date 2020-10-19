
const test = require("ava")
const mesa = require("./../src/mesa.js")
const pedido = require("./../src/pedido.js")

test ("Creacion mesa", t => {
	let mesa1 = new order.Mesa(1, 5, false, true)
	t.is((typeof mesa1), "object")
})

test ("Creacion pedido", t => {
	let plato1 = new order.Mesa(10, "Postre", 1)
	t.is((typeof plato1), "object")
})


test ("Cambiar mesa", t => {
	let mesa2 = new order.Mesa(1, 5, false, true);
	mesa2.setMesa(2);
	t.is(mesa2.getMesa(), 2)
})

test ("Cambiar numero personas", t => {
	let mesa2 = new order.Mesa(1, 10, false, true);
	mesa2.setPersonas(10);
	t.is(mesa2.getPersonas(), 10)
})

test ("Cambiar cuenta", t => {
	let mesa2 = new order.Mesa(1, 10, true, true);
	mesa2.setCuenta(true)
	t.is(mesa2.getCuenta(), true)
})


test ("Incluir pedido", t => {
	let mesa2 = new order.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Postre", 1)
	t.is(mesa2.getPedidos().length, 1)
})


test ("Borrar pedido", t => {
	let mesa2 = new order.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Postre", 1)
	mesa2.incluirPedido(4, "Principal", 2)
	mesa2.borrarPedido(1)
	t.is(mesa2.getPedidos().length, 1)
})
