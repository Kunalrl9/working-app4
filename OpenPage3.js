import React from 'react'
import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const OpenPage3= () => {
    [];
    const navigation = useNavigation();
        const okv=()=>{
    navigation.navigate('OpenChapters3');
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
        <Text style={styles.title}>SAKAMOTO DAYS</Text>
        <Text style={styles.text}>YUTO SUZUKI</Text>
        </View>
        <View>
        <TouchableOpacity>
          <Text style={styles.buttonText1}>Description</Text>
        <View style={styles.mark}>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={okv} style={styles.buttonText2}>Chapters</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.line}>
        </View>
        <View style={styles.line1}>
        </View>
        <View>
        <Text style={styles.descrip}>Taro Sakamoto was the ultimate assassin, feared by villains and admired by hitmen. But one day...he fell in love! Retirement, marriage, fatherhood and then... Sakamoto gained weight! The chubby guy who runs the neighborhood?store is actually a former legendary hitman! Can he protect his family from danger? Get ready to experience a new kind of action comedy series!</Text>
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
        top:-190,
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
        top: -240,
        width:500,
        height:0,
        borderWidth:1,
        borderColor:'purple',
    },
    line1:{
        top: -210,
        width:500,
        height:0,
        borderWidth:1,
        borderColor:'purple',
    },
    buttonText1:{
        top:-190,
        left:-150,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'left',
    },
    buttonText2:{
        top:-220,
        left:150,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'left',
    },
    mark:{
        top:-190,
        left:-145,
        width:60,
        height:10,
        backgroundColor:'red',
        borderRadius:5,
    },
    descrip:{
        top:-210,
    },
    border:{
        top:92,
	    width:395,
        height:51,
        backgroundColor:'#EEEEEE',
        borderWidth:3,
        borderColor:'purple',
        shadowColor:'black',
        elevation:8,
    },
    border1:{
        top:40,
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
});

export default OpenPage3 ;