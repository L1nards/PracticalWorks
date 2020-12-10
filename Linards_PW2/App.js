import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tx1}>
        Hello World from Group 12 Linards Indruskevics!
      </Text>
      <Text style={styles.tx2}>
        This is my Linards Indruskevics first React Native application!
      </Text>
    </View>
  );
}

export default HelloWorld;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tx1: {
    fontSize: 14,
    padding:15
  },
  tx2: {
    fontSize: 14,
    padding:15
  }
});