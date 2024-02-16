import React from 'react'
import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function Favorite() {
    const navigation = useNavigation();
    const oky=()=>{
        navigation.navigate('OpenPage1');
      }
    const navigation1 = useNavigation();
    const okx=()=>{
        navigation.navigate('OpenPage2');
      }
    const navigation2 = useNavigation();
    const okk=()=>{
        navigation.navigate('OpenPage3');
      }
  return (
    <View style={styles.container}>
    <View>
        <Text style={styles.text7}>Your list</Text>
    </View>
        <View style={styles.line3}>
    </View>
    <View style={styles.fav}>
    <TouchableOpacity onPress={oky}>
    <Image style={styles.image1}
        source={{
            uri:'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/KK.jpeg?alt=media&token=72d52ff2-a791-423d-ae34-9da85bb2f72c'
        }} />
    </TouchableOpacity>
    <TouchableOpacity onPress={okx}>
    <Image style={styles.image2}
        source={{
            uri:'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/DS.jpeg?alt=media&token=b28548a4-97b3-4e4b-9cc6-471a57c60dd5'
        }} />
    </TouchableOpacity>
    <TouchableOpacity onPress={okk}>
    <Image style={styles.image3}
        source={{
            uri:'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/DAYS.jpeg?alt=media&token=9ce6fafb-3727-4dce-95fb-0939fef0e5ff'
        }} />
    </TouchableOpacity>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
      },
    line3:{
        top: -130,
        width:500,
        height:0,
        borderWidth:1,
        borderColor:'purple',
      },
    text7:{
        top:-135,
        textAlign:'center',
        fontSize: 19,
        fontWeight: 'bold',
      },
      fav:{

      },
      image1:{
        top: -120,
        left:-130,
        alignItems:'left',
        width:100,
        height:149,
      },
      image2:{
        top: -270,
        left:-3,
        alignItems:'left',
        width:100,
        height:149,
      },
      image3:{
        top: -420,
        left:125,
        alignItems:'left',
        width:100,
        height:149,
      },
});