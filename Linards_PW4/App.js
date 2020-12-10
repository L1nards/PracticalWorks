import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://newsapi.org/v2/everything?q=apple&from=2020-12-05&to=2020-12-05&sortBy=popularity&apiKey=d185059517c649618d111e71dee8610a'
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 1, marginTop: 40, }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{margin: 5, borderColor: '#000', borderWidth: 2, padding:5, backgroundColor: '#f5f5f5'}}>

              <Text style={{color: '#000', fontFamily: 'Arial', fontSize: 17, fontWeight: "bold", padding: 5}}>
                {item.title}
              </Text>

              <Text style={{fontFamily: 'Arial', padding: 5}}>
              {item.description}
              </Text>

              <Text style={{padding: 5, color: '#03c2fc'}}>
              {item.url}
              </Text>

            </View>
          )}
        />
      )}
    </View>
  );
};