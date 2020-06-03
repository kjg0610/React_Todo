import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "TODO",
    initialState: {
        todos: [],
    },
    reducers: {
        getTodo: (state, action) => {

        },
        getTodoS: (state, action) => {
            console.log(action.payload)
            state.todos = action.payload.data
        },
        getTodoF: (state, action) => {
            console.log('fail')
        },
        addTodo: (state, action) => {
            //state.todos = state.todos.concat(action.payload);
        },
        addTodoS: (state, action) => {
            console.log('addTodoS')
            state.todos.push(action.payload)

            //state.todos = state.todos.concat(action.payload);
        },
        addTodoF: (state, action) => {
            //state.todos = state.todos.concat(action.payload);
        },
    },
});

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
