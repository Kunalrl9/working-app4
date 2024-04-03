import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MANGA_DATA = [
  { title: 'Martial Peak', status: 'Completed' },
  { title: 'Solo Leveling', status: 'Up to Vol.98 Ch.11...' },
  { title: 'Kimetsu no Yaiba', status: 'Completed' },
  // ... more manga entries
];

const MangaItem = ({ title, status }) => {
  return (
    <View style={styles.mangaItem}>
      <Text style={styles.mangaTitle}>{title}</Text>
      <Text style={styles.mangaStatus}>{status}</Text>
    </View>
  );
};

const All = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ALL</Text>
      <FlatList
        data={MANGA_DATA}
        renderItem={({ item }) => <MangaItem {...item} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  mangaItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  mangaTitle: {
    fontSize: 18,
  },
  mangaStatus: {
    color: '#aaa',
  },
});

export default All;