import { configureStore } from "@reduxjs/toolkit";
import selectedIDReducer from "./selectedID-slice";

export const store = configureStore({
  reducer: {
    ID: selectedIDReducer, // استفاده از ریدوسر
  },
});

// تعریف نوع RootState و AppDispatch برای استفاده در کامپوننت‌ها
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
