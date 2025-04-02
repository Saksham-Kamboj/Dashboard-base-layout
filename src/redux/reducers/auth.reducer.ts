// Disabled for the Entire file due to no param reassing but its required in
// Redux
import { createSlice } from "@reduxjs/toolkit";

import { ReducerEnum } from "@/enum";

const initialState = {};

/**
 * Creating the Redux Slice for User
 */
export const authSlice = createSlice({
  name: ReducerEnum.AUTHENTICATION,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
  },
});

// Action creators are generated for each case reducer function
export const authActions = { ...authSlice.actions };

export default authSlice.reducer;
