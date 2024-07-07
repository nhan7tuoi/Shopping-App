import AsyncStorage from '@react-native-async-storage/async-storage';

const {createSlice} = require('@reduxjs/toolkit');

const handleCartData = async (cartData: any[]) => {
  await AsyncStorage.setItem('cartData', JSON.stringify(cartData));
  console.log('cartData', cartData);
};

export interface CartItem {
  color: string;
  description: string;
  id: string;
  imageUrl: string;
  price: string;
  quantity: number;
  size: string;
  title: string;
};

const initialState:CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: initialState,
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
    syncCartLocal: (state: any, action: any) => {
      state.cartData = action.payload;
    },
  },
});

export const {addToCart, removeFromCart,syncCartLocal} = cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state: any) => state.cart.cartData;
