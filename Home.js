import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { after } from 'lodash';

const Home = () => {
  const carouselData = [
    { id: '1', image: require('../AwesomeProject/assets/fire.jpg') },
    { id: '2', image: require('../AwesomeProject/assets/images.jpg') },
    { id: '3', image: require('../AwesomeProject/assets/sword-art-online-sao.png') },
    // { id: '4', image: require('../AwesomeProject/assets/Boruto.jpeg') },
  ];
  

  const menuData = [
    { id: '5', image: require('../AwesomeProject/assets/KK.jpeg') },
    { id: '6', image: require('../AwesomeProject/assets/DAYS.jpeg') },
    { id: '7', image: require('../AwesomeProject/assets/MHA.jpeg') },
    { id: '8', image: require('../AwesomeProject/assets/TT.jpeg') },
    { id: '9', image: require('../AwesomeProject/assets/OP.jpeg') },
    { id: '10', image: require('../AwesomeProject/assets/JJK.jpeg') },
    { id: '11', image: require('../AwesomeProject/assets/DS.jpeg') },
    { id: '12', image: require('../AwesomeProject/assets/8.jpeg') },
  ];

  const menuData2 = [
    { id: '13', image: require('../AwesomeProject/assets/week/311638.jpg') },
    { id: '14', image: require('../AwesomeProject/assets/week/311824.jpg') },
    { id: '15', image: require('../AwesomeProject/assets/week/313120.jpg') },
    { id: '16', image: require('../AwesomeProject/assets/week/313420.jpg') },
    { id: '17', image: require('../AwesomeProject/assets/week/314236.jpg') },
    { id: '18', image: require('../AwesomeProject/assets/week/315466.jpg') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} 
      />
    </View>
  );

  const renderMenuItems = () =>
    menuData.map(item => (
      <TouchableOpacity key={item.id} style={styles.menuItem}>
        <Image source={item.image} style={styles.menuItemImage} />
        <Text style={styles.menuItemText}>Menu {item.id}</Text>
      </TouchableOpacity>
    ));

  const renderSecondMenuItems = () =>
    menuData2.map(item => (
    <TouchableOpacity key={item.id} style={styles.menuItem2}>
      <Image source={item.image} style={styles.menuItemImage2} />
      <Text style={styles.menuItemText2}>Menu {item.id}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>AGON TALES</Text>
      

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>For U</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Latest</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel */}
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={300}
        sliderHeight={100}
        itemWidth={300}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
      />

      {/* Horizontal Scroll Menu */}
      <Text style={styles.title}>TOP HOT</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuContainer}>
        {renderMenuItems()}
      </ScrollView>

       {/* Second Horizontal Scroll Menu */}
    <Text style={styles.title2}>WEEKLY SHONEN JUMP</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuContainer2}>
      {renderSecondMenuItems()}
    </ScrollView>
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: '',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -180,
    marginTop: -20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'purple',
  },
  buttonText1: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 20,
  },

  // purpleButton: {
  //   color: 'red',
  // },
  carouselItem: {
    // backgroundColor: 'black',
    borderRadius: 8,
    overflow: 'hidden',
    resizeMode:"contain",
    // marginRight: -190,
    // marginLeft: -10,
  },
  carouselImage: {
    width: 345,
    height: 193,
    resizeMode:"contain",
    // margin: 40,
  },
  title:{
    top: -210,
    marginLeft: -300,
    fontSize: 20,
    marginBottom: -60,
    color: 'purple',
  },
  title2:{
    top: -160,
    marginLeft: -170,
    fontSize: 20,
    marginBottom: -100,
    color: 'purple',
  },

  menuContainer: {
    marginTop: -200,
    marginLeft: 0,
    bottom: -50,
  },
  menuContainer2:{
    marginTop: -210,
    marginLeft: 0,
    // marginBottom: 10,
    bottom:-100,
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
    bottom: -50,
  },
   menuItemText: {
    marginTop: 5,
    textAlign: 'center',
  },

  menuItemText2: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Home; 