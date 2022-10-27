import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: tasksState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteTask(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
