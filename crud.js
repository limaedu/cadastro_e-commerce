// CRUD - create read update delete


const tempClient = {
    nome: "Bruno",
    email: "lima.edu@poli.ufrj.br",
    cidade: "RJ",
    idade: 25
}


const getLocalStorage = () => JSON.parse(localStorage.getItem("client")) ?? []
const setLocalStorage = (dbClients) => localStorage.setItem("client",JSON.stringify(dbClients))


// Update
const updateClient = (index,client) => { 
    const dbClients = readClient()
    dbClients[index] = client
    setLocalStorage(dbClients)
}

// Delete
const deleteClient = index => {
    const dbClients = readClient()
    dbClients.splice(index,1)
    setLocalStorage(dbClients)
}


// CREATE
const createClient = client => {
    const dbClients = getLocalStorage()
    dbClients.push(client)
    setLocalStorage(dbClients)
}

// READ
const readClient = () => getLocalStorage()


createClient(tempClient) 