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
      name: 'To Do',
      displayed: true,
      items: ['Wash Car', 'Clean Room', 'Do Homework', 'Go Shopping'],
    },
    { name: 'Workout Plan', displayed: true, items: ['Push-ups', 'Squats', 'Jogging'] },
    {
      name: 'Books to Read',
      displayed: false,
      items: ['1984', 'To Kill a Mockingbird', 'Moby Dick'],
    },
    { name: 'Travel Destinations', displayed: false, items: ['Paris', 'Tokyo', 'New York'] },
    {
      name: 'Movies to Watch',
      displayed: false,
      items: ['Inception', 'The Matrix', 'Interstellar'],
    },
    { name: 'Groceries', displayed: false, items: ['Apples', 'Bananas', 'Bread'] },
    { name: 'Weekend Plans', displayed: false, items: ['Visit Park', 'Go Hiking', 'Attend Party'] },
    { name: 'Recipes', displayed: false, items: ['Spaghetti', 'Tacos', 'Salad'] },
    { name: 'Tech Wishlist', displayed: false, items: ['Laptop', 'Smartphone', 'Smartwatch'] },
    {
      name: 'Songs to Learn',
      displayed: false,
      items: ['Imagine', 'Bohemian Rhapsody', 'Hallelujah'],
    },
    { name: 'Birthday Party', displayed: false, items: ['Cake', 'Balloons', 'Gifts'] },
    { name: 'Cleaning Tasks', displayed: false, items: ['Vacuum', 'Dust Shelves', 'Mop Floors'] },
    { name: 'Shopping List 2', displayed: false, items: ['Eggs', 'Cheese', 'Butter'] },
    { name: 'Gardening', displayed: false, items: ['Plant Seeds', 'Water Plants', 'Weed Garden'] },
    { name: 'Event Planning', displayed: false, items: ['Venue', 'Invitations', 'Catering'] },
    {
      name: 'Holiday Preparation',
      displayed: false,
      items: ['Pack Bags', 'Book Tickets', 'Prepare Snacks'],
    },
    { name: 'Hobbies', displayed: false, items: ['Painting', 'Photography', 'Knitting'] },
    {
      name: 'Home Improvement',
      displayed: false,
      items: ['Paint Walls', 'Fix Leaks', 'Buy Furniture'],
    },
    {
      name: 'Job Applications',
      displayed: false,
      items: ['Update Resume', 'Apply Online', 'Prepare Portfolio'],
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
      const { listIndex, item } = action.payload; // TODO: fix
      if (state.lists[listIndex]) {
        state.lists[listIndex].items.push(item);
      }
    },
    // Remove an item from a specific list by index
    removeItem: (state, action) => {
      const { listIndex, itemIndex } = action.payload;
      if (state.lists[listIndex] && state.lists[listIndex].items[itemIndex] !== undefined) {
        state.lists[listIndex].items.splice(itemIndex, 1);
      }
    },
    // Update an item in a specific list
    updateItem: (state, action) => {
      const { listIndex, itemIndex, newItem } = action.payload;
      if (state.lists[listIndex] && state.lists[listIndex].items[itemIndex] !== undefined) {
        state.lists[listIndex].items[itemIndex] = newItem;
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
