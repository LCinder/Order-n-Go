
const test = require("ava")
const order = require("./../src/index.js")

test ("Creacion mesa", t => {
	let mesa1 = new order.constructor(1, 5, false, true)
	t.is((typeof mesa1), "object")
})

test ("Creacion pedido", t => {
	let plato1 = new order.constructor(10, "Postre", 1)
	t.is((typeof plato1), "object")
})


test ("Cambiar mesa", t => {
	let mesa1 = new order.constructor(1, 5, false, true);
	mesa1.getPersonas();
	t.is((typeof mesa1), "object");
})

test ("Cambiar pedido", t => {
	let plato1 = new order.constructor(10, "Postre", 1)
	plato1.setCantidad(2)
	t.is((typeof plato1), "object")
})
