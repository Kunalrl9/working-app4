// Import necessary components
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

// Define your component
const MangaConvter = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://manga.art-creator.net/' }} // Replace with your website URL
        style={styles.webview}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

// Export the component
export default MangaConvter;