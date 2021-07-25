// Inouts
const nomeInput = document.getElementById("nome")
const marcaInput = document.getElementById("marca")
const precoInput = document.getElementById("preco")
const qtdInput = document.getElementById("quantidade")

// Submit button
const submitButton = document.querySelector(".button")

// Form
const form = document.querySelector(".form")

const getLocalStorage = () => JSON.parse(localStorage.getItem("product")) ?? []
const setLocalStorage = (dbProducts) => localStorage.setItem("product",JSON.stringify(dbProducts))

const createProduct = product => {
    const dbProducts = getLocalStorage()
    dbProducts.push(product)
    setLocalStorage(dbProducts)
}


form.addEventListener("submit", e => {
    e.preventDefault();

    let nome = nomeInput.value;

    let marca = marcaInput.value;

    let preco = precoInput.value;

    let qtd = qtdInput.value;

    let product = {
        nome: nome,
        marca: marca,
        preco: preco
    }

    let n = 0
    while (n < qtd) {
        createProduct(product)
        n++
    }
    
    form.reset()
    createProduct(product)

    
})