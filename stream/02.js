const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function gerarElementos(array) {
  return {
    iniciar(fn, intervalo = 1000) {
      let indice = 0
      const i = setInterval(() => {
        if (indice >= array.length) {
          clearInterval(i)
        } else {
          fn(array[indice])
          indice++
        }
      }, intervalo)

      return {
        parar() {
          clearInterval(i)
        }
      }
    }
  }
}

const temp1 = gerarElementos(numeros)
const exec1 = temp1.iniciar(numero => console.log(Math.pow(2, numero)))

setTimeout(() => {
  exec1.parar()
}, 4000)

gerarElementos([
  ['Ana', 'Bia', 'Carlos'],
  ['Daniel', 'Eduardo', 'Fagner'],
  [1, 2, 3, 4, 5]
]).iniciar(console.log)
