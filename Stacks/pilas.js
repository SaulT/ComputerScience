class Stack {
    constructor(){
        this.count = 0
        this.storage = {}
    }

    push(item){
        this.count++
        this.storage[this.count]=item
        return this.count
    }
    pop(){
        const deletedItem = this.storage[this.count]
        delete this.storage[this.count]
        this.count--
        return deletedItem
    }
    peek(){
        const reviewItem = this.storage[this.count]
        return reviewItem
    }
    size(){
        return this.count
    }
}


/*
1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
Salida: ['Manzana','Cebolla','Apio','Naranja']
*/


const pila = new Stack()
pila.push('Manzana')
pila.push('Cebolla')
pila.push('Apio')
pila.push('Naranja')
pila.push('Papaya')
pila.push('Sandía')
pila.push('Melón')

//console.log('PILA ORIGINAL', pila)
retornarElementos(pila, 4);
//console.log('PILA ACTUALIZADA', pila)

function retornarElementos (pila, numero){
    while (pila.size() > numero) {
        pila.pop()
    }
}

/*
2.- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number "nuevo" y "viejo", 
de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]

*/

const pilaNumeros = new Stack()
pilaNumeros.push(3)
pilaNumeros.push(2)
pilaNumeros.push(3)
pilaNumeros.push(4)
pilaNumeros.push(6)
pilaNumeros.push(8)
pilaNumeros.push(1)
pilaNumeros.push(2)
pilaNumeros.push(5)
pilaNumeros.push(5)

console.log('PILA NUMEROS ORIGINAL', pilaNumeros.storage)
console.log('SIZE', pilaNumeros.size())
reemplazar(pilaNumeros, 7, 2);
console.log('PILA NUMEROS ACTUALIZADA', pilaNumeros.storage)

function reemplazar(pila, nuevo, viejo){
    for (let index = pila.size(); index >= 1; index--) {
        if(pila.storage[index] === viejo){
            pila.storage[index] = nuevo
            break
        } else{
            pila.pop()
        }
    }
}

/*
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/