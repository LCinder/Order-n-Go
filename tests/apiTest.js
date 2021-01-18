
const supertest = require("supertest")("0.0.0.0:5000")
const fastify = require("./../src/routes.js")
const expect = require("chai").expect

describe("GET /status", function () {
	it("Deberia devolver string Funciona", async function () {
			const response = await supertest.get("/status")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("OK")
		});
});

describe("GET /1", function () {
	it("Muestra informacion mesa 1", async function () {
			const response = await supertest.get("/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Mesa")
		});
});

describe("GET /1/35", function () {
	it("Muestra informacion pedido 35 de mesa 1", async function () {
			const response = await supertest.get("/1/35")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Id Plato")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 4 Cantidad******************/
/******************************************************************************/
describe("PUT /1/35/cantidad/8", function () {
	it("Cambia la cantidad del pedido 35 de 1 a 8", async function () {
			const response = await supertest.put("/1/35/cantidad/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.include("actualizado")
		});
});

describe("GET /1/35/cantidad/8", function () {
	it("Obtiene la cantidad del pedido 35 cambiado de 1 a 8", async function () {
			const response = await supertest.get("/1/35")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 4 Id************************/
/******************************************************************************/
describe("PUT /1/35/id/10", function () {
	it("Cambia el id del pedido 35 a 10", async function () {
			const response = await supertest.put("/1/35/id/10")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("actualizado")
		});
});

describe("GET /1/10", function () {
	it("Obtiene el id del pedido cambiado de 35 a 10", async function () {
			const response = await supertest.get("/1/10")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Id Plato: 10")
			expect(response.text).to.be.a("string").to.not.include("Id Plato: 35")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 4 Reversion*****************/
/******************************************************************************/
describe("PUT /1/10/id/35 Reversion", function () {
	it("Cambiamos de nuevo el id del pedido 10 a 35 para dejarlo como estaba", async function () {
			const response = await supertest.put("/1/10/id/35")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("actualizado")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 2***************************/
/******************************************************************************/
describe("POST /1/nuevopedido/100/8", function () {
	it("Crea un nuevo pedido con id 100 y cantidad 8", async function () {
			const response = await supertest.post("/1/nuevopedido/100/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("actualizado");
		});
});
/******************************************************************************/
/******************************Historia de Usuario 5************************/
/******************************************************************************/
describe("PUT /1/35/ingredientes/Curry,Otro", function () {
	it("Incluye en el pedido 8 los ingredientes a evitar curry y otro", async function () {
			const response = await supertest.put("/1/35/ingredientes/Curry,Otro")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("actualizado")
		});
});

describe("GET /1/35", function () {
	it("Comprueba en el pedido 8 los ingredientes a evitar curry y otro", async function () {
			const response = await supertest.get("/1/35")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Curry,Otro")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 4 Reversion*****************/
/******************************************************************************/
describe("GET /1/35 Reversion", function () {
	it("Volvemos a obtener el id del pedido cambiado de 10 a 35", async function () {
			const response = await supertest.get("/1/35")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Id Plato: 35")
			expect(response.text).to.be.a("string").to.not.include("Id Plato: 10")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 1***************************/
/******************************************************************************/
describe("PUT /1/usuarios/8", function () {
	it("Cambia el numero de personas de la mesa 1 a 8", async function () {
			const response = await supertest.put("/1/usuarios/8")
			expect(response.status).to.eql(200)
		});
});

describe("GET /1", function () {
	it("Comprueba que el numero de personas de la mesa 1 es 8", async function () {
			const response = await supertest.get("/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Personas: 8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 3***************************/
/******************************************************************************/
describe("PUT /1/pedirCuenta", function () {
	it("Cambia el boolean de pedir cuenta a true", async function () {
			const response = await supertest.put("/1/pedirCuenta")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("actualizado")
		});
});

describe("GET /1", function () {
	it("Obtiene el boolean de pedir cuenta a true", async function () {
			const response = await supertest.get("/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Cuenta pedida")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 2***************************/
/******************************************************************************/
describe("GET /1/100", function () {
	it("Compueba el nuevo pedido con id 100 y cantidad 8", async function () {
			const response = await supertest.get("/1/100")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Id Plato: 100")
			.to.include("Cantidad: 8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 7***************************/
/******************************************************************************/
describe("DELETE /1/100/eliminar", function () {
	it("Elimina el pedido 1 de la mesa 2", async function () {
			const response = await supertest.delete("/1/100/eliminar")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("borrado")
		});
});

describe("GET /1", function () {
	it("Obtiene el pedido 1 de la mesa 2 eliminado", async function () {
			const response = await supertest.get("/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.not.include("100")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 8***************************/
/******************************************************************************/
describe("PUT /1/pagarPorSeparado", function () {
	it("Devuelve que cada usuario quiere pagar por separado que debe pagar cada usuario", async function () {
			const response = await supertest.put("/1/pagarPorSeparado")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("usuario")
		});
});

describe("GET /1", function () {
	it("Obtiene pagarPorSeparado true", async function () {
			const response = await supertest.get("/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Pagar por separado si")
		});
});
