/*
1. Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/
class Queue{
    constructor(){
        this.queue = []
    }
    get size(){
        return this.queue.length
    }
    enqueue(item){
        this.queue.push(item)
    }
    dequeue(){
        this.queue.shift()
    }
    front(){
        return this.queue[0]
    }
    back(){
        return this.queue[this.size-1]
    }
    print(){
        return this.queue
    }
    isEmpty(){
        if(this.size===0){
            return true
        } else{
            return false
        }
    }
}
const colaOriginal = new Queue()
colaOriginal.enqueue('amarillo')
colaOriginal.enqueue('rosa')
colaOriginal.enqueue('rojo')
colaOriginal.enqueue('verde')
colaOriginal.enqueue('azul')
colaOriginal.enqueue('negro')
colaOriginal.enqueue('morado')
colaOriginal.enqueue('blanco')
//console.log('COLA ORIGINAL', colaOriginal.print())

const cola1 = new Queue()
const cola2 = new Queue()

for (let index = 0; index < colaOriginal.size; index++) {
    if(index%2==0){
        cola1.enqueue(colaOriginal.queue[index])
    } else{
        cola2.enqueue(colaOriginal.queue[index])
    }
}
//console.log('COLA 1', cola1.print())
//console.log('COLA 2',cola2.print())


/*
2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos "colados", es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
 
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
 
Cola: [
{ user:'User1', ticket:true },
{ user:'User2', ticket:true },
{ user:'User3', ticket:false },
{ user:'User4', ticket:true },
{ user:'User5', ticket:false },
{ user:'User6', ticket:false },
{ user:'User7', ticket:true },
{ user:'User8', ticket:true },
{ user:'User9', ticket:true },
{ user:'User10', ticket:false },
{ user:'User11', ticket:true },
];
*/

const colaOriginalTickets = new Queue()
colaOriginalTickets.enqueue({ user:'User1', ticket:true })
colaOriginalTickets.enqueue({ user:'User2', ticket:true })
colaOriginalTickets.enqueue({ user:'User3', ticket:false })
colaOriginalTickets.enqueue({ user:'User4', ticket:true })
colaOriginalTickets.enqueue({ user:'User5', ticket:false })
colaOriginalTickets.enqueue({ user:'User6', ticket:false })
colaOriginalTickets.enqueue({ user:'User7', ticket:true })
colaOriginalTickets.enqueue({ user:'User8', ticket:true })
colaOriginalTickets.enqueue({ user:'User9', ticket:true })
colaOriginalTickets.enqueue({ user:'User10', ticket:false })
colaOriginalTickets.enqueue({ user:'User11', ticket:true })
console.log('COLA ORIGINAL', colaOriginalTickets.print())

const colaLegal = new Queue()
const colados = new Queue()

for (let index = 0; index < colaOriginalTickets.size; index++) {
    if(colaOriginalTickets.queue[index].ticket === true){
        colaLegal.enqueue(colaOriginalTickets.queue[index])
    } else {
        colados.enqueue(colaOriginalTickets.queue[index])
    }
}

console.log('COLA LEGAL', colaLegal.print())
console.log('COLADOS', colados.print())