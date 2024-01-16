import type { AxiosInstance } from "axios"
import axios from "axios"
import type { IData } from "../models/data.ts"

const server_id = document
  .getElementsByName("server_id")[0]
  .getAttribute("content") as string
const extension_id = document
  .getElementsByName("extension_id")[0]
  .getAttribute("content") as string
const csrf = document
  .getElementsByName("csrf-token")[0]
  .getAttribute("content") as string
const lmnbaseurl = window.location.origin
const customRequestData = window.customRequestData
export default class AxiosClient {
  private data: IData
  private loadingBarStatus: boolean = false
  private loadingBarCounter: number = 0

  constructor(data: IData) {
    this.data = data
    this.apiClient.interceptors.request.use(
      (config) => {
        this.startLoadingBar()
        return config
      },
      (error) => {
        this.errorOnLoadingBar()
        return Promise.reject(error)
      },
    )
    this.apiClient.interceptors.response.use(
      (response) => {
        if (response.data.status == 200) {
          response.data = response.data.message
          this.stopLoadingBar()
        } else {
          this.errorOnLoadingBar()
        }
        return response
      },
      (error) => {
        this.errorOnLoadingBar()
        return Promise.reject(error)
      },
    )
  }

  startLoadingBar() {
    if (!this.loadingBarStatus) {
      window.$loadingBar.start()
      this.loadingBarStatus = true
    }
    this.loadingBarCounter++
  }

  stopLoadingBar() {
    if (this.loadingBarStatus && this.loadingBarCounter == 1) {
      window.$loadingBar.finish()
      this.loadingBarStatus = false
    }
    this.loadingBarCounter--
  }

  errorOnLoadingBar() {
    if (this.loadingBarStatus && this.loadingBarCounter == 1) {
      window.$loadingBar.error()
      this.loadingBarStatus = false
    }
    this.loadingBarCounter--
  }

  apiClient: AxiosInstance = axios.create({
    headers: {
      "Content-Type": "multipart/form-data",
      "X-CSRF-TOKEN": csrf,
    },
    baseURL: "/engine/",
    timeout: 30000,
    transformRequest: [
      (data) => {
        const formData = new FormData()
        formData.append("server_id", server_id)
        formData.append("extension_id", extension_id)
        formData.append("lmnbaseurl", lmnbaseurl)
        formData.append("token", customRequestData.token)
        formData.append("locale", customRequestData.locale)
        formData.append("limanJSRequest", "true")

        for (const key in this.data) {
          if (Object.prototype.hasOwnProperty.call(this.data, key)) {
            formData.append(key, this.data[key])
          }
        }

        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            if (formData.has(key)) formData.delete(key)
            formData.append(key, data[key])
          }
        }

        return formData
      },
    ],
  })
}
