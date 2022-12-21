import { useAxios } from './useAxios'
import { AxiosRequestConfig } from 'axios'

export const useAPI = <P = any>(endpoint: string, options?: AxiosRequestConfig) => {
    const be_url = process.env.NEXT_PUBLIC_BACKEND_URL || "";

    return useAxios<P>(be_url, endpoint, {
        method: "POST",
        ...options
    })
}