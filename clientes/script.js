// Inouts
const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const telefoneInput = document.getElementById("telefone")
const cidadeInput = document.getElementById("cidade")

// Submit button
const submitButton = document.querySelector(".button")

// Form
const form = document.querySelector(".form")

const getLocalStorage = () => JSON.parse(localStorage.getItem("client")) ?? []
const setLocalStorage = (dbClients) => localStorage.setItem("client",JSON.stringify(dbClients))

const createClient = client => {
    const dbClients = getLocalStorage()
    dbClients.push(client)
    setLocalStorage(dbClients)
}


form.addEventListener("submit", e => {
    e.preventDefault();

    let nome = nomeInput.value;

    let email = emailInput.value;

    let telefone = telefoneInput.value;

    let cidade = cidadeInput.value;

    let client = {
        nome: nome,
        email: email,
        telefone: telefone,
        cidade: cidade
    }

    createClient(client)

    alert("Cliente cadastrado com sucesso!")
    form.reset()

    
})