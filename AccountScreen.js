import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';


const AccountScreen = () => {
  const [username, setUsername] = useState('John Doe');
  const [profilePhoto, setProfilePhoto] = useState('');

  const selectImage = () => {
    const options = {
      title: 'Select Profile Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setProfilePhoto(response.uri);
      }
    });
  };

  return  (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage}>
        <Image
          source={{ uri: profilePhoto }}
          style={styles.profilePhoto}
        />
      </TouchableOpacity>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AccountScreen