import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { db, collection, getDocs } from './Firebase/firebase';

export default function Displaymanga() {
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    const fetchMangaData = async () => {
      try {
        const mangaCollectionRef = collection(db, 'users');
        const snapshot = await getDocs(mangaCollectionRef);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMangaData(data);
      } catch (error) {
        console.error('Error fetching manga data: ', error);
      }
    };

    fetchMangaData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.box}>
      <Image
        style={styles.image}
        source={require('./assets/8.jpeg')}
      />
      <Text>{item.manganame}</Text>
      <Text>{item.Author}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={mangaData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 300,
    width: 180,
    backgroundColor: 'red',
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 170,
  },
});
