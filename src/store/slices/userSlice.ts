import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface User {
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

interface initialStateUser {
  user: User | null;
  status: string;
  errorMessage: string;
}

const initialState: initialStateUser = {
  user: null,
  status: "",
  errorMessage: "",
};

export const getUser = createAsyncThunk(
  "users/getUser",
  async (id: number, { rejectWithValue, getState }) => {
    const {
      users: { users },
    } = getState() as RootState;

    if (users === null) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (response.ok) {
          const user: User = await response.json();
          return user;
        }
        throw new Error(
          "Попытка загрузить пользователей не удалась, попробуйте позже"
        );
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      const user = users.filter((item) => item.id === id);
      return user;
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = "fulfilled";
      if (action.payload) {
        state.user = action.payload as User;
      }
    });
    builder.addCase(getUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.status = "rejected";
      state.errorMessage = action.payload as string;
    });
  },
});

export default UserSlice.reducer;
