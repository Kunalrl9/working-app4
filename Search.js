import React from 'react'
import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Search= () =>{
  const menuData = [
    { id: 'Kagurabachi', screen: 'OpenPage1', image: require('../working-app/assets/KK.jpeg') },
    { id: 'SAKAMOTO DAYS',  screen: 'OpenPage2', image: require('../working-app/assets/DAYS.jpeg') },
    { id: 'My Hero Academia',  screen: 'OpenPage3', image: require('../working-app/assets/MHA.jpeg') },
    { id: 'Blue Exorcist',  screen: 'OpenPage4', image: require('../working-app/assets/TT.jpeg') },
    { id: 'One Piece',  screen: 'OpenPage5', image: require('../working-app/assets/OP.jpeg') },
    { id: 'Jujutsu Kaisen',  screen: 'OpenPage6', image: require('../working-app/assets/JJK.jpeg') },
    { id: 'Demon Slayer:..',  screen: 'OpenPage7', image: require('../working-app/assets/DS.jpeg') },
    { id: 'Sachi’s Records...',screen: 'OpenPage8', image: require('../working-app/assets/8.jpeg') },
  ];
  
  
  const menuData2 = [
    { id: 'Akane-banashi', screen: 'OpenPage9', image: require('../working-app/assets/week/311638.jpg') },
    { id: 'Blue Box', screen: 'OpenPage10', image: require('../working-app/assets/week/311824.jpg') },
    { id: 'Me & Roboco', screen: 'OpenPage11', image: require('../working-app/assets/week/313120.jpg') },
    { id: 'Nue s Exorcist', screen: 'OpenPage12', image: require('../working-app/assets/week/313420.jpg') },
    { id: 'WITCH WATCH', screen: 'OpenPage13', image: require('../working-app/assets/week/314236.jpg') },
    { id: 'Kill Blue', screen: 'OpenPage14', image: require('../working-app/assets/week/315466.jpg') },
  ];
  const navigation = useNavigation();
  const oky=()=>{
    navigation.navigate('Search');
  }
  const navigateToPage = (screenName) => {
    navigation.navigate(screenName);
  };
   // Render menu items
   const renderMenuItems = () =>
   menuData.map(item => (
     <TouchableOpacity onPress={() => navigateToPage(item.screen)} key={item.id} style={styles.menuItem}>
       <Image source={item.image} style={styles.menuItemImage} />
       <Text style={styles.menuItemText}>{item.id}</Text>
     </TouchableOpacity>
   ));

  const renderSecondMenuItems = () =>
    menuData2.map(item => (
    <TouchableOpacity onPress={() => navigateToPage(item.screen)} key={item.id} style={styles.menuItem2}>
      <Image source={item.image} style={styles.menuItemImage2} />
      <Text style={styles.menuItemText2}>Menu {item.id}</Text>
    </TouchableOpacity>
  ));


  return (
    <View style={styles.container1}>
      <Text style={styles.Text}>Search</Text>
    <View>
        <TextInput placeholder='Search'
        style={styles.textInput}/>
        <TouchableOpacity>
        <AntDesign name="search1" size={24} color="black" style={styles.searchBtn} />
        </TouchableOpacity>
        <View style={styles.title2}>
        <Text style={styles.title3}>By Genre</Text>
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
        
         {/* Horizontal Scroll Menu */}
      <Text style={styles.title8}>TOP HOT</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuContainer}>
        {renderMenuItems()} 
      </ScrollView>

       {/*Second Horizontal Scroll Menu*/}
    <Text style={styles.title7}>WEEKLY SHONEN JUMP</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuContainer2}>
      {renderSecondMenuItems()}
    </ScrollView>

        </View>
        
      </View>
  );
};
const styles = StyleSheet.create({
    container2: {
      width:395,
      height:130,
      paddingTop:40,
      padding: 20,
      backgroundColor: 'purple',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    
    },
    container1: {
      flex: 1,
    },
    move:{
      left:20,
    },
      Text: {
        top:20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        alignItems: '',
        alignSelf: 'stretch',
        marginLeft: 10,
        marginTop: -20,
        marginBottom: 20,
        color:'purple',
      },
    textInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:'white',
        borderRadius:8,
        width:'99%',
        color:'purple',
        borderRadius:10,
        borderWidth:2,
        borderColor: 'black',
      
      },
      searchBtn:{
        top:-35,
        left:360,
      },
      title2:{
        top:-50,
      },
      move:{
        top:-20,
        left:20,
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
      title3:{
        top:40,
        left:10,
        fontSize: 18,
        fontWeight: 'bold',
      },
      // scrollMenu: {
      //   marginTop: -90,
      //   flexDirection: 'row',
      //   height: 250,
      // },
      // imageContainer: {
      //   marginRight: 10,
      //   width: 100,
      //   height: 250,
      // },
      // image: {
      //   width: 100,
      //   height: 150,
      // },
      // imageText: {
      //   textAlign: 'center',
      //   marginTop: 5,
      //   color: 'white',
      // },
      // carouselItem: {
      //   // backgroundColor: 'black',
      //   borderRadius: 8,
      //   overflow: 'hidden',
      //   resizeMode:"contain",
      //   // marginRight: -190,
      //   // marginLeft: -10,
      // },
      // carouselImage: {
      //   width: 345,
      //   height: 193,
      //   resizeMode:"contain",
      //   // margin: 40,
      // },
      title8:{
        top: 100,
        marginLeft: 10,
        fontSize: 20,
        // marginBottom: -60,
        color: 'purple',
      },
      title7:{
        top: -150,
        marginLeft: 10,
        fontSize: 20,
        marginBottom: -230,
        color: 'purple',
      },
    
      menuContainer: {
        marginTop: -150,
        marginLeft: 5,
        bottom: -50,
      },
      menuContainer2:{
        marginTop: -123,
        marginLeft: 5,
        // marginBottom: 10,
        bottom:-400,
      },
      menuItem: {
        marginRight: 5,
        // borderRadius: 8,
        overflow: 'visible',
        margin: 5,
      },
      menuItemImage: {
        width: 100,
        height: 150,
      },
      menuItem2: {
        marginRight: 5,
        // borderRadius: 8,
        overflow: 'visible',
        margin: 5,
      },
      menuItemImage2: {
        width: 100,
        height: 150,
        // bottom: -90,
      },
       menuItemText: {
        textAlign: 'left',
        fontSize: 10,
        fontWeight: 'bold',
      },
    
      menuItemText2: {
        textAlign: 'left',
        fontSize: 10,
        fontWeight: 'bold',
        // marginBottom:-80,
        // marginTop:90,
      },
});export default Search;