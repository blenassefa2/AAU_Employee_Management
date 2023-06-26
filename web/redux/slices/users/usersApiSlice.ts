import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/account/getById",
    }),
    getAllUsers: builder.query({
      query: () => "/account/getAllAccounts",
    }),
    myNotification: builder.query({
      query: () => "/notification/myNotifications",
    }),
    download: builder.mutation({
      query: () => ({ url: "/account/download", method: "GET" }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/account/register",
        method: "POST",
        body: { ...data },
        path: "image-upload",
        headers: { "Content-Type": "multipart/form-data" },

        boundary: "----WebKitFormBoundaryABC123XYZ456",
        formData: true,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/account/changePassword",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useMyNotificationQuery,
  useGetAllUsersQuery,
  useRegisterMutation,
  useDownloadMutation,
  useChangePasswordMutation,
} = usersApiSlice;
