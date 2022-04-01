export const closeModal = () => {
  clearFields()
  document.querySelector('#close').classList.remove('.close')
}

// Funções de envio e recebimento do localstorage
export const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
export const setLocalStorage = (db_client) => localStorage.setItem('db_client', JSON.stringify(db_client))

// // -- CRUD --

//DELETE
export const deleteClient = (index) => {
  const db_client = readClient()
  db_client.splice(index, 1)
  setLocalStorage(db_client)
}

//UPDATE
export const updateClient = (index, client) => {
  const db_client = readClient()
  db_client[index] = client
  setLocalStorage(db_client)
}

// //READ
export const readClient = () => getLocalStorage()

// CREATE
export const createClient = (client) => {
  const db_client = getLocalStorage()
  db_client.push(client)
  setLocalStorage(db_client)
}

//Verifica se o formulário é válido
export const isValidFields = () => {
  return document.getElementById('form').reportValidity()
}

//Interação com usuário
export const clearFields = () => {
  const fields = document.querySelectorAll('#recipient-')
  fields.forEach(field => field.value = '')
}

//Salvando cliente
export const saveCel = () => {
  if (isValidFields()) {
    const client = {
      codigo: document.getElementById('recipient-codigo').value,
      modelo: document.getElementById('recipient-modelo').value,
      preco: document.getElementById('recipient-preco').value,
      marca: document.getElementById('recipient-marca').value,
      cor: document.getElementById('recipient-cor').value
    }
    const index = document.getElementById('recipient-codigo').dataset.index
    if (index === 'new') {
      createClient(client)
      updateTable()
      closeModal()
    } else {
      updateClient(index, client)
      updateTable()
      closeModal()
    }
  }
}

//Criando um item (linha) no HTML
export const createRow = (client, index) => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
  <td>${client.codigo}</td>
  <td>${client.modelo}</td>
  <td>R$ ${client.preco}</td>
  <td>${client.marca}</td>
  <td>${client.cor}</td>
  <td>
    <button class="btn btn-secondary m-1" id="editar-${index}" data-toggle="modal" data-target="#exampleModal">Editar</button>
    <button class="btn btn-danger m-1" id="excluir-${index}">Excluir</button>
  </td>
  `
  document.querySelector('#tableClient>tbody').appendChild(newRow)
}

//Limpando tabela
export const clearTable = () => {
  const rows = document.querySelectorAll('#tableClient>tbody tr')
  rows.forEach(row => row.parentNode.removeChild(row))
}

//Atualizando Tabela
export const updateTable = () => {
  const db_client = readClient()
  clearTable()
  db_client.forEach(createRow)
}

export const fillFields = (client) => {
  document.getElementById('recipient-codigo').value = client.codigo;
  document.getElementById('recipient-modelo').value = client.modelo;
  document.getElementById('recipient-preco').value = client.preco;
  document.getElementById('recipient-marca').value = client.marca;
  document.getElementById('recipient-cor').value = client.cor;
  document.getElementById('recipient-codigo').dataset.index = client.index;
}

export const editCel = (index) => {
  const client = readClient()[index]
  client.index = index
  fillFields(client)
}

export const editDelete = (event) => {
  if (event.target.type === 'submit') {

    const [action, index] = event.target.id.split('-')

    if (action === 'editar') {
      editCel(index)
    } else {
      const client = readClient()[index]
      const response = window.confirm(`Tem certeza que deseja excluir ?`)
      if (response === true) {
        deleteClient(index)
        updateTable()
      }
    }
  }
}

updateTable()

//Capturar botão Cadastro
document.querySelector('#btnSalvar')
  .addEventListener('click', saveCel)

document.querySelector('#tableClient>tbody')
  .addEventListener('click', editDelete)