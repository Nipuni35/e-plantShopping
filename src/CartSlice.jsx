import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.indexOf(action.payload.name);
      if (index > -1) {
        state.items.splice(index, 1); 
      }
    },
    updateQuantity: (state, action) => {
      const plant = state.items.find(action.payload.name);
      switch (action.payload.actionType) {
        case "INCREMENT":
          plant.counter +=1;
          break;
        case "DECREMENT":
          plant.counter -=1;
          break;
      } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
