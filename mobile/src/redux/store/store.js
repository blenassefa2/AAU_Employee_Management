// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import api from "./api";
// import authSlice from "./authSlice"; // Update the import statement

// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//     auth: authSlice.reducer, // Use authSlice.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });

// setupListeners(store.dispatch);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loginReducer from "../reducers/loginReducer";
import api from "../api/api";

const store = configureStore({
  reducer: {
    login: loginReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
