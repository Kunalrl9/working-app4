import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';


const AccountScreen = () => {
  const [username, setUsername] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('https://ew.com/thmb/xZ6l7kNqvjMS-mzC97kFdgwGTKA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avengers-loki-afa29e2016934818891b46f60409d8aa.jpg');

  const selectImage = () => {
    const options = {
      title: 'Select Profile Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images', // Make sure this path exists
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
      <View>
      <Text style={styles.text1}>Edit Profile</Text>
      </View>
      <View style={styles.line}>
      </View>
      <TouchableOpacity onPress={selectImage}>
        <Image
          source={{ uri: profilePhoto }}
          style={styles.profilePhoto}
        />
      </TouchableOpacity>
      <Text style={styles.username}>{username}</Text>
      <View style={styles.line1}>
      <Text style={styles.text2}>User settings</Text>
      </View>
      <View>
      <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>For U</Text>
        </TouchableOpacity>
      </View>
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
    width: 80,
    height: 80,
    borderRadius: 75,
    marginBottom: 20,
    top:-240,
    right: 150,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    top:100,
    right: 40,
  },
  line:{
    top: -250,
    width:500,
    height:0,
    borderWidth:1,
    borderColor:'purple',
  },
  text1:{
    top:-250,
    right: 140,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  line1:{
    top:-280,
    width:500,
    height:50,
    backgroundColor:'purple',
  },
  text2:{
    top:10,
    right: -60,
    fontSize: 19,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  buttonText1:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  }
});

export default AccountScreen;