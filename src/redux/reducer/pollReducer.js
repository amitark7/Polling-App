import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPolls = createAsyncThunk(
  "poll/fetchPolls",
  async (pageNumber) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}poll/list/${pageNumber}?limit=10`,
        {
          method: "GET",
          headers: {
            token: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data.rows;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const addPoll = createAsyncThunk("poll/addPoll", (data) => {
  console.log(data);
});
const pollSlice = createSlice({
  name: "poll",
  initialState: { poll: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPolls.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPolls.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.poll = action.payload;
    });
    builder.addCase(fetchPolls.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default pollSlice.reducer;
