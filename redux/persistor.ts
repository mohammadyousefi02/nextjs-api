import { createStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "./store";

export const store = createStore(persistReducer);

export const myPersistStore = persistStore(store);
