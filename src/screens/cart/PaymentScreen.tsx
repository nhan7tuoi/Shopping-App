import {Button} from '@bsdaoquang/rncomponent';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextComponent} from '../../components';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalSyles';
import {fontFamilies} from '../../constants/fontFamilies';
import { AddCircle } from 'iconsax-react-native';

const PaymentScreen = () => {
  const navigation: any = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);
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
        <TextComponent text="Payment" font={fontFamilies.poppinsBold} />
      </View>
      <View style={[globalStyles.section]}>
        {/* Payment Method */}
        <Button
        icon={<AddCircle size={20} color={colors.dark} />}
          title="Add Card"
          radius={12}
          type="dashed"
          isShadow={false}
          onPress={() => {
            navigation.navigate('AddPayment');
          }}
        />
      </View>
      <View style={[globalStyles.section]}>{/* Payment History */}</View>
    </View>
  );
};

export default PaymentScreen;
