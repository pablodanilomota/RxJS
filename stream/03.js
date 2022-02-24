const { interval } = require('rxjs')

const gerarNumeros = interval(500)

const sub1 = gerarNumeros.subscribe(numero => console.log(Math.pow(2, numero)))
const sub2 = gerarNumeros.subscribe(console.log)

setTimeout(() => {
  sub1.unsubscribe()
}, 8000)

setTimeout(() => {
  sub2.unsubscribe()
}, 6000)

/**
 * Exemplo com from.
 */
// from([1, 2, 3, 4, 5]).subscribe(console.log)
