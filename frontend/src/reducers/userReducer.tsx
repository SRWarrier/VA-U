import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    update(users, newuser) {
      return {
        ...users,
        ...newuser.payload,
      };
    },
  },
});

export interface UserState {
  email: string;
  first_name: string;
  id: number;
  is_manager: boolean;
  role: number;
  user_hub: number;
  username: string;
}

export const { update } = userSlice.actions;
export default userSlice.reducer;
