import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("/", async () => {
  return await axios({
    method: "GET",
    url: "http://localhost:8080/api/users",
  }).then((res) => res);
});
