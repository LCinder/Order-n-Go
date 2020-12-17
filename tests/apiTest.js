
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

describe("GET /mesa/2", function () {
	it("Muestra informacion mesa 2", async function () {
			const response = await supertest.get("/mesa/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Plato")
		});
});

describe("GET /mesa/2/pedido/1", function () {
	it("Muestra informacion pedido 1 de mesa 2", async function () {
			const response = await supertest.get("/mesa/2/pedido/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Id Plato")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 4 Cantidad******************/
/******************************************************************************/
describe("POST /mesa/2/pedido/1/cantidad/8", function () {
	it("Cambia la cantidad del pedido 1 de 1 a 8", async function () {
			const response = await supertest.post("/mesa/2/pedido/1/cantidad/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
		});
});

describe("GET /mesa/2/pedido/1/cantidad/8", function () {
	it("Obtiene la cantidad del pedido 1 cambiado de 1 a 8", async function () {
			const response = await supertest.get("/mesa/2/pedido/1/cantidad/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 4 Id************************/
/******************************************************************************/
describe("POST /mesa/2/pedido/1/id/8", function () {
	it("Cambia el id del pedido 1 de 1 a 8", async function () {
			const response = await supertest.post("/mesa/2/pedido/1/id/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
			expect(response.text).to.be.a("string").to.not.include("Id Plato: 1")
		});
});

describe("GET /mesa/2/pedido/1/id/8", function () {
	it("Obtiene el id del pedido cambiado de 1 a 8", async function () {
			const response = await supertest.get("/mesa/2/pedido/1")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
			expect(response.text).to.be.a("string").to.not.include("Id Plato: 1")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 2***************************/
/******************************************************************************/
describe("PUT /mesa/2/nuevopedido/100/8", function () {
	it("Crea un nuevo pedido con id 100 y cantidad 8", async function () {
			const response = await supertest.put("/mesa/2/nuevopedido/100/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("100").to.include("8")
		});
});

describe("GET /mesa/2/pedido/100", function () {
	it("Compueba el nuevo pedido con id 100 y cantidad 8", async function () {
			const response = await supertest.get("/mesa/2/pedido/100")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("100").to.include("8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 5************************/
/******************************************************************************/
describe("PUT /mesa/2/pedido/8/ingredientes/Curry,Otro", function () {
	it("Incluye en el pedido 8 los ingredientes a evitar curry y otro", async function () {
			const response = await supertest.put("/mesa/2/pedido/8/ingredientes/Curry,Otro")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Curry,Otro")
		});
});

describe("GET /mesa/2/pedido/8", function () {
	it("Comprueba en el pedido 8 los ingredientes a evitar curry y otro", async function () {
			const response = await supertest.put("/mesa/2/pedido/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Curry,Otro")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 1***************************/
/******************************************************************************/
describe("PUT /mesa/2/usuarios/8", function () {
	it("Cambia el numero de personas de la mesa 2 a 8", async function () {
			const response = await supertest.put("/mesa/2/usuarios/8")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
		});
});

describe("GET /mesa/2", function () {
	it("Comprueba que el numero de personas de la mesa 2 es 8", async function () {
			const response = await supertest.get("/mesa/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("8")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 3***************************/
/******************************************************************************/
describe("PUT /mesa/2/pedirCuenta", function () {
	it("Cambia el boolean de pedir cuenta a true", async function () {
			const response = await supertest.put("/mesa/2/pedirCuenta")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Cuenta pedida")
		});
});

describe("GET /mesa/2", function () {
	it("Obtiene el boolean de pedir cuenta a true", async function () {
			const response = await supertest.get("/mesa/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Cuenta pedida")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 7***************************/
/******************************************************************************/
describe("DELETE /mesa/2/pedido/1/eliminar", function () {
	it("Elimina el pedido 1 de la mesa 2", async function () {
			const response = await supertest.delete("/mesa/2/pedido/1/eliminar")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("eliminado")
		});
});

describe("GET /mesa/2/pedido/1", function () {
	it("Obtiene el pedido 1 de la mesa 2 eliminado", async function () {
			const response = await supertest.get("/mesa/2/pedido/1")
			expect(response.status).to.eql(404)
		});
});
/******************************************************************************/
/******************************Historia de Usuario 8***************************/
/******************************************************************************/
describe("PUT /mesa/2/pagarPorSeparado", function () {
	it("Devuelve que cada usuario quiere pagar por separado que debe pagar cada usuario", async function () {
			const response = await supertest.put("/mesa/2/pagarPorSeparado")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("usuario")
		});
});

describe("GET /mesa/2", function () {
	it("Obtiene pagarPorSeparado true", async function () {
			const response = await supertest.get("/mesa/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("usuario")
		});
});
/******************************************************************************/
/******************************Historia de Usuario 8***************************/
/******************************************************************************/
describe("POST /mesa/2/pagarPorSeparado", function () {
	it("Devuelve la cantidad que debe pagar cada usuario", async function () {
			const response = await supertest.post("/mesa/2/pagarPorSeparado")
			expect(response.status).to.eql(200)
		});
});

describe("GET /mesa/2", function () {
	it("Obtiene pagarPorSeparado precio", async function () {
			const response = await supertest.post("/mesa/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("300")
		});

		// Para cerrar el servidor cuando los test finalicen
		after(async () => {
			await fastify.close();
		});
});
