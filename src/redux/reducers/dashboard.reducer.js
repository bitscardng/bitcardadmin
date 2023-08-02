import { createSlice } from "@reduxjs/toolkit";
import { AsyncActions } from "../actionTypes/auth.actionTypes";
import {
  createNews,
  createFaq,
  updateFaqCategory,
  updateNewsCategory,
  createFaqCategory,
  createNewsCategory,
  getFaqCategory,
  getNewsCategory,
  upload,
} from "../actions/dashboard.actions";

const initialState = {
  isLoading: null,
  data: {},
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createNews.pending, (state) => {
        state.isLoading = AsyncActions.createNews;
      })
      .addCase(createNews.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(createNews.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(createFaq.pending, (state) => {
        state.isLoading = AsyncActions.createFaq;
      })
      .addCase(createFaq.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(createFaq.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(createNewsCategory.pending, (state) => {
        state.isLoading = AsyncActions.createNewsCategory;
      })
      .addCase(createNewsCategory.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(createNewsCategory.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(createFaqCategory.pending, (state) => {
        state.isLoading = AsyncActions.createFaqCategory;
      })
      .addCase(createFaqCategory.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(createFaqCategory.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(getNewsCategory.pending, (state) => {
        state.isLoading = AsyncActions.getNewsCategory;
      })
      .addCase(getNewsCategory.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(getNewsCategory.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(getFaqCategory.pending, (state) => {
        state.isLoading = AsyncActions.getFaqCategory;
      })
      .addCase(getFaqCategory.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(getFaqCategory.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(updateNewsCategory.pending, (state) => {
        state.isLoading = AsyncActions.updateNewsCategory;
      })
      .addCase(updateNewsCategory.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(updateNewsCategory.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(updateFaqCategory.pending, (state) => {
        state.isLoading = AsyncActions.updateFaqCategory;
      })
      .addCase(updateFaqCategory.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(updateFaqCategory.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(upload.pending, (state) => {
        state.isLoading = AsyncActions.upload;
      })
      .addCase(upload.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(upload.rejected, (state) => {
        state.isLoading = null;
      });
  },
});

export default dashboardSlice.reducer;
