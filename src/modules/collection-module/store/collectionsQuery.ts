import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../shared/api";
import { API_URL } from "../../../shared/constants/backend";
import {
  AddCollectionBodyType,
  CollectionInCollectionList,
  CollectionItemType,
  CollectionList,
  CollectionType,
} from "../api/types";
import { COLLECTIONS_PER_PAGE } from "../constants/collectionsPerPage";

export const collectionsQuery = createApi({
  reducerPath: "collectionsQuery",
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Collections", "Collection", "Items", "Item"],
  endpoints: (builder) => ({
    getNewCollections: builder.query<{ collections: CollectionInCollectionList[] }, {}>({
      query: () => ({
        url: `/collections/new`,
        method: "get",
      }),
    }),
    searchCollectionsItems: builder.query<{ items: CollectionItemType[] }, string>({
      query: (searchValue) => ({
        url: `/search-items?value=${searchValue}`,
        method: "get",
      }),
    }),
    getUserCollections: builder.query<CollectionList, { userId: string; page: number }>({
      query: ({ userId, page }) => ({
        url: `user/${userId}/collections?page=${page}&itemsPerPage=${COLLECTIONS_PER_PAGE}`,
        method: "get",
      }),
      providesTags: ["Collections"],
    }),
    getCollection: builder.query<CollectionType, string>({
      query: (collectionId) => ({
        url: `collections/${collectionId}`,
        method: "get",
      }),
      providesTags: ["Collection"],
    }),
    getCollectionItems: builder.query<{ items: CollectionItemType[] }, string>({
      query: (collectionId) => ({
        url: `collections/${collectionId}/items`,
        method: "get",
      }),
      providesTags: ["Items"],
    }),
    getCollectionItem: builder.query<CollectionItemType, string>({
      query: (collectionItemId) => ({
        url: `collection/${collectionItemId}`,
        method: "get",
      }),
      providesTags: ["Item"],
    }),
    getCollectionsThemes: builder.query<{ themes: string[] }, {}>({
      query: () => ({
        url: `collections-themes`,
        method: "get",
      }),
    }),
    addCollection: builder.mutation<CollectionType, AddCollectionBodyType>({
      query(data) {
        const { userId, ...body } = data;
        return {
          url: `user/${userId}/collections`,
          method: "POST",
          data: body,
        };
      },
      invalidatesTags: ["Collections"],
    }),
    addCollectionItem: builder.mutation<
      any,
      { userId: string; collectionId: string } & { [key: string]: unknown }
    >({
      query(data) {
        const { userId, collectionId, ...body } = data;
        return {
          url: `user/${userId}/collections/${collectionId}`,
          method: "POST",
          data: body,
        };
      },
      invalidatesTags: ["Items"],
    }),
    updateCollection: builder.mutation<
      CollectionType,
      Partial<CollectionType> & { userId: string; collectionId: string }
    >({
      query(data) {
        const { userId, collectionId, ...body } = data;
        return {
          url: `user/${userId}/collections/${collectionId}`,
          method: "PUT",
          data: body,
        };
      },
      invalidatesTags: ["Collection"],
    }),
    updateCollectionItem: builder.mutation<
      CollectionType,
      Partial<CollectionItemType> & { userId: string; collectionItemId: string }
    >({
      query(data) {
        const { userId, collectionItemId, ...body } = data;
        return {
          url: `user/${userId}/collection/update/${collectionItemId}`,
          method: "PUT",
          data: body,
        };
      },
      invalidatesTags: ["Item", "Items"],
    }),
    toggleLikeCollectionItem: builder.mutation<CollectionItemType, { collectionItemId: string }>({
      query(data) {
        const { collectionItemId } = data;
        return {
          url: `collection/${collectionItemId}/like`,
          method: "PUT",
        };
      },
      invalidatesTags: ["Item"],
    }),
    deleteCollections: builder.mutation<any, { collections: string[]; userId: string }>({
      query(data) {
        const { userId, ...body } = data;
        return {
          url: `user/${userId}/collections/delete`,
          method: "DELETE",
          data: body,
        };
      },
      invalidatesTags: ["Collections"],
    }),
    deleteCollectionItems: builder.mutation<any, { collectionItems: string[]; userId: string }>({
      query(data) {
        const { userId, ...body } = data;
        return {
          url: `user/${userId}/collection-items/delete`,
          method: "DELETE",
          data: body,
        };
      },
      invalidatesTags: ["Items"],
    }),
  }),
});

export const {
  useGetCollectionsThemesQuery,
  useGetUserCollectionsQuery,
  useAddCollectionMutation,
  useDeleteCollectionsMutation,
  useGetCollectionQuery,
  useUpdateCollectionMutation,
  useGetCollectionItemsQuery,
  useAddCollectionItemMutation,
  useGetCollectionItemQuery,
  useDeleteCollectionItemsMutation,
  useToggleLikeCollectionItemMutation,
  useUpdateCollectionItemMutation,
  useGetNewCollectionsQuery,
  useSearchCollectionsItemsQuery,
} = collectionsQuery;
