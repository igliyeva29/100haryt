export type UserDataT = {
    phone: string;
    password: string;
    passwordConfirm: string;
}

export type UserLoginDataT = {
  id?:string;
  phone:string;
  password?:string;
  token?:string;
}