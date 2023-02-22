import { createApi } from "@reduxjs/toolkit/query/react";
import { UserType } from "../../../shared/api";

export const userQuery = createApi({
  reducerPath: "userQuery",
  baseQuery: baseQueryWithToken,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserType, string>({
      query: (id) => `user/${id}`,
      providesTags: ["Profile"],
    }),
    updateUserBody: builder.mutation<UserType, Partial<UserType>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `settings/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserBodyMutation } = userQuery;
