import AsyncStorage from "@react-native-async-storage/async-storage";

const {createSlice} = require('@reduxjs/toolkit');

const handleCartData = async (cartData: any[]) => {
    await AsyncStorage.setItem('cartData', JSON.stringify(cartData));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [],
  },
  reducers: {
    addToCart: (state: any, action: any) => {
      const items = state.cartData;
        const item = action.payload;
        const index = items.findIndex((i: any) => i.id === item.id);
        if (index === -1) {
            items.push(item);
        } else {
            items[index].quantity += item.quantity;
        }
        state.cartData = items;
        handleCartData(state.cartData);
    },
    removeFromCart: (state: any, action: any) => {
      state.cartData = state.cartData.filter(
        (item: any) => item.id !== action.payload,
      );
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state: any) => state.cart.cartData;
