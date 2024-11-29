import { configureStore } from "@reduxjs/toolkit";
import { selectedID } from "./selectedID-slice";

configureStore({
    reducer:{
        ID: selectedID.reducer
    }
})