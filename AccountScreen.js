import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import PropTypes from 'deprecated-react-native-prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AccountScreen = () => {
  const [username, setUsername] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('https://ew.com/thmb/xZ6l7kNqvjMS-mzC97kFdgwGTKA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avengers-loki-afa29e2016934818891b46f60409d8aa.jpg');

  const navigation = useNavigation();
   const oke=()=>{
  navigation.navigate('SignUp');
  }
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
          <Text style={styles.buttonText1}>Notification Center</Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>Download Manga</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>Reading Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>New and Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>Update of your favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>Your Progress Work</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text onPress={oke} style={styles.logOut}>Log-Out</Text>
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
    top:-110,
    right: 150,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    top:100,
    right: 40,
  },
  line:{
    top: -120,
    width:500,
    height:0,
    borderWidth:1,
    borderColor:'purple',
  },
  text1:{
    top:-120,
    right: 140,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  line1:{
    top:-150,
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
    top:-150,
    left:-80,
    margin:10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logOut:{
    top:-120,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    textAlign:'center',
    width:110,
    height:35,
    backgroundColor:'#E5E4E2',
    borderRadius:40,
    borderWidth:2,
  }
});

export default AccountScreen;