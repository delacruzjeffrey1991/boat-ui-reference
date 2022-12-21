import Axios from 'axios'

const token : string | null =  typeof window !== 'undefined' ? window.localStorage.getItem("Token:") : "";

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      ...( token && {'Authorization': token }),
    },
})

export default axios
