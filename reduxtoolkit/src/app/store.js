import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todoSlice/todoSlice";

export let store = configureStore({
    reducer: todoSlice,
})