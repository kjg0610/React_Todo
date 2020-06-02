import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "TODO",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = state.todos.concat(action.payload);
        },
    },
});

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
