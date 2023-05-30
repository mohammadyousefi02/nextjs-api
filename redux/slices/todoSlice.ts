import { createSlice } from "@reduxjs/toolkit";

export interface TodoItem {
  id: number;
  title: string;
}

export interface InitialState {
  todo: TodoItem[];
}

const initialState: InitialState = {
  todo: [],
};

interface Action {
  payload: {
    todo: TodoItem;
  };
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, { payload }: Action) {
      const todo = [...state.todo];
      todo.push(payload.todo);
      state.todo = todo;
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
