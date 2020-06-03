import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "TODO",
    initialState: {
        list: [],
    },
    reducers: {
        getTodo: (state, action) => {
            console.log(action.payload)
            state.list = action.payload.data
        },

        addTodo: (state, action) => {
            //state.todos = state.todos.concat(action.payload);
            state.list.push(action.payload)
        },
    },
});

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
