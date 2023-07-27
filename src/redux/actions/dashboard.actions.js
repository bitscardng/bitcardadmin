import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../api/apiService";

const getCryptoTransactions = createAsyncThunk(
  "dashboard/getCryptoTransactions",
  async () => {
    const res = getApi("crypto-transactions/pending-transfers");
    return res.data;
  }
);
