import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getApi,
  postApi,
  patchApi,
  deleteApi,
  uploadFile,
} from "../../api/apiService";

const getCryptoTransactions = createAsyncThunk(
  "dashboard/getCryptoTransactions",
  async () => {
    const res = await getApi("crypto-transactions/pending-transfers");
    return res.data;
  }
);

const getNewsCategory = createAsyncThunk(
  "dashboard/getNewsCategory",
  async () => {
    const res = await getApi("news/category");
    return res.data;
  }
);

const createNewsCategory = createAsyncThunk(
  "dashboard/createNewsCategory",
  async (body) => {
    const res = await postApi("news/category", body);
    return res.data;
  }
);

const updateNewsCategory = createAsyncThunk(
  "dashboard/updateNewsCategory",
  async ({ id, body }) => {
    const res = await patchApi(`news/category/${id}`, body);
    return res.data;
  }
);

const getNews = createAsyncThunk("dashboard/getNews", async () => {
  const res = await getApi("news");
  return res.data;
});

const getNewsById = createAsyncThunk("dashboard/getNewsById", async (id) => {
  const res = await getApi(`news/${id}`);
  return res.data;
});

const createNews = createAsyncThunk("dashboard/createNews", async (body) => {
  const res = await postApi("news", body);
  return res.data;
});

const updateNews = createAsyncThunk(
  "dashboard/updateNews",
  async ({ id, body }) => {
    const res = await patchApi(`news/${id}`, body);
    return res.data;
  }
);

const deleteNews = createAsyncThunk("dashboard/deleteNews", async (id) => {
  const res = await deleteApi(`news/${id}`);
  return res.data;
});

const getFaqCategory = createAsyncThunk(
  "dashboard/getFaqCategory",
  async () => {
    const res = await getApi("faq/category");
    return res.data;
  }
);

const createFaqCategory = createAsyncThunk(
  "dashboard/createFaqCategory",
  async (body) => {
    const res = await postApi("faq/category", body);
    return res.data;
  }
);

const updateFaqCategory = createAsyncThunk(
  "dashboard/updateFaqCategory",
  async ({ id, body }) => {
    const res = await patchApi(`faq/category/${id}`, body);
    return res.data;
  }
);

const getFaq = createAsyncThunk("dashboard/getFaq", async () => {
  const res = await getApi("faq");
  return res.data;
});

const getFaqById = createAsyncThunk("dashboard/getFaqById", async (id) => {
  const res = await getApi(`faq/${id}`);
  return res.data;
});

const createFaq = createAsyncThunk("dashboard/createFaq", async (body) => {
  const res = await postApi("faq", body);
  return res.data;
});

const updateFaq = createAsyncThunk(
  "dashboard/updateFaq",
  async ({ id, body }) => {
    const res = await patchApi(`faq/${id}`, body);
    return res.data;
  }
);

const deleteFaq = createAsyncThunk("dashboard/deleteFaq", async (id) => {
  const res = await deleteApi(`faq/${id}`);
  return res.data;
});

const upload = createAsyncThunk("dashboard/uploadFile", async (formData) => {
  const res = await uploadFile(formData);
  return res.data;
});

////////////////KYC

const getKyc1_2 = createAsyncThunk("dashboard/getKyc1&2", async () => {
  const res = await getApi("kyc/get-kyc1&2");
  return res.data;
});

const getKyc3 = createAsyncThunk("dashboard/getKyc3", async () => {
  const res = await getApi("kyc/get-kyc3");
  return res.data;
});

const getKyc4 = createAsyncThunk("dashboard/getKyc4", async () => {
  const res = await getApi("kyc/get-kyc4");
  return res.data;
});

const verifyKyc1_2 = createAsyncThunk("dashboard/verifyKyc1_2", async (id) => {
  const res = await patchApi(`kyc/verify1&2/${id}`);
  return res.data;
});

const verifyKyc3 = createAsyncThunk("dashboard/verifyKyc3", async (id) => {
  const res = await patchApi(`kyc/verify3/${id}`);
  return res.data;
});

const verifyKyc4 = createAsyncThunk("dashboard/verifyKyc4", async (id) => {
  const res = await patchApi(`kyc/verify4/${id}`);
  return res.data;
});

const declineKyc1_2 = createAsyncThunk(
  "dashboard/declineKyc1_2",
  async (id) => {
    const res = await patchApi(`kyc/decline1&2/${id}`);
    return res.data;
  }
);

const declineKyc3 = createAsyncThunk("dashboard/declineKyc3", async (id) => {
  const res = await patchApi(`kyc/decline3/${id}`);
  return res.data;
});

const declineKyc4 = createAsyncThunk("dashboard/declineKyc4", async (id) => {
  const res = await patchApi(`kyc/decline4/${id}`);
  return res.data;
});

export {
  createNews,
  createFaq,
  getNewsCategory,
  getFaqCategory,
  updateFaqCategory,
  updateNewsCategory,
  createFaqCategory,
  createNewsCategory,
  upload,
  getKyc1_2,
  getKyc3,
  getKyc4,
  verifyKyc1_2,
  verifyKyc3,
  verifyKyc4,
  declineKyc1_2,
  declineKyc3,
  declineKyc4
};
