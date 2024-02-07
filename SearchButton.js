import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchButton = ({ onPress }) => (
  <TouchableOpacity style={styles.searchButton} onPress={onPress}>
    <Text style={styles.searchButtonText}>Search</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  searchButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10, // Adjust the styling as needed
  },
  searchButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SearchButton;