import axios from 'axios'
import { destroyCookie, parseCookies } from 'nookies'
import { toast } from 'react-toastify'

export const requestAxios = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 8000,
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
})

export const requestV2 = axios.create({
  baseURL: process.env.BASE_URL_V2,
  timeout: 8000,
})

const errorHandler = (error, hooks) => {
  if (error?.response) {
    if (error.response?.statusText) {
      toast.error(error.response?.statusText)
    }

    if (error?.response?.status === 401) {
      if (typeof window !== 'undefined') {
        destroyCookie(null, 'token')
        localStorage.clear()
        window.location.replace('/')
      }
    }
  }

  return Promise.reject(error.response)
}

requestAxios.interceptors.response.use(
  (response) => response.data,
  errorHandler
)

requestV2.interceptors.request.use(
  (config) => {
    const cookies = parseCookies()

    if (!config.headers?.token) config.headers.token = process.env.TOKEN_V2

    const token = cookies.token
    if (token && !config.url.includes('branch-nearby')) {
      config.headers.token = token
    }

    return config
  },

  errorHandler
)

requestV2.interceptors.response.use((response) => response.data, errorHandler)
