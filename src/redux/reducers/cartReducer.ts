import AsyncStorage from '@react-native-async-storage/async-storage';

const {createSlice} = require('@reduxjs/toolkit');

const handleCartData = async (cartData: any[]) => {
  await AsyncStorage.setItem('cartData', JSON.stringify(cartData));
  console.log('cartData', cartData);
};

export interface CartItem {
  color: string;
  id: string;
  imageUrl: string;
  price: number;
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
    updateQuantity: (state: any, action: any) => {
      const data = action.payload;
      const items = [...state.cartData];
      const item = items.find((i: any) => i.id === data.id);
      const index = items.findIndex((i: any) => i.id === data.id);
      if (item && index !== -1) {
        const quantity = item.quantity + data.quantity;
        if(quantity === 0){
          items.splice(index, 1);
        }else{
          items[index].quantity = quantity;
        }
      }
      state.cartData = items;
    }
  },
});

export const {addToCart, removeFromCart,syncCartLocal,updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state: any) => state.cart.cartData;
