import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { getMarketData } from './services/NFTservice';

export default function App() {
  const [data, setData] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Projects</Text>
      </View>
      <View style = {styles.divider}/>

    <FlatList
      keyExtractor={(item) => item.id}
      data = {data}
      renderItem={({item}) => (
        <ListItem
        name={item.name}
        symbol={item.symbol}
        image={item.image}
        type={item.type}
        />
      )}
    />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titleWrapper: {
    marginTop: 40,
    paddingHorizontal: 19,
  },

  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  }
  });
