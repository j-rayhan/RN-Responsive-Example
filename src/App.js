import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './App.module.css';

const BlueText = () => {
  return <Text className={styles.blue}>Blue Text</Text>;
};

const App = () => {
  return (
    <View style={styles.container}>
      <BlueText />
    </View>
  );
};

export default App;
