import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi, postApi } from "../../api/apiService";

const login = createAsyncThunk("auth/login", async (body) => {
  const res = await postApi("auth/admin-login", body);
  return res.data;
});

const logout = createAsyncThunk("auth/logout", async () => {
  const res = await getApi("auth/admin-logout");
  return res.data;
});

export { login, logout };
