import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* post example from docs: https://redux-toolkit.js.org/rtk-query/api/createApi#how-endpoints-get-used, */

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    postLoginHome: builder.query({
      query: ({ userName, password }) => {
        return {
          url: `login/home`,
          method: "POST",
          body: { userName, password },
        };
      },
    }),

    // next post here
  }),
});

console.log("what is loginApi", loginApi);

//https://stackoverflow.com/a/75160992/7857134 : use Lazy so that post call can be made with button click
export const { useLazyPostLoginHomeQuery } = loginApi;
