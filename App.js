import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/title';
import Main from './src/components/Main';
export default function App() {
  return (
    <View style={styles.container}>
      <Titulo></Titulo>
      <Main></Main>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
