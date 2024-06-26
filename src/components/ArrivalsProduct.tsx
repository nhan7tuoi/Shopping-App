import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';
import {productRef} from '../firebase/firebaseConfig';
import {ProductModel} from '../models/productModel';
import ProductItem from './ProductItem';
import {sizes} from '../constants/sizes';

type Props = {};

const ArrivalsProduct = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    productRef
      .orderBy('createdAt', 'desc')
      .limitToLast(10)
      .onSnapshot(snap => {
        if (snap.empty) {
          console.log('No products available');
        } else {
          const items: ProductModel[] = [];

          snap.forEach((item: any) => {
            items.push({
              id: item.id,
              ...item.data(),
            });
          });
          setProducts(items);
        }
      });
  }, []);


  return (
    <View style={{marginTop: 16}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          paddingHorizontal: 16,
        }}>
        <TextComponent
          text="New Arrivals"
          size={24}
          font={fontFamilies.poppinsBold}
        />
        <Pressable onPress={() => {}}>
          <TextComponent
            text="View All"
            type="text"
            color={colors.desciption}
            font={fontFamilies.poppinsSemiBold}
          />
        </Pressable>
      </View>

      {products.length > 0 && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View key={item.id} style={{
              marginLeft:16,
              marginRight: index === products.length - 1 ? 16 : 0,
            }}>
              <ProductItem index={index} product={item} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ArrivalsProduct;
