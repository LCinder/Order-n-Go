
const test = require("ava")
const mesa = require("./../src/mesa.js")
const pedido = require("./../src/pedido.js")

test ("Creacion mesa", t => {
	let mesa1 = new mesa.Mesa(1, 5, false, true)
	t.is((typeof mesa1), "object")
})

test ("Creacion pedido", t => {
	let mesa1 = new mesa.Mesa(1, 5, false, true)
	let plato1 = new pedido.Pedido(10, 1)
	t.is((typeof plato1), "object")
})


test ("Cambiar mesa", t => {
	let mesa2 = new mesa.Mesa(1, 5, false, true);
	mesa2.setMesa(2);
	t.is(mesa2.getMesa(), 2)
})

test ("Cambiar numero personas", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.setPersonas(10);
	t.is(mesa2.getPersonas(), 10)
})

test ("Cambiar cuenta", t => {
	let mesa2 = new mesa.Mesa(1, 10, true, true);
	mesa2.setCuenta(true)
	t.is(mesa2.getCuenta(), true)
})


test ("Incluir pedido", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, "Postre", 1, 5)
	t.is(mesa2.getPedidos().length, 1)
})


test ("Borrar pedido", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, 1)
	mesa2.incluirPedido(4, 2)
	mesa2.borrarPedido(4)
	t.is(mesa2.getPedidos().length, 1)
})

test ("Incluir ingredientes a evitar", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, 1, ["Ingrediente1", "Ingrediente2"])
	t.is(mesa2.getPedidos()[0].getIngredientesEvitar().length, 2)
})


test ("Dar propina al finalizar servicio", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, 1, ["Ingrediente1", "Ingrediente2"])
	mesa2.incluirPedido(4, 1)
	mesa2.incluirPedido(44, 1, ["Ingrediente1", "Ingrediente2"])
	mesa2.darPropina(5)
	t.is(mesa2.sumaPrecioTotal(), 220)
})


test ("Incluir comentario opcional plato", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, 1, ["Ingrediente1", "Ingrediente2"], "Para compartir")
	t.is(mesa2.getPedidos()[0].getComentarioOpcionalPlato(), "Para compartir")
})

test ("Consulta si una mesa esta ocupada", t => {
	let mesa2 = new mesa.Mesa(1, 5, false, true)
	mesa2.setOcupada(true)
	t.is(mesa2.getOcupada(), true)
})

test ("Comprobar que hay propina", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(4, 1)
	t.is(mesa2.hayPropina(), false)
})

test ("Pagar por separado", t => {
	let mesa2 = new mesa.Mesa(1, 10, false, true);
	mesa2.incluirPedido(54, 1)
	mesa2.incluirPedido(33, 1)
	mesa2.incluirPedido(78, 1)
	mesa2.incluirPedido(1, 1)

	mesa2.incluirPedido(4, 10, ["Ingrediente1", "Ingrediente2"], "Vacio", 2)
	mesa2.incluirPedido(98, 2, ["Ingrediente1", "Ingrediente2"], "Vacio", 2)
	t.is(mesa2.pagarPorSeparado()[0].precioTotal, 310)
})
