import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MainContainer from './app/components/Containers/MainContainer.js';
import BigText from './app/components/Text/BigText';
import RegularText from './app/components/Text/RegularText';
import SmallText from './app/components/Text/SmallText';


const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={{
      flex: 1,
      alignContent: 'center', 
      justifyContent: 'center', 
      padding: 16,
    }}>
      <BigText> Create PoA Record </BigText>
      <Text style={{ marginVertical: 16 }}>
       Name
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
        autoCorrect
      />
    </View>
  );
};

export default App;
