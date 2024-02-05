// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, ...updatedTodo } = action.payload;
      const index = state.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedTodo };
      }
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todosSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
