

const datos = require("./data/info.json")
const mesascr = require("../src/mesa.js")
const pedido = require("../src/pedido.js")

const mesa = new mesascr.Mesa(datos.mesas[0].mesaN, datos.mesas[0].personas, datos.mesas[0].cuenta, datos.mesas[0].ocupada)

for (let i=0; i < datos.mesas[0].pedidos.length; i++) {
	mesa.incluirPedido(datos.mesas[0].pedidos[i].platoId, datos.mesas[0].pedidos[i].cantidad,
	datos.mesas[0].pedidos[i].ingredientesEvitar, datos.mesas[0].pedidos[i].comentarioOpcionalPlato, datos.mesas[0].pedidos[i].usuario)
}

module.exports = (req, res) => {
		res.send("Los pedidos para la mesa: " + mesa.getMesa() + " son: \n" + mesa.mostrarPedidos())
}
