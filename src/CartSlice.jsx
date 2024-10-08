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
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const plant = state.items.find(item => item.name === action.payload.name);
      switch (action.payload.actionType) {
        case "INCREMENT":
          plant.counter +=1;
          break;
        case "DECREMENT":
          if (plant.counter > 1) {
            plant.counter -=1;
          }
          break;
      } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
