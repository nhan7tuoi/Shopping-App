import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {TextComponent} from '../../components';
import {fontFamilies} from '../../constants/fontFamilies';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalSyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Button, Col, Input, Row, Space} from '@bsdaoquang/rncomponent';

const AddPayment = () => {
  const navigation: any = useNavigation();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChangeData = (key: string, value: string) => {
    const items: any = {...cardDetails};
    items[key] = value;
    setCardDetails(items);
  };

  const handleAddPayment = async () => {};

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
      <View style={[globalStyles.section]}>
        <TextComponent text="Add Payment" font={fontFamilies.poppinsBold} />
        <Space height={15} />
        <Image
          source={require('../../assets/images/card-demo.jpg')}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 12,
            resizeMode: 'cover',
          }}
        />
        <Space height={15} />
        <TextComponent text="Card Details" font={fontFamilies.poppinsBold} />
        <View>
          <Input
            value={cardDetails.cardNumber}
            radius={12}
            placeholder="Card Number"
            keyboardType='number-pad'
            onChange={value => handleChangeData('cardNumber', value)}
          />
          <Input
            value={cardDetails.cardNumber}
            radius={12}
            placeholder="Card Holder Name"
            onChange={value => handleChangeData('cardNumber', value)}
          />
          <Input
            value={cardDetails.cardNumber}
            radius={12}
            placeholder="Expiry Date"
            onChange={value => handleChangeData('cardNumber', value)}
          />
          <Input
            value={cardDetails.cardNumber}
            radius={12}
            placeholder="CVV"
            onChange={value => handleChangeData('cardNumber', value)}
          />
        </View>
        <View>
          <Row>
            <Col>
              <Button
                title="Cancel"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </Col>
            <Col>
              <Button
                title="Confirm"
                color={colors.dark}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </Col>
          </Row>
        </View>
      </View>
    </View>
  );
};

export default AddPayment;
