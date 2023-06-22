import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/account/getById",
    }),
    myNotification: builder.query({
      query: () => "/notification/myNotifications",
    }),
  }),
});

export const { useGetUserQuery, useMyNotificationQuery } = usersApiSlice;
