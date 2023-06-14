// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { authSlice } from "./authSlice";

// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.56.1:8000/api/v1" }),
//   endpoints: (builder) => ({
//     getClockNumber: builder.query({
//       query: () => "/notification/allNotifications",
//     }),
//     login: builder.mutation({
//       query: ({ email, password }) => ({
//         url: "/auth/login",
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }),
//       // Define `onSuccess` callback to save the token in the Redux store
//       onSuccess: (response, { dispatch }) => {
//         const { token } = response.data;
//         dispatch(authSlice.actions.setToken(token)); // Store the token in authSlice
//       },
//     }),
//     getByAccount: builder.query({
//       query: () => `/account/getById`,
//       // Define the headers property to include the authorization header
//       headers: (headers, { getState }) => {
//         const token = getState().auth.token; // Access token from authSlice
//         if (token) {
//           headers.set("Authorization", `Bearer ${token}`);
//         }
//         return headers;
//       },
//     }),
//   }),
// });

// export const {
//   useGetClockNumberQuery,
//   useLoginMutation,
//   useGetByAccountQuery,
// } = api;

// export default api;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loginSuccess } from "../actions/loginAction";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.56.1:8000/api/v1" }),
  endpoints: (builder) => ({
    getClockNumber: builder.query({
      query: () => "/notification/allNotifications",
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      // Define `onSuccess` callback to dispatch loginSuccess action
      onSuccess: (response, { dispatch }) => {
        const { user } = response.data;
        dispatch(loginSuccess(user));
      },
    }),
    getByAccount: builder.query({
      query: () => `/account/getById`,
      // Define the headers property to include the authorization header
      headers: (headers, { getState }) => {
        const token = getState().auth.token; // Access token from authSlice
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
  }),
});

export const {
  useGetClockNumberQuery,
  useGetByAccountQuery,
  useLoginMutation,
} = api;

export default api;
