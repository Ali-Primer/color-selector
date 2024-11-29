import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IDState = {
  id: number;
  open: boolean;
};

const initialState: IDState = {
  id: 0, // مقدار پیش‌فرض برای id
  open: false,
};

export const selectedID = createSlice({
  name: "ID",
  initialState,
  reducers: {
    selectID(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    openPopUp(state) {
      state.open = true;
    },
    closePopUp(state) {
      state.open = false;
    },
  },
});

// اکشن‌ها و ریدوسرها را اکسپورت کنید
export const { selectID, openPopUp, closePopUp } = selectedID.actions;
export default selectedID.reducer;
