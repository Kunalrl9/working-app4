import React from 'react'
import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function MangaMaker () {
  return (
    <View style={styles.container}>
        <View style={styles.backBlue}>
        <TouchableOpacity>
            <View style={styles.mark}>
            <Feather name="upload" size={24} color="black" style={styles.upload} />
            </View>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.convertBtn}>
          <Text style={styles.text}>Convert</Text>
          </View>
        </TouchableOpacity>
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
        top:-255,
        width:390,
        height:250,
        alignSelf:'center',
        backgroundColor:'#82CAFF',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        shadowColor:'black',
        elevation:8,
      },
      mark:{
        top:100,
        left:95,
        width:200,
        height:70,
        backgroundColor:'#EEEEEE',
        borderRadius:30,
        shadowColor:'black',
        elevation:8,
      },
      upload:{
        top:25,
        left:85,
      },
      convertBtn:{
        top:-230,
        width:230,
        height:50,
        backgroundColor:'#EEEEEE',
        borderRadius:30,
        borderWidth:2,
        shadowColor:'black',
        elevation:8,
      },
      text:{
        top:3,
        fontSize:30,
        textAlign:'center',
      },
    });
