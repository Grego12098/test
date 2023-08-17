import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ResultTypes } from "./searchSlice";

export const FetchProducts = createAsyncThunk(
  "fetchProducts",
  async(_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const params = state.select.queryParams;
    const response: AxiosResponse<ResultTypes> = await axios.post("https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI", {
        ...params
    });
      return response.data;
    } catch (error) {
      console.log(error);
    }
});

