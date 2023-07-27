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

const createAdmin = createAsyncThunk("auth/createUser", async (body) => {
  const res = await postApi("auth/add-admin", body);
  return res.data;
});

const refreshAuth = createAsyncThunk("auth/refresh", async () => {
  const res = await getApi("auth/refresh");
  return res.data;
});

const getUser = createAsyncThunk("auth/getUser", async () => {
  const res = await getApi("users/user");
  return res.data;
});

export { login, logout, createAdmin, refreshAuth, getUser };
