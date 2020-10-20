
# :globe_with_meridians: ¿Por qué usar AVA para test? :globe_with_meridians: 

Para los test se usará [AVA](https://github.com/avajs/ava) que es un *test runner* para *Node.js* sencillo de usar, frecuentemente actualizado y mucho más rápido que otros como *Mocha* o *Chai* ya que éstos usan *globales implícitos* sin aislamiento de procesos, lo que los hace lentos. 
Permite aserciones, como se indica [aquí](https://blog.adrianistan.eu/usar-ava-para-tests-en-una-api-hecha-en-node-js-y-express) ya que la función principal de esta biblioteca, llamada *is,* es como *assert.equal* de *xUnit*, además de otras muchas funciones que serán de utilidad.

Además quería probar algo diferente que nadie eligiese y busqué uno no muy conocido para aprender otros tipos de *frameworks.*