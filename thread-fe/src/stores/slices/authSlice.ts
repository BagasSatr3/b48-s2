import { IUser, IUserLogin } from "@/interface/user";
import { createSlice } from "@reduxjs/toolkit"

const initialAuthState: IUser = {
    id: 0,
    email: "",
    full_name: "",
    picture: "",
    username: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (state, action) => {
            const payload = action.payload
            console.log("this is your data:", action.payload)
            localStorage.setItem("token", action.payload.token)

            const user: IUser = {
                id: payload.user.id,
                full_name: payload.user.full_name,
                username: payload.user.username,
                email: payload.user.email
            }

            console.log("ini sttemuL", state)
            
            state = user
            return state
        },
        AUTH_CHECK: (state, action) => {
            const user = action.payload

            // state.data = user
        },
        AUTH_ERROR: (state) => {

        },
        AUTH_LOGOUT: (state) => {

        },
    }
}) 