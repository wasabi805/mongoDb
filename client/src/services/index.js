import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//see tollkit docs: https://redux-toolkit.js.org/tutorials/rtk-query#use-the-query-in-a-component
export const fetchAllUsers = createApi({
    reducerPath: 'fetchUsers',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
    endpoints: ( builder ) => ({
        fetchAllUsers: builder.query({
        query: () => `users`,
      }),
    }),
  })

//   console.log('get the name of the hook to export below', fetchAllUsers)
export const { useFetchAllUsersQuery } = fetchAllUsers


