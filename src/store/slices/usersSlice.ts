import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface initialStateUsers {
  users: Array<User> | null;
  status: string;
  errorMessage: string;
}

const initialState: initialStateUsers = {
  users: null,
  status: "",
  errorMessage: "",
};

export const getListUsers = createAsyncThunk(
  "users/getListUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const users: Array<User> = await response.json();
        return users;
      }
      throw new Error(
        "Попытка загрузить пользователей не удалась, попробуйте позже"
      );
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListUsers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      if (action.payload) {
        state.users = action.payload;
      }
    });
    builder.addCase(getListUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getListUsers.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.payload as string;
    });
  },
});

export default UsersSlice.reducer;
