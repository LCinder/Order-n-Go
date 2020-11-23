

const datos = require("./data/info.json")
const mesascr = require("../src/mesa.js")
const pedido = require("../src/pedido.js")



module.exports = (req, res) => {

	const mesa = new mesascr.Mesa(datos.mesa.mesaN, datos.mesa.personas, datos.mesa.cuenta, datos.mesa.ocupada)


	for (let i=0; i < datos.pedidos.length; i++) {
		mesa.incluirPedido(datos.pedidos[i].plato, datos.pedidos[i].tipoPlato, datos.pedidos[i].cantidad,
		datos.pedidos[i].precio, datos.pedidos[i].ingredientesEvitar, datos.pedidos[i].comentarioOpcionalPlato, datos.pedidos[i].usuario)
	}
	res.send("Los pedidos para la mesa")
}
