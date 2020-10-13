
const test = require("ava")
const order = require("./../src/index.js")

test ("Creacion mesa", t => {
	let mesa1 = new order.constructor(1, 5, false, true)
	t.is((typeof mesa1), "object")
})
