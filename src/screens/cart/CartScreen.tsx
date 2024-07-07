import { Button, Card, Col, Row, Space } from '@bsdaoquang/rncomponent';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight2 } from 'iconsax-react-native';
import React from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { TextComponent } from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import { CartItem, cartSelector, updateQuantity } from '../../redux/reducers/cartReducer';
import { globalStyles } from '../../styles/globalSyles';

const CartScreen = () => {
  const cartData: CartItem[] = useSelector(cartSelector);
  const dispatch = useDispatch();
  const navigation = useNavigation();



  return (
    <View style={[globalStyles.conatiner]}>
      <View
        style={[
          globalStyles.section,
          {
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            padding: 25,
            paddingTop: 40,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
          }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons
              name="arrow-back-circle-sharp"
              size={44}
              color={colors.dark}
            />
          </Pressable>
        </View>
      </View>
      {cartData.length > 0 ? (
        <View
          style={{
            flex: 1,
          }}>
          <View style={[globalStyles.section]}>
            <TextComponent
              text="My Cart"
              type="title"
              size={20}
              font={fontFamilies.poppinsBold}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.white,
            }}>
            <FlatList
              data={cartData}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <Card key={item.id}>
                  <Row alignItems="flex-start">
                    <Image
                      source={{uri: item.imageUrl}}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 12,
                        resizeMode: 'cover',
                      }}
                    />
                    <Space width={12} />
                    <Col>
                      <TextComponent
                        text={item.title}
                        type="title"
                        font={fontFamilies.poppinsBold}
                      />
                      <TextComponent
                        numberOfLines={1}
                        text={'Color: ' + item.color}
                        color={colors.desciption}
                      />
                      <Row alignItems="flex-end">
                        <Col>
                          <TextComponent
                            size={18}
                            text={`$${item.price * item.quantity}`}
                            type="title"
                            font={fontFamilies.poppinsBold}
                          />
                        </Col>
                        <Row
                          styles={{
                            backgroundColor: '#e0e0e0',
                            padding: 4,
                            borderRadius: 100,
                            paddingHorizontal: 8,
                          }}>
                          <Pressable onPress={() => {
                            dispatch(updateQuantity({id: item.id, quantity: -1}));
                          }}>
                            <Ionicons name="remove" size={20} color={colors.dark} />
                          </Pressable>
                          <Space width={6} />
                          <TextComponent text={`${item.quantity}`} font={fontFamilies.poppinsBold} size={18} />
                          <Space width={6} />
                          <Pressable onPress={() => {
                            dispatch(updateQuantity({id: item.id, quantity: 1}));
                          }}>
                            <Ionicons name="add" size={20} color={colors.dark} />
                          </Pressable>
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              )}
            />
          </View>
          <View style={[globalStyles.section,{paddingTop:12}]}>
            <Row>
              <Col>
              <TextComponent
                text={`Total: ${cartData.length} items`}
                type="description"
                font={fontFamilies.poppinsBold}
                color={colors.desciption}
              /></Col>
              <TextComponent
                text={`$${cartData.reduce((acc, item) => acc + (item.quantity * item.price), 0).toLocaleString()}`}
                type="title"
                font={fontFamilies.poppinsBold}
              />
            </Row>
            <Space height={20} />
            <Button
            color={colors.dark}
              title="Proceed to Checkout"
              iconExtra
              iconPosition='right'
              icon={<ArrowRight2 size={20} color={colors.white} />}
              onPress={() => {
                
              }}
            />
          </View>
        </View>
      ) : (
        <View>
          <TextComponent text="No Product" />
        </View>
      )}
    </View>
  );
};

export default CartScreen;
