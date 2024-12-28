import { createSlice } from '@reduxjs/toolkit';

interface List {
  name: string;
  displayed: boolean;
  items: string[];
}

interface ListState {
  lists: List[];
}

const initialState: ListState = {
  lists: [
    {
      name: 'Shopping List',
      displayed: true,
      items: ['Pasta', 'Milk', 'Meat', 'Espresso', 'Vino'],
    },
    {
      name: 'Workout Plan',
      displayed: true,
      items: ['Push-ups', 'Squats', 'Plank', 'Burpees', 'Lunges'],
    },
    {
      name: 'Reading List',
      displayed: false,
      items: [
        '1984 by George Orwell',
        'To Kill a Mockingbird',
        'The Great Gatsby',
        'Moby Dick',
        'War and Peace',
      ],
    },
    {
      name: 'Grocery List',
      displayed: true,
      items: ['Apples', 'Bananas', 'Carrots', 'Chicken', 'Rice'],
    },
    {
      name: 'Travel Checklist',
      displayed: true,
      items: ['Passport', 'Tickets', 'Toiletries', 'Clothes', 'Snacks'],
    },
  ],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    // Add a new list
    addList: (state, action) => {
      if (state.lists.filter(el => el.name === action.payload.name).length == 0) {
        state.lists.push({ name: action.payload.name, displayed: false, items: [] });
      }
    },
    // Remove a list by index
    removeList: (state, action) => {
      state.lists.splice(action.payload, 1);
    },
    // Add an item to a specific list
    addItem: (state, action) => {
      console.log(`list: ${action.payload.listName}, item: ${action.payload.item}`);
      const { listName, item } = action.payload; // Use listName instead of listIndex
      const list = state.lists.find(list => list.name === listName); // Find list by name
      if (list) {
        list.items.push(item);
      }
    },
    // Remove an item from a specific list by index
    removeItem: (state, action) => {
      const { listName, itemIndex } = action.payload;
      const list = state.lists.find(list => list.name === listName); // Find list by name
      if (list && list.items[itemIndex] !== undefined) {
        list.items.splice(itemIndex, 1);
      }
    },
    // Update an item in a specific list
    updateItem: (state, action) => {
      const { listName, itemIndex, newItem } = action.payload;
      const list = state.lists.find(list => list.name === listName); // Find list by name
      if (list && list.items[itemIndex] !== undefined) {
        list.items[itemIndex] = newItem;
      }
    },
    updateListDisplayed: (state, action) => {
      const item = state.lists.find(item => item.name === action.payload);
      if (item) {
        item.displayed = !item.displayed;
      }
    },
  },
});

export const { addList, removeList, addItem, removeItem, updateItem, updateListDisplayed } =
  listSlice.actions;

export default listSlice.reducer;
