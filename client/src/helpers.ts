export const getNodeUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_LOCAL_HOST
    : import.meta.env.VITE_PROD_URL;
