import { useMutation} from "@tanstack/react-query"
import { login, register} from "../api/user"
import toast from "react-hot-toast"
import type { AxiosResponse } from "axios"
import type { UserLoginDataT } from "../types/User"

export const useRegister = ()=>{
  return useMutation({
    mutationFn:register,
    onSuccess:()=>{
      alert("Siz ustunlikli registrasiya boldunyz")
    },
    onError:()=>{
      alert("Hello yalnyshlyk")
    }
  })
}

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data: UserLoginDataT | undefined) => {
      if (data) {
        toast.success("Siz ustinlikli iceri girdiniz!")

        localStorage.setItem("user", JSON.stringify(data))
        localStorage.setItem("token", data.token || "")
      }
    },
    onError: () => {
      alert("Hello yalnyshlyk")
    }
  })
}
