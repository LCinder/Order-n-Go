
const supertest = require("supertest")("http://localhost:5000")
const fastify = require("./../src/routes.js")
const expect = require("chai").expect

// describe("GET /", function () {
// 	it("Deberia devolver string Funciona", async function () {
// 			const response = await supertest.get("/")
// 			expect(response.status).to.eql(200)
// 			expect(response.text).to.be.a("string").to.include("Funciona")
// 		});
// });

describe("GET /2", function () {
	it("Muestra informacion mesa 2", async function () {
			const response = await supertest.get("/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Plato")
		});
});

describe("GET /2/1", function () {
	it("Muestra informacion pedido 1 de mesa 2", async function () {
			const response = await supertest.get("/2/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Id Plato")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 4 Cantidad******************/
/******************************************************************************/
describe("PUT /2/1/cantidad/8", function () {
	it("Cambia la cantidad del pedido 1 de 1 a 8", async function () {
			const response = await supertest.put("/2/1/cantidad/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
		});
});

describe("GET /2/1/cantidad/8", function () {
	it("Obtiene la cantidad del pedido 1 cambiado de 1 a 8", async function () {
			const response = await supertest.get("/2/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 4 Id************************/
/******************************************************************************/
describe("PUT /2/1/id/8", function () {
	it("Cambia el id del pedido 1 de 1 a 8", async function () {
			const response = await supertest.put("/2/1/id/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
			expect(response.text).to.be.a("string").to.not.include("Id Plato: 1")
		});
});

describe("GET /2/8", function () {
	it("Obtiene el id del pedido cambiado de 1 a 8", async function () {
			const response = await supertest.get("/2/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Id Plato: 8")
			expect(response.text).to.be.a("string").to.not.include("Id Plato: 1")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 2***************************/
/******************************************************************************/
describe("POST /2/nuevopedido/100/8", function () {
	it("Crea un nuevo pedido con id 100 y cantidad 8", async function () {
			const response = await supertest.post("/2/nuevopedido/100/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("100").to.include("8")
		});
});

describe("GET /2/100", function () {
	it("Compueba el nuevo pedido con id 100 y cantidad 8", async function () {
			const response = await supertest.get("/2/100")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Id Plato: 100")
			.to.include("Cantidad: 8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 5************************/
/******************************************************************************/
describe("PUT /2/100/ingredientes/Curry,Otro", function () {
	it("Incluye en el pedido 8 los ingredientes a evitar curry y otro", async function () {
			const response = await supertest.put("/2/100/ingredientes/Curry,Otro")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Curry,Otro")
		});
});

describe("GET /2/100", function () {
	it("Comprueba en el pedido 8 los ingredientes a evitar curry y otro", async function () {
			const response = await supertest.get("/2/100")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Curry,Otro")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 1***************************/
/******************************************************************************/
describe("PUT /2/usuarios/8", function () {
	it("Cambia el numero de personas de la mesa 2 a 8", async function () {
			const response = await supertest.put("/2/usuarios/8")
			expect(response.status).to.eql(200)
		});
});

describe("GET /2", function () {
	it("Comprueba que el numero de personas de la mesa 2 es 8", async function () {
			const response = await supertest.get("/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Personas: 8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 3***************************/
/******************************************************************************/
describe("PUT /2/pedirCuenta", function () {
	it("Cambia el boolean de pedir cuenta a true", async function () {
			const response = await supertest.put("/2/pedirCuenta")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Cuenta pedida")
		});
});

describe("GET /2", function () {
	it("Obtiene el boolean de pedir cuenta a true", async function () {
			const response = await supertest.get("/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Cuenta pedida")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 7***************************/
/******************************************************************************/
describe("DELETE /2/1/eliminar", function () {
	it("Elimina el pedido 1 de la mesa 2", async function () {
			const response = await supertest.delete("/2/1/eliminar")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("eliminado")
		});
});

describe("GET /2/1", function () {
	it("Obtiene el pedido 1 de la mesa 2 eliminado", async function () {
			const response = await supertest.get("/2/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("No existe")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 8***************************/
/******************************************************************************/
describe("PUT /2/pagarPorSeparado", function () {
	it("Devuelve que cada usuario quiere pagar por separado que debe pagar cada usuario", async function () {
			const response = await supertest.put("/2/pagarPorSeparado")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("usuario")
		});
});

describe("GET /2", function () {
	it("Obtiene pagarPorSeparado true", async function () {
			const response = await supertest.get("/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Pagar por separado si")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 8***************************/
/******************************************************************************/
describe("PUT /2/pagarPorSeparado", function () {
	it("Devuelve la cantidad que debe pagar cada usuario", async function () {
			const response = await supertest.put("/2/pagarPorSeparado")
			expect(response.status).to.eql(200)
		});
});

describe("GET /2/pagarSeparado", function () {
	it("Obtiene pagarPorSeparado precio", async function () {
			const response = await supertest.put("/2/pagarPorSeparado")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("30")
		});

		// Para cerrar el servidor cuando los test finalicen
		after(async () => {
			await fastify.close();
		});
});
