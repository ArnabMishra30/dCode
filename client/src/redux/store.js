import { createSlice, configureStore } from '@reduxjs/toolkit';

// Initialize login state from localStorage
const initialState = {
    isLogin: !!localStorage.getItem('isLogin')
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
            localStorage.setItem('isLogin', true);
        },
        logout(state) {
            state.isLogin = false;
            localStorage.removeItem('isLogin');
        },
        
    }
});

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer,
});


// import { createSlice, configureStore } from '@reduxjs/toolkit';

// // Initialize login state from localStorage
// const initialState = {
//     isLogin: !!localStorage.getItem('isLogin'),
//     userId: localStorage.getItem('userId') || null
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login(state, action) {
//             state.isLogin = true;
//             state.userId = action.payload.userId;
//             localStorage.setItem('isLogin', true);
//             localStorage.setItem('userId', action.payload.userId);
//         },
//         logout(state) {
//             state.isLogin = false;
//             state.userId = null;
//             localStorage.removeItem('isLogin');
//             localStorage.removeItem('userId');
//         }
//     }
// });

// export const authActions = authSlice.actions;

// export const store = configureStore({
//     reducer: authSlice.reducer,
// });
