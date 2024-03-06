const produtos = [
    { nome: "Caneta", qtde: 20, valor: 2.50 },
    { nome: "Impressora", qtde: 2, valor: 850.99 },
    { nome: "Mouse", qtde: 15, valor: 67.00 },
    { nome: "Headset", qtde: 5, valor: 350 },
    { nome: "Tenis", qtde: 50, valor: 750.50 },
    { nome: "Celular", qtde: 10, valor: 1000.00 },
]

function getRandomValuesFromArray(array, randomQuantity) {
    if(randomQuantity > array.length) return "Deu ruim"
    let randomProducts = []

    while(randomProducts.length < randomQuantity) {
        let randomNumber = Math.floor(Math.random() * array.length)
        console.log(randomNumber)
        if(!randomProducts.includes(array[randomNumber])) {
            console.log(array[randomNumber])
            randomProducts.push(array[randomNumber])
        }
    }
    return randomProducts
}

console.log(getRandomValuesFromArray(produtos, 6))