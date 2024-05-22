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
            state.userId = action.payload.user.id;
            state.user = action.payload;
            state.userAppointments= [];
            console.log("Usuario en estado global: ", state.user)
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = Array.isArray(action.payload) ? action.payload : [action.payload];
            console.log("Turno en estado global: ", state.userAppointments)
        },
       cancelUserAppointment: (state, action) => {
            state.userAppointments = state.userAppointments.filter(appointment => appointment.id !== action.payload);
        }
    }
});

export const { setUser, setUserAppointments, cancelUserAppointment } = userSlice.actions;
export default userSlice.reducer;