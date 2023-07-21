import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../api/apiService";

const login = createAsyncThunk("auth/login", async (body) => {
  const res = await postApi("auth/admin-login", body);
  return res.data;
});

export { login };
