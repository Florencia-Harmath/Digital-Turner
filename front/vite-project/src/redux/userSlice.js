import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userAppointments: [],
    userId: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const user = action.payload;
            state.userId = user.id;
            state.user = user;
            state.userAppointments = [];
            console.log("Usuario en estado global: ", state.user);
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = Array.isArray(action.payload) ? action.payload : [action.payload];
            console.log("Turno en estado global: ", state.userAppointments);
        },
        cancelUserAppointments: (state, action) => {
            state.userAppointments = state.userAppointments.filter(appointment => appointment.id !== action.payload);
        },
        logout: (state) => {
            state.userId = null;
            state.user = null;
            state.userAppointments = [];
        }
    }
});

export const { setUser, setUserAppointments, cancelUserAppointments, logout } = userSlice.actions;

export const selectUser = state => state.user.user;
export const selectUserRole = state => state.user.user ? state.user.user.role : 'guest';

export default userSlice.reducer;
