
const fastify = require("fastify")();
const modelo = require("./modelo.js")
const uri = process.env.MONGODB_URI
const MongoDB = require("mongodb")
const client = new MongoDB(uri)
const model = new modelo.Model()

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
const start = async () => {
	let puerto = process.env.PORT || 5000
	fastify.listen({port: puerto, host: "0.0.0.0"})
	model.iniciar()
	await client.connect();
	const db = client.db("orderngoDB")
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
fastify.get("/status", async (req, res) => {
	res.send('{status: "OK"}').code(200);
});
/******************************************************************************/
/******************************Historia de Usuario 9***************************/
/******************************************************************************/
fastify.get("/:numero_mesa", async (req, res) => {
	let result = model.mesaGET(req.params.numero_mesa)

	let mesa1 = db.collection("mesa1")

	let prueba = {
	 "mesaN": "1",
	 "personas": "2",
	 "cuenta": "false",
	 "ocupada": "true",
	 "pedidos": [
		 {
			 "platoId": "10",
			 "tipoPlato": "Principal",
			 "cantidad": "1",
			 "precio": "20",
			 "ingredientesEvitar": "",
			 "comentarioOpcionalPlato": "Para compartir",
			 "usuario": "1"
		 },
		 {
			 "platoId": "53",
			 "tipoPlato": "Secundario",
			 "cantidad": "2",
			 "precio": "10",
			 "ingredientesEvitar": "",
			 "comentarioOpcionalPlato": "",
			 "usuario": "1"
		 }
	 ]
	}

	const m = col.insertOne(mesa1)

	res.send(result.valor).code(result.code);

	// finally {
	// 	await client.close()
	// }
});
/******************************************************************************/
/******************************Historia de Usuario 9 (Pedido especifico)*******/
/******************************************************************************/
fastify.get("/:numero_mesa/:idPedido", async (req, res) => {
	let result = model.pedidoGET(req.params.numero_mesa, req.params.idPedido)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 4 Cantidad******************/
/******************************************************************************/
fastify.put("/:numero_mesa/:idPedido/cantidad/:cantidad", async (req, res) => {
	let result = model.cantidadPUT(req.params.numero_mesa, req.params.idPedido,
	req.params.cantidad)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 4 Id************************/
/******************************************************************************/
fastify.put("/:numero_mesa/:idPedido/id/:id", async (req, res) => {
	let result = model.pedidoIdPUT(req.params.numero_mesa, req.params.idPedido,
	req.params.id)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 2***************************/
/******************************************************************************/
fastify.post("/:numero_mesa/nuevopedido/:idNuevoPlato/:cantidad", async (req, res) => {
	let result = model.nuevoPedidoPUT(req.params.numero_mesa, req.params.idNuevoPlato,
	req.params.cantidad)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 5************************/
/******************************************************************************/
fastify.put("/:numero_mesa/:idPedido/ingredientes/:ingredientes", async (req, res) => {
	let result = model.cambiarIngredientesPUT(req.params.numero_mesa, req.params.idPedido,
	req.params.ingredientes)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 1***************************/
/******************************************************************************/
fastify.put("/:numero_mesa/usuarios/:usuarios", async (req, res) => {
	let result = model.cambiarUsuariosPUT(req.params.numero_mesa,
	req.params.usuarios)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 3***************************/
/******************************************************************************/
fastify.put("/:numero_mesa/pedirCuenta", async (req, res) => {
	let result = model.pedirCuentaPUT(req.params.numero_mesa);

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 7***************************/
/******************************************************************************/
fastify.delete("/:numero_mesa/:idPedido/eliminar", async (req, res) => {
	let result = model.eliminarPedidoDELETE(req.params.numero_mesa,
	req.params.idPedido)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 8***************************/
/******************************************************************************/
fastify.put("/:numero_mesa/pagarPorSeparado", async (req, res) => {
	let result = model.pagarPorSeparadoPUT(req.params.numero_mesa)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
start();

module.exports = fastify

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
