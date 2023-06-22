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
import { setCredentials, logOut } from "../slices/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.56.1:8000/api/v1",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
