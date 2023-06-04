import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.56.1:8000/api/v1" }), // Replace with your API base URL
  endpoints: (builder) => ({
    getClockNumber: builder.query({
      query: () => "/notification/allNotifications", // Replace with your API endpoint for clock number
    }),
  }),
});

export const { useGetClockNumberQuery } = api;

export default api;
