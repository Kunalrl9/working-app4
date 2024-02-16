import React from 'react'
import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OpenChapters3= () => {
    [];
    const navigation = useNavigation();
        const oke=()=>{
    navigation.navigate('OpenPage3');
  }
  return (
    <View style={styles.container}>
        <View>
        <TouchableOpacity>
          <Text style={styles.buttonText1}>Description</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.backBlue}>
        <Image style={styles.image1}
        source={{
            uri:'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/DAYS.jpeg?alt=media&token=9ce6fafb-3727-4dce-95fb-0939fef0e5ff'
        }}
        />
        <Text style={styles.title}>KOYOHARU GOTOUGE</Text>
        <Text style={styles.text}>YUTO SUZUKI</Text>
        </View>
        <View>
        <TouchableOpacity>
          <Text onPress={oke} style={styles.buttonText1}>Description</Text>
        <View style={styles.mark}>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText2}>Chapters</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.line}>
        </View>
        <View style={styles.line1}>
        </View>
        <View>
      <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text  style={styles.buttonText0}>Ch.01</Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText0}>Ch.02</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText0}>Ch.03</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText0}>Ch.04</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText0}>Ch.05</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText0}>Ch.06</Text>
        </TouchableOpacity>
      </View>
        <View>
        <TouchableOpacity>
        <View style={styles.border}>
            <AntDesign name="star" size={24} color="black" style={styles.star}/>
        </View>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
        <View style={styles.border1}>
          <Text style={styles.read}>Read Ch.01</Text>
        </View>
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
        resizeMode: 'contain',
      },
    backBlue:{
        top:-120,
        width:395,
        height:400,
        alignSelf:'center',
        borderRadius:145.5,
        backgroundColor:'#82CAFF',
        shadowColor:'black',
        elevation:8,
    },
    image1:{
        top:135,
        left:135,
        width:120,
        height:159,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding:50,
    marginRight: 39,
    },
    title:{
        top:135,
        textAlign:'center',
    },
    text:{
        top:140,
        left:120,
        textAlign:'center',
        width:150,
        height:20,
        backgroundColor:'white',
        borderRadius:10,
        color:"purple",
    },
    line:{
        top: -170,
        width:500,
        height:0,
        borderWidth:1,
        borderColor:'purple',
    },
    line1:{
        top: -140,
        width:500,
        height:0,
        borderWidth:1,
        borderColor:'purple',
    },
    buttonText1:{
        top:-120,
        left:-150,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'left',
    },
    buttonText2:{
        top:-150,
        left:150,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'left',
    },
    mark:{
        top:-120,
        left:152,
        width:60,
        height:10,
        backgroundColor:'red',
        borderRadius:5,
    },
    border:{
        top:21,
	    width:395,
        height:51,
        backgroundColor:'#EEEEEE',
        borderWidth:3,
        borderColor:'purple',
        shadowColor:'black',
        elevation:8,
    },
    border1:{
        top:-30,
        left:82,
        width:230,
        height:51,
        backgroundColor:'purple',
        shadowColor:'black',
        elevation:8,
    },
    read:{
        top:10,
        textAlign:'center',
        fontSize: 25,
        fontWeight: 'bold',
        color:'white',
    },
    star:{
        top:10,
        left:60,
        color:'#FFDF00',
        shadowColor:'black',
        elevation:10,
    },
    buttonText0:{
        top:-130,
        left:-160,
        margin:10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});

export default OpenChapters3 ;