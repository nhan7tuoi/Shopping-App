import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalSyles';

type Props = {
  children: ReactNode;
  title?: string;
  back?: boolean;
  right?: ReactNode;
  left?: ReactNode;
  isScroll?: boolean;
};

const ContainerComponent = (props: Props) => {
  const {children, title, back, right, left, isScroll} = props;
  return (
    <SafeAreaView style={[globalStyles.conatiner]}>
      {back || right || left || title &&
      <View style={{flexDirection:'row'}}>


      </View> 
      }

      {!isScroll && isScroll !== false ? (
        <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
      ) : (
        <View>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default ContainerComponent;
