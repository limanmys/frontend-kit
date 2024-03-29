import type { IData } from "../models/data.ts"
import type { AxiosInstance, AxiosResponse } from "axios"
import { reactive } from "vue"
import AxiosClient from "./axios-client.ts"

export class HttpClient {
  axiosClient!: AxiosInstance
  isAuthenticated = reactive({
    value: false,
  })
  
  constructor(lmntargetFunction = "apiProxy", args?: any) {
    this.axiosClient = new AxiosClient({
      lmntargetFunction: lmntargetFunction,
      ...args,
    }).apiClient
  }
  async get<T = any>(
    url: string,
    data?: IData,
  ): Promise<AxiosResponse<T, any>> {
    return this.axiosClient.post<T>("", {
      type: "get",
      endpoint: url,
      ...data,
    })
  }

  async post<T = any>(
    url: string,
    data?: IData,
  ): Promise<AxiosResponse<T, any>> {
    return this.axiosClient.post<T>("", {
      type: "post",
      endpoint: url,
      ...data,
    })
  }

  async put<T = any>(
    url: string,
    data?: IData,
  ): Promise<AxiosResponse<T, any>> {
    return this.axiosClient.post<T>("", {
      type: "put",
      endpoint: url,
      ...data,
    })
  }

  async patch<T = any>(
    url: string,
    data?: IData,
  ): Promise<AxiosResponse<T, any>> {
    return this.axiosClient.post<T>("", {
      type: "patch",
      endpoint: url,
      ...data,
    })
  }

  async delete<T = any>(
    url: string,
    data?: IData,
  ): Promise<AxiosResponse<T, any>> {
    return this.axiosClient.post<T>("", {
      type: "delete",
      endpoint: url,
      ...data,
    })
  }

  async downloadFile(url: string, endpoint: string, data?: IData) {
    const a = new AxiosClient({}).apiClient

    return a.post(
      "",
      {
        ...data,
        lmntargetFunction: url,
        type: "post",
        endpoint,
      },
      {
        responseType: "blob",
      },
    )
  }

  async php(url: string, data?: IData) {
    const a = new AxiosClient({}).apiClient

    return a.post("", {
      ...data,
      lmntargetFunction: url,
      type: "post",
    })
  }
}

const http = new HttpClient()

export default http
