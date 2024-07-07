import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {TextComponent} from '../../components';
import {productRef} from '../../firebase/firebaseConfig';
import {ProductModel, SubProductModel} from '../../models/productModel';
import {globalStyles} from '../../styles/globalSyles';
import ImageSwiper from './components/ImageSwiper';
import {useStatusBar} from '../../utils/useStatusBar';
import {Badge, Button, Col, Row, Space} from '@bsdaoquang/rncomponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontFamilies} from '../../constants/fontFamilies';
import {Add, Minus} from 'iconsax-react-native';
import {Rating} from 'react-native-ratings';
import RatingComponent from './components/RatingComponent';
import {useDispatch, useSelector} from 'react-redux';
import {
  CartItem,
  addToCart,
  cartSelector,
} from '../../redux/reducers/cartReducer';

const ProductDetail = ({navigation, route}: any) => {
  const {id} = route.params;
  const [productDetail, setProductDetail] = useState<ProductModel>();
  const [subProducts, setSubProducts] = useState<SubProductModel[]>([]);
  const [subProductSelected, setSubProductSelected] =
    useState<SubProductModel>();
  const [count, setCount] = useState<number>(1);
  const [sizeSelected, setSizeSelected] = useState<string>('');

  const cartData: CartItem[] = useSelector(cartSelector);
  const dispatch = useDispatch();

  useStatusBar('light-content');

  useEffect(() => {
    getProductDetail();
    getSubProducts();
  }, [id]);

  useEffect(() => {
    setCount(1);
    setSizeSelected('');
  }, [subProductSelected]);

  useEffect(() => {
    const item = cartData.find(item => item.id === subProductSelected?.id);
    if (item) {
      setCount(item.quantity);
    } else {
      setCount(1);
    }
  }, [cartData, subProductSelected]);

  const getProductDetail = () => {
    productRef.doc(id).onSnapshot((snap: any) => {
      if (snap.exists) {
        setProductDetail({id, ...snap.data()});
      } else {
        setProductDetail(undefined);
      }
    });
  };

  const getSubProducts = async () => {
    try {
      const snap = await firestore()
        .collection('subProducts')
        .where('productId', '==', id)
        .get();
      if (snap.empty) {
        setSubProducts([]);
        setSubProductSelected(undefined);
      } else {
        const items: any[] = [];
        snap.forEach(item => {
          items.push({id: item.id, ...item.data()});
        });
        setSubProducts(items);
        setSubProductSelected(items[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (item: SubProductModel) => {
    const data = {
      id: item.id,
      title: productDetail?.title,
      price: item.price,
      quantity: count,
      size: sizeSelected,
      color: item.color,
      files: item.files,
      imageUrl: item.imageUrl,
    };
    const sub: any = {...subProductSelected};
    item.quantity = subProductSelected
      ? subProductSelected.quantity - count
      : 0;
    dispatch(addToCart(data));
    setSubProductSelected(sub);
  };

  const renderCartButon = () => {
    return (
      subProductSelected && (
        <Button
          title={'Add to cart'}
          icon={
            <MaterialCommunityIcons
              name="cart-plus"
              size={24}
              color={colors.white}
            />
          }
          onPress={() => {
            handleAddToCart(subProductSelected as SubProductModel);
          }}
          isShadow={false}
          styles={{
            height: 55,
            borderRadius: 25,
            backgroundColor: colors.dark,
          }}
          textStyleProps={{color: colors.white}}
        />
      )
    );
  };

  return (
    <>
      <View
        style={[
          globalStyles.section,
          {
            zIndex: 100,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            padding: 25,
            paddingTop: 30,
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

          <Badge count={cartData.length}>
            <Pressable
              style={{
                marginTop: 4,
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: colors.white,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <MaterialCommunityIcons
                name="shopping"
                size={18}
                color={colors.dark}
              />
            </Pressable>
          </Badge>
        </View>
      </View>
      <ScrollView
        style={[globalStyles.conatiner, {backgroundColor: colors.white}]}>
        <View style={globalStyles.conatiner}>
          {subProductSelected && (
            <ImageSwiper files={subProductSelected.files} />
          )}
        </View>
        <View style={globalStyles.conatiner}>
          {productDetail && (
            <View
              style={[
                globalStyles.section,
                {
                  paddingVertical: 12,
                  backgroundColor: colors.white,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginTop: -20,
                },
              ]}>
              <View
                style={[
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                ]}>
                <View>
                  <TextComponent
                    text={productDetail?.title}
                    font={fontFamilies.poppinsBold}
                    size={20}
                  />
                  <TextComponent
                    text={productDetail?.type}
                    font={fontFamilies.poppinsRegular}
                    size={16}
                    color={colors.desciption}
                  />
                  <RatingComponent id={id} />
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#dbdbdb',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 4,
                        borderRadius: 20,
                      }}>
                      <Pressable
                        disabled={
                          subProductSelected &&
                          subProductSelected.quantity === 0
                        }
                        style={{
                          paddingHorizontal: 8,
                        }}
                        onPress={() => {
                          setCount(count + 1);
                        }}>
                        <Add size={24} color={colors.dark} />
                      </Pressable>
                      <TextComponent text={count.toString()} size={18} />
                      <Pressable
                        style={{
                          paddingHorizontal: 8,
                        }}
                        disabled={count === 1}
                        onPress={() => {
                          setCount(count - 1);
                        }}>
                        <Minus
                          size={24}
                          color={count === 1 ? colors.gray2 : colors.dark}
                        />
                      </Pressable>
                    </View>
                  </View>
                  <Space height={8} />
                  <TextComponent
                    text={
                      subProductSelected && subProductSelected.quantity > 0
                        ? 'Avaliable in stock'
                        : 'Unavaliable of stock'
                    }
                    size={16}
                    font={fontFamilies.poppinsBold}
                  />
                </View>
              </View>

              <Row>
                <Col>
                  <View>
                    <TextComponent
                      text="Size"
                      size={18}
                      font={fontFamilies.poppinsBold}
                    />
                    <Space height={8} />
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                      {subProductSelected?.size &&
                        subProductSelected.size.length > 0 &&
                        subProductSelected.size.map((item, index) => (
                          <Button
                            key={index}
                            color={
                              item === sizeSelected ? colors.dark : undefined
                            }
                            styles={{
                              minWidth: 50,
                              height: 50,
                              borderRadius: 25,
                              paddingHorizontal: 0,
                              marginRight:
                                index < subProductSelected.size.length - 1
                                  ? 12
                                  : 0,
                            }}
                            inline
                            isShadow={false}
                            title={item}
                            onPress={() => {
                              setSizeSelected(item);
                            }}
                          />
                        ))}
                    </View>
                  </View>
                </Col>
                <View
                  style={{
                    marginHorizontal: 12,
                    padding: 8,
                    borderRadius: 8,
                    backgroundColor: colors.white,
                    shadowColor: colors.dark,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 3,
                  }}>
                  {subProducts.length > 0 &&
                    subProducts.map((item, index) => (
                      <Pressable
                        key={index}
                        onPress={() => {
                          setSubProductSelected(item);
                        }}
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          marginVertical: 4,
                          backgroundColor: item.color,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {subProductSelected?.color === item.color && (
                          <Ionicons
                            name="checkmark"
                            size={16}
                            color={colors.white}
                          />
                        )}
                      </Pressable>
                    ))}
                </View>
              </Row>
              <Space height={16} />
              <TextComponent
                text="Description"
                size={18}
                font={fontFamilies.poppinsBold}
              />
              <TextComponent
                text={productDetail?.description}
                size={18}
                font={fontFamilies.poppinsRegular}
                color={colors.gray2}
              />
            </View>
          )}
        </View>
      </ScrollView>

      <View
        style={[
          globalStyles.section,
          {backgroundColor: colors.white, paddingTop: 10},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <TextComponent text="Total price:" size={12} color={colors.gray2} />
            <TextComponent
              text={`$${
                count *
                parseFloat(subProductSelected ? subProductSelected.price : '0')
              }`}
              size={20}
              font={fontFamilies.poppinsBold}
              numberOfLines={1}
            />
          </View>
          <View style={{flex: 2.5, paddingLeft: 70}}>{renderCartButon()}</View>
        </View>
      </View>
    </>
  );
};

export default ProductDetail;
