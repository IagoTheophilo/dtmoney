import axios from 'axios'

export const api = axios.create({
  baseURL:'https://dtmoney-iagotheophilo.vercel.app/api'
})