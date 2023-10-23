import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

export function makeRequest(url, options){
  return api(url, options)
    .then(res => res.data)
    .catch(error => Promise.reject(error?.response?.data?.message ?? "Error"))
}
