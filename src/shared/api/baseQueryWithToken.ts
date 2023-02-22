import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseQueryWithToken = fetchBaseQuery({
  baseUrl: "http://localhost:3030/api/",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
