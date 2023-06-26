import { apiSlice } from "../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeaveRequest: builder.query({
      query: () => "/leave/leave-requests",
    }),
    askForLeave: builder.mutation({
      query: (details) => ({
        url: "/leave/leave-requests",
        method: "POST",
        body: { ...details },
      }),
    }),
  }),
});

export const { useGetLeaveRequestQuery, useAskForLeaveMutation } =
  usersApiSlice;
