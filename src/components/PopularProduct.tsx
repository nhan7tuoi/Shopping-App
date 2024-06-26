import { Card, Col, Row } from '@bsdaoquang/rncomponent';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import { productRef } from '../firebase/firebaseConfig';
import { ProductModel } from '../models/productModel';
import TextComponent from './TextComponent';

type Props = {};

const PopularProduct = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    productRef
      .orderBy('rate')
      .limit(10)
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
          text="Popular Products"
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

      {products.length > 0 &&
        products.map((item, index) => (
          <View key={item.id}>
            <Card
              styles={{
                borderRadius: 10,
              }}>
              <Row>
                <Image
                  source={{uri: item.imageUrl}}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                />
                <Col
                  styles={{
                    paddingHorizontal: 12,
                  }}>
                  <TextComponent
                    text={item.title}
                    size={16}
                    font={fontFamilies.poppinsSemiBold}
                    numberOfLines={1}
                  />
                  <TextComponent text={item.type} color={colors.gray2} />
                  <Row justifyContent="flex-start">
                    <AntDesign name="star" size={20} color="yellow" />
                    <TextComponent text={`(${item.rate})`} />
                  </Row>
                </Col>
                <TextComponent
                  text={`$ ${item.price}`}
                  size={18}
                  font={fontFamilies.poppinsSemiBold}
                  numberOfLines={1}
                />
              </Row>
            </Card>
          </View>
        ))}
    </View>
  );
};

export default PopularProduct;
