import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

export default function Search() {
  return (
    <View style={styles.container}>
    <View style={styles.container1}>
      <Text style={styles.Text}>AGON TALES</Text>
    <View>
        <TextInput placeholder='Search'
        style={styles.textInput}/>
      </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     resizeMode: 'contain',
    //     top:-200,
    //   },
    container1:{
        padding:20,
        width:395,
        height:130,
        paddingTop:40,
        backgroundColor:'purple',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
      },
      Text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        alignItems: '',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginTop: -20,
        marginBottom: 20,
      },
    textInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:'white',
        borderRadius:8,
        width:'85%'
      },
});