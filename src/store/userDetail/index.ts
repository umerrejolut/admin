import { USER_DETAILS } from '@/Common/interface';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface severUrl {
  userData: USER_DETAILS | null;
}

const initialState: severUrl = {
  userData: null,
};

export const UserData = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<USER_DETAILS>) => {
      state.userData = action.payload;
    },
    clearUserData: state => {
      state.userData = null;
    },
  },
});

export const { clearUserData, setUserData } = UserData.actions;

export default UserData.reducer;