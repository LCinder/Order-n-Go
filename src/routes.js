
const fastify = require("fastify")();
const modelo = require("./modelo.js")
const model = new modelo.Model()

let mesas = [];
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
const start = async () => {
	fastify.listen(5000)
	model.iniciar()
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
// fastify.get("/", async (req, res) => {
// 	res.send("Funciona Fastify!").code(200);
// });
/******************************************************************************/
/******************************Historia de Usuario 9***************************/
/******************************************************************************/
fastify.get("/:numero_mesa", async (req, res) => {
	let result = model.mesaGET(req.params.numero_mesa)

	res.send(result.valor).code(result.code);
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
