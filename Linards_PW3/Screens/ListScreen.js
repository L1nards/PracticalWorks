import * as React from 'react';
import { Text, View, FlatList, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const data = new Array(5).fill(null).map((v, i) => ({ key: i.toString(), value: `John Doe ${i}` }));
export default function App() {
  return (
    <View style = {styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.value}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    padding: 8,
  },
  text: {
    margin: 2,
    fontSize: 18,
    textAlign: 'left',
    borderWidth: 1,
    padding:15,
    backgroundColor: "#ccc"
  }
});
