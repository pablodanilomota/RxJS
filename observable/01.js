const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
  resolve('Promise é bem legal!')
})

promise.then(console.log)

const observable = new Observable(subscriber => {
  subscriber.next('Observable')
  subscriber.next('é')
  subscriber.next('bem')
  setTimeout(() => {
    subscriber.next('legal!')
    subscriber.complete()
  }, 1000)
})

observable.subscribe(console.log)
observable.subscribe(texto => console.log(texto.toUpperCase()))
