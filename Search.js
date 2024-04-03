import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.Texty}>AGON TALES</Text>
    <View style={styles.colorIn}>
        <TextInput placeholder='Search'
        style={styles.textInput}/>
      </View>
      <View style={styles.move}>
        <Text style={styles.text1}>Battle/Action</Text>
        <Text style={styles.text2}>Comedy</Text>
        <Text style={styles.text3}>Sport / Activities</Text>
        <Text style={styles.text4}>Mystery / Thriller</Text>
        <Text style={styles.text5}>Romance</Text>
        <Text style={styles.text6}>Horror / Supernatural</Text>
        <Text style={styles.text7}>Spin-off</Text>
        <Text style={styles.text8}>Sci-Fi / Fantasy</Text>
        <Text style={styles.text9}>Gangster</Text>
        <Text style={styles.text10}>Romantic Comedy</Text>
        <Text style={styles.text11}>History / Period</Text>
        <Text style={styles.text12}>One-shot</Text>
        <Text style={styles.text13}>Seinen</Text>
        <Text style={styles.text14}>School Life</Text>
        <Text style={styles.text15}>Martial Arts</Text>
        <Text style={styles.text16}>Shounen</Text>
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
    container:{
        padding:20,
        width:395,
        height:130,
        paddingTop:40,
        backgroundColor:'purple',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
      },
      Texty: {
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
        borderColor:'white',
        borderRadius:8,
        borderWidth:3,
        width:'85%',
      },
      move:{
        left:20,
      },
        Text: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'left',
          alignItems: '',
          alignSelf: 'stretch',
          marginLeft: 10,
          marginTop: -20,
          marginBottom: 20,
          color:'white',
        },
      textInput:{
          padding:7,
          paddingHorizontal:16,
          backgroundColor:'purple',
          borderRadius:8,
          width:'85%',
          color:'white',
        },
        text1:{
          top:50,
          right:10,
          textAlign:'center',
          width:100,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text2:{
          top:31,
          left:95,
          textAlign:'center',
          width:70,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text3:{
          top:10,
          left:170,
          textAlign:'center',
          width:120,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text4:{
          top:20,
          right:10,
          textAlign:'center',
          width:130,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text5:{
          top:1,
          left:125,
          textAlign:'center',
          width:70,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text6:{
          top:-19,
          left:200,
          textAlign:'center',
          width:150,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text7:{
          top:-10,
          right:10,
          textAlign:'center',
          width:70,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text8:{
          top:-30,
          left:65,
          textAlign:'center',
          width:115,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text9:{
          top:-49,
          left:185,
          textAlign:'center',
          width:75,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text10:{
          top:-40,
          right:10,
          textAlign:'center',
          width:75,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text11:{
          top:-60,
          left:75,
          textAlign:'center',
          width:115,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text12:{
          top:-80,
          left:200,
          textAlign:'center',
          width:75,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text13:{
          top:-70,
          right:10,
          textAlign:'center',
          width:65,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text14:{
          top:-90,
          left:60,
          textAlign:'center',
          width:90,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text15:{
          top:-110,
          left:160,
          textAlign:'center',
          width:90,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
        text16:{
          top:-130,
          left:260,
          textAlign:'center',
          width:75,
          height:20,
          // padding:10,
          backgroundColor:'white',
          borderRadius:10,
          borderWidth:2,
          color:"purple",
          borderColor: 'black',
        },
});