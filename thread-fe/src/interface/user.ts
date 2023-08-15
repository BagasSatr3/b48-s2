export interface IUser {
    id?: number
    full_name?: string
    username?: string
    email?:string
    picture?: string
}

export interface IUserRegister {
    id?: number
    full_name?: string
    username?: string
    email?:string
    password?: string
}

export interface IUserLogin {
    email?:string
    password?: string
}