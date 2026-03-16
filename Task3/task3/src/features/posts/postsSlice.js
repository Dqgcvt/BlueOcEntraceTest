import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await axios.get(API_URL)
    return response.data
  }
)

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    status: "idle"
  },
  reducers: {
    addPost: (state, action) => {
      state.items.unshift(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.items = action.payload
      })
  }
})

export const { addPost } = postsSlice.actions
export default postsSlice.reducer