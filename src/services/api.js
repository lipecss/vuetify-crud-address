import axios from 'axios'

const apiBase = process.env.VUE_APP_API

const api = axios.create({
  baseURL: apiBase,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add um novo endereço
export async function addaddress (cep) {
  return await api.get(`/${cep}/json`).then(response => {
    return response.data
  }).catch(error => {
    return {
      status: 'error',
      data: error.message
    }
  })
}
