const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
    uid: '',
    email: '',
}

const authSlice = createSlice({
    name:'auth',
    initialState:{
        authData:initialState,
    },
    reducers:{
        setAuthData:(state:any, action:any) => {
            state.authData = action.payload;
        },
        removeAuthData:(state:any) => {
            state.authData = initialState;
        },
    },
});

export const {setAuthData, removeAuthData} = authSlice.actions;
export default authSlice.reducer;
export const authSelector = (state:any) => state.auth.authData;

