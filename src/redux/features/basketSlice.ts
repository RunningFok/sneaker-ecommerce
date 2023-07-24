import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketState {
  items: any[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (
      state,
      action: PayloadAction<{ id: string | number }>
    ) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.styleID === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id:${action.payload.id}`);
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: { basket: BasketState }) =>
  state.basket.items;
export const selectTotal = (state: { basket: BasketState }) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
