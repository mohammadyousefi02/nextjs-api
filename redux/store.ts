import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//@ts-ignore
import storage from "redux-persist/lib/storage/index";
import todoReducer from "./slices/todoSlice";

export const reducers = combineReducers({
  todo: todoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["todo"],
};

export default persistReducer(persistConfig, reducers);
