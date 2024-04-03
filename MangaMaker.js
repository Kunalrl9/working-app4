import React from 'react'
import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';

const MangaMaker = () => {
  const navigation = useNavigation();
  const okx=()=>{
    navigation.navigate('MangaConvter');
  }
  const navigation1 = useNavigation();
  const oky=()=>{
    navigation.navigate('UploadManga');
  }

  return (
    <View style={styles.container}>
        <View style={styles.backBlue}>
        <TouchableOpacity onPress={okx}>
            <View style={styles.mark}>
            <Feather name="upload" size={24} color="black" style={styles.upload} />
            </View>
        </TouchableOpacity>
        </View>
        <View style={styles.centerText}>
          <Text style={styles.centerType1}>
            *INSTRUCTION AND TIPS*
          </Text >
          <Text style={styles.centerType2}>for now user can only convert one image at a time</Text>
        </View>
        <TouchableOpacity onPress={oky}>
          <View style={styles.convertBtn}>
          <Text style={styles.text}>Upload Manga</Text>
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
        top:170,
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
      header:{
          backgroundColor:'#FFFFFF',
          shadowColor:'#333333',
          shadowOffset:{width:-1,height:-3},
          shadowRadius:2,
          shadowOpacity:0.4,
          paddingTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        panelHeader:{
          alignItems:'center',
        },
        panelHandle:{
          width: 40,
          height:8,
          borderRadius:4,
          backgroundColor:'#00000040',
          marginBottom:10,
        },
        centerType1:{
          color:'red',
          textAlign:'center',
          justifyContent:'center',
          fontSize:20,
        },
    });
    export default MangaMaker;