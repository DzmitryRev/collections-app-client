import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery, UserType } from "../../../shared/api";
import { API_URL } from "../../../shared/constants/backend";

export const userQuery = createApi({
  reducerPath: "userQuery",
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserType, string>({
      query: (id) => ({ url: `user/${id}`, method: "get" }),
      providesTags: ["Profile"],
    }),
    updateUserBody: builder.mutation<UserType, Partial<UserType>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `settings/${id}`,
          method: "PUT",
          data: body,
        };
      },
      invalidatesTags: ["Profile"],
    }),
    updateUserForAdmin: builder.mutation<
      UserType,
      Partial<Pick<UserType, "id" | "isBlocked" | "isAdmin">>
    >({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `settings/admin/${id}`,
          method: "put",
          data: body,
        };
      },
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserBodyMutation, useUpdateUserForAdminMutation } =
  userQuery;
