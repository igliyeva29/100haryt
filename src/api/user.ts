import { type AxiosResponse } from "axios"
import type { UserDataT, UserLoginDataT } from "../types/User"
import { axiosInstance } from "./axiosInstance"

export const register = async(data:UserDataT)=>{
  try {
    const res = await axiosInstance.post("users",data)
    if (res.status === 201){
      return res.data
    }
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}


export const login = async(data:UserLoginDataT)=>{
  try {
    let res:AxiosResponse<UserLoginDataT[]> | undefined;
    if (data.email){
      res = await axiosInstance.get("users?email="+data.email)
    }else if(data.phone){
      res = await axiosInstance.get("users?phone="+data.phone)
    }
    if(res && res.status == 200){
      if(res.data[0].password === data.password){
        res.data[0].token = `mock-token-${Math.random().toString(36).substr(2)}`
        return res
      }else{
        throw new Error("Sizin achar sozuniz yalnysh")
      }
    }
  } catch (error) {
    throw new Error("Ýalňyşlyk bar");
  }
}


