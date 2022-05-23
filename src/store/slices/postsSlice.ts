import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface ImagePost {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface initialStateUser {
  posts: Array<Post> | null;
  imagePosts: Array<ImagePost> | null;
  status: string;
  errorMessage: string;
}

const initialState: initialStateUser = {
  posts: null,
  imagePosts: null,
  status: "",
  errorMessage: "",
};

export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async (userId: number, { rejectWithValue }) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
      const response = await fetch(url);
      if (response.ok) {
        const posts: Array<Post> = await response.json();
        return posts;
      }
      throw new Error(
        "Попытка загрузить пользователей не удалась, попробуйте позже"
      );
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPostPhoto = createAsyncThunk(
  "posts/getPostPhoto",
  async (postId: number, { rejectWithValue }) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/photos?id=${postId}`;
      const response = await fetch(url);
      if (response.ok) {
        const photo: ImagePost = await response.json();
        return photo;
      }
      throw new Error(
        "Попытка загрузить пользователей не удалась, попробуйте позже"
      );
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserPosts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    });
    builder.addCase(getUserPosts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUserPosts.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.payload as string;
    });

    builder.addCase(getPostPhoto.fulfilled, (state, action) => {
      state.status = "fulfilled";
      if (state.imagePosts) {
        state.imagePosts = [...state.imagePosts, action.payload];
      }
    });
    builder.addCase(getPostPhoto.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getPostPhoto.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.payload as string;
    });
  },
});

export default postsSlice.reducer;
