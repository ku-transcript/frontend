import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { AxiosError } from "axios";
import { RootState } from "@/store/store";
import { TranscriptData, TranscriptDataStateType } from "@/types/resultUploaded";

const initialState: TranscriptDataStateType = {
  transcriptData: null,
  status: "idle",
  error: null,
};

export const uploadTranscript = createAsyncThunk(
  "transcript/uploadTranscript",
  async (data: any, { rejectWithValue }) => {
    try {
      console.log("data", data);
      const response = await axiosInstance.post(`/upload`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response);
      const transcriptData = response.data;
      return transcriptData;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;
        return rejectWithValue(errorResponse);
      }
      throw error;
    }
  }
);

const transcriptSlice = createSlice({
  name: "transcript",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadTranscript.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        uploadTranscript.fulfilled,
        (state, action: PayloadAction<TranscriptData>) => {
          state.status = "idle";
          state.transcriptData = action.payload;
        }
      )
      .addCase(uploadTranscript.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message || "Upload failed";
        } else {
          state.error = action.error.message || "Upload failed";
        }
      });
  },
});

export const {} = transcriptSlice.actions;
export const transcriptSelector = (state: RootState) => state.transcript;
export default transcriptSlice.reducer;
