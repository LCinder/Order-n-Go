
const fastify = require("fastify")();
const modelo = require("./modelo.js")
const model = new modelo.Model()
const port = 5000

let mesas = [];
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
const start = async () => {
	fastify.listen(port)
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
fastify.get("/mesa/:numero_mesa", async (req, res) => {
	let result = model.mesaGET(req.params.numero_mesa)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 9 (Pedido especifico)*******/
/******************************************************************************/
fastify.get("/mesa/:numero_mesa/pedido/:idPedido", async (req, res) => {
	let result = model.pedidoGET(req.params.numero_mesa, req.params.idPedido)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 4 Cantidad******************/
/******************************************************************************/
fastify.post("/mesa/:numero_mesa/pedido/:idPedido/cantidad/:cantidad", async (req, res) => {
	let result = model.cantidadPUT(req.params.numero_mesa, req.params.idPedido,
	req.params.cantidad)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 4 Id************************/
/******************************************************************************/
fastify.post("/mesa/:numero_mesa/pedido/:idPedido/id/:id", async (req, res) => {
	let result = model.pedidoIdPUT(req.params.numero_mesa, req.params.idPedido,
	req.params.id)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 2***************************/
/******************************************************************************/
fastify.put("/mesa/:numero_mesa/nuevopedido/:idNuevoPlato/:cantidad", async (req, res) => {
	let result = model.nuevoPedidoPUT(req.params.numero_mesa, req.params.idNuevoPlato,
	req.params.cantidad)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 5************************/
/******************************************************************************/
fastify.post("/mesa/:numero_mesa/pedido/:idPedido/ingredientes/:ingredientes", async (req, res) => {
	let result = model.cambiarIngredientesPUT(req.params.numero_mesa, req.params.idPedido,
	req.params.ingredientes)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 1***************************/
/******************************************************************************/
fastify.post("/mesa/:numero_mesa/usuarios/:usuarios", async (req, res) => {
	let result = model.cambiarUsuariosPUT(req.params.numero_mesa,
	req.params.usuarios)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 3***************************/
/******************************************************************************/
fastify.put("/mesa/:numero_mesa/pedirCuenta", async (req, res) => {
	let result = model.pedirCuentaPUT(req.params.numero_mesa);

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 7***************************/
/******************************************************************************/
fastify.delete("/mesa/:numero_mesa/pedido/:idPedido/eliminar", async (req, res) => {
	let result = model.eliminarPedidoDELETE(req.params.numero_mesa,
	req.params.idPedido)

	res.send(result.valor).code(result.code);
});
/******************************************************************************/
/******************************Historia de Usuario 8***************************/
/******************************************************************************/
fastify.post("/mesa/:numero_mesa/pagarPorSeparado", async (req, res) => {
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
