import React from 'react';
import {View} from 'react-native';
import {ContainerComponent, TextComponent} from './src/components';
import { globalStyles } from './src/styles/globalSyles';

const App = () => {
  return (
    <ContainerComponent >
      <TextComponent text="Hello World" styles={globalStyles.center}/>
    </ContainerComponent>
  );
};

export default App;
