import { type AxiosResponse } from "axios"
import type { UserDataT, UserLoginDataT } from "../types/User"
import { axiosInstance } from "./axiosInstance"

export const register = async (data: UserDataT) => {
  try {
    const res = await axiosInstance.post("users", data)
    if (res.status === 201) {
      return res.data
    }
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}


export const login = async (data: UserLoginDataT) => {
  try {
    const res = await axiosInstance.get("users?phone=" + data.phone)

    if (res.status === 200 && res.data.length > 0) {
      const user = res.data[0]

      if (user.password === data.password) {
        user.token = `mock-token-${Math.random().toString(36).substr(2)}`
        return user
      } else {
        throw new Error("Sizin achar sozuniz yalnysh")
      }
    } else {
      throw new Error("Ulanyjy tapylmady")
    }
  } catch (error) {
    throw new Error("Ýalňyşlyk bar")
  }
}


