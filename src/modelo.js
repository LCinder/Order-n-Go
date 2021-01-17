
const datos = require("../api/data/info.json")
const mesaClass = require("./mesa.js")
const pedido = require("./pedido.js")

const uri = process.env.MONGODB_URI
const {MongoClient} = require("mongodb")
const client = new MongoClient("mongodb+srv://lcinder:2mmwvba7@cluster0.cbipo.mongodb.net/mesas?retryWrites=true", {useUnifiedTopology: true})
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
class Model {

constructor() {
	this.mesas = []
}

iniciar() {
	let m;
	let mesa;

	for (let i=0; i < datos.mesas.length; i++) {
		m = datos.mesas[i];
		mesa = new mesaClass.Mesa(m.mesaN, m.personas, m.cuenta, m.ocupada);

		for (let j=0; j < m.pedidos.length; j++)
			mesa.incluirPedidoFromJSON(m.pedidos[j])

		this.mesas.push(mesa)
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

mesaGET(numero_mesa) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]

		return  {valor: mesa.toString() + "\n\n" + "Los pedidos para la mesa: " + numeroMesa
		+ " son: \n" + mesa.mostrarPedidos(), code: 200};
	}
	catch(err) {
		return  {valor: "Mesa " + numeroMesa + " no existe\n\n" + err, code: 404};
		//JSON.stringify(m); // JSON.stringify(req.params)
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
pedidoGET(numero_mesa, idPedidoArg) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]
		let idPedido = idPedidoArg

		return  {valor: "El pedido " + idPedido + " para la mesa: "
		+ mesa.getMesa() + " es: \n" + mesa.mostrarPedido(idPedido), code: 200};
	}
	catch(err) {
		return  {valor: "El pedido " + idPedido + " no existe\n\n" + err, code: 404};
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
cantidadPUT(numero_mesa, idPedidoArg, cantidadArg) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]
		let idPedido = idPedidoArg
		let cantidad = cantidadArg

		client.connect((err) => {
		const db = client.db("mesas")
			let mesaCursor = db.collection("mesa" + numero_mesa)

			const m = mesaCursor.updateOne({"pedidos.platoId": String(idPedido)},
			{"$set": {"pedidos.$.cantidad": String(cantidad)}}, function(err, result) {
				client.close()
			});
		});

		//mesa.modificarPedidoCantidad(idPedido, cantidad);

		// return  {valor: "El nuevo pedido " + idPedido + " para la mesa: "
		// + mesa.getMesa() + " es: \n"
		// + mesa.mostrarPedido(idPedido), code: 200};
		return  {valor: "actualizado " + idPedido, code: 200};
	}
	catch(err) {
		return  {valor: "Cantidad no aplicable\n\n" + err, code: 404};
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
pedidoIdPUT(numero_mesa, idPedidoArg, idArg) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]
		let idPedido = idPedidoArg
		let id = idArg

		client.connect((err) => {
		const db = client.db("mesas")
			let mesaCursor = db.collection("mesa" + numero_mesa)

			const m = mesaCursor.updateOne({"pedidos.platoId": String(idPedido)},
			{"$set": {"pedidos.$.platoId": String(id)}}, function(err, result) {
				client.close()
			});
		});

		return  {valor: "actualizado " + idPedido, code: 200};

		// mesa.modificarPedidoId(idPedido, id);
		//
		// return  {valor: "El nuevo pedido " + id + " para la mesa: "
		// + mesa.getMesa() + " es: \n"
		// + mesa.mostrarPedido(id), code: 200};

	}
	catch(err) {
		return  {valor: "Pedido con id " + idPedidoArg + " no existe\n\n" + err, code: 404};
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
nuevoPedidoPUT(numero_mesa, idNuevoPlato, cantidadArg) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]
		let idPedido = idNuevoPlato
		let cantidad = cantidadArg

		mesa.incluirPedido(idPedido, cantidad)

		return  {valor: "El nuevo pedido incluido para la mesa: "
		+ mesa.getMesa() + " es: \n" + mesa.mostrarPedido(idPedido), code: 201};
	}
	catch(err) {
		return  {valor: "El nuevo pedido no se ha podido crear\n\n" + err, code: 404};
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
cambiarIngredientesPUT(numero_mesa, idPedidoArg, ingredientesArg) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]
		let idPedido = idPedidoArg
		let ingredientes = ingredientesArg

		mesa.modificarPedidoIngredientes(idPedido, ingredientes);

		return  {valor: "El pedido " + idPedido + " para la mesa: "
		+ mesa.getMesa() + " es: \n"
		+ mesa.mostrarPedido(idPedido), code: 200};

	}
	catch (err) {
		return {valor: "No se pueden cambiar los ingredientes\n\n" + err, code: 404}
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
cambiarUsuariosPUT(numero_mesa, usuariosArg) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]
		let usuarios = usuariosArg

		mesa.modificarUsuarios(usuarios);

		return  {valor: "Mesa " + mesa.getMesa() + ": " + mesa.toString(), code: 201};
	}
	catch (err) {
		return {valor:  "No se pueden cambiar los usuarios\n\n" + err, code: 404};
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
pedirCuentaPUT(numero_mesa) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]

		mesa.pedirCuenta();

		return  {valor: "Cuenta Pedida para la mesa " + mesa.getMesa() + ": "
		+ mesa.toString(), code: 200};
	}
	catch (err) {
		return {valor:  "No se puede pedir la cuenta\n\n" + err, code: 404};
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
eliminarPedidoDELETE(numero_mesa, idPedidoArg) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]
		let idPedido = idPedidoArg

		mesa.borrarPedido(idPedido);

		return  {valor: "El pedido " + idPedido + " ha sido eliminado para la mesa: "
		+ mesa.getMesa(), code: 200};
	}
	catch(err) {
		return  {valor: "Pedido " + idPedido + " no existe\n\n" + err, code: 404};
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
pagarPorSeparadoPUT(numero_mesa) {
	try {
		let numeroMesa = numero_mesa
		let mesa = this.mesas[numeroMesa-1]

		let total = mesa.pagarPorSeparado();
		let cad = "";

		for (let i=0; i < total.length; i++)
			cad += "El usuario " + (total[i].usuario+1) + " tiene que pagar " + total[i].precioTotal + "€\n"

		return {valor: cad, code: 200};
	}
	catch(err) {
		return {valor: "No se puede pagar por separado\n\n" + err, code: 404};
	}
}
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
}

module.exports = {
	Model
}
