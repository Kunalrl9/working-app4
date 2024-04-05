import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const Home = () => {
  const carouselData = [
    { id: '1', image: require('../working-app3/assets/fire.jpg') },
    { id: '2', image: require('../working-app3/assets/images.jpg') },
    { id: '3', image: require('../working-app3/assets/sword-art-online-sao.png') },
    // { id: '4', image: require('../AwesomeProject/assets/Boruto.jpeg') },
  ];

  
  const menuData = [
    { id: 'Kagurabachi', screen: 'OpenPage1', image: require('../working-app3/assets/KK.jpeg') },
    { id: 'SAKAMOTO DAYS',  screen: 'OpenPage2', image: require('../working-app3/assets/DAYS.jpeg') },
    { id: 'My Hero Academia',  screen: 'OpenPage3', image: require('../working-app3/assets/MHA.jpeg') },
    { id: 'Blue Exorcist',  screen: 'OpenPage4', image: require('../working-app3/assets/TT.jpeg') },
    { id: 'One Piece',  screen: 'OpenPage5', image: require('../working-app3/assets/OP.jpeg') },
    { id: 'Jujutsu Kaisen',  screen: 'OpenPage6', image: require('../working-app3/assets/JJK.jpeg') },
    { id: 'Demon Slayer:..',  screen: 'OpenPage7', image: require('../working-app3/assets/DS.jpeg') },
    { id: 'Sachi’s Records...',screen: 'OpenPage8', image: require('../working-app3/assets/8.jpeg') },
  ];
  
  
  const menuData2 = [
    { id: 'Akane-banashi', screen: 'OpenPage9', image: require('../working-app3/assets/week/311638.jpg') },
    { id: 'Blue Box', screen: 'OpenPage10', image: require('../working-app3/assets/week/311824.jpg') },
    { id: 'Me & Roboco', screen: 'OpenPage11', image: require('../working-app3/assets/week/313120.jpg') },
    { id: 'Nue s Exorcist', screen: 'OpenPage12', image: require('../working-app3/assets/week/313420.jpg') },
    { id: 'WITCH WATCH', screen: 'OpenPage13', image: require('../working-app3/assets/week/314236.jpg') },
    { id: 'Kill Blue', screen: 'OpenPage14', image: require('../working-app3/assets/week/315466.jpg') },
  ];
  const navigation1 = useNavigation();
  const okx=()=>{
    navigation.navigate('Browes');
  }

  const navigation = useNavigation();
  const oky=()=>{
    navigation.navigate('Search');
  }
  // const menuData3 = [
  //   { id: 'Akane-banashi', image: require('../working-app/assets/week/311638.jpg') },
  //   { id: 'Blue Box', image: require('../working-app/assets/week/311824.jpg') },
  //   { id: 'Me & Roboco', image: require('../working-app/assets/week/313120.jpg') },
  //   { id: 'Nue s Exorcist', image: require('../working-app/assets/week/313420.jpg') },
  //   { id: 'WITCH WATCH', image: require('../working-app/assets/week/314236.jpg') },
  //   { id: 'Kill Blue', image: require('../working-app/assets/week/315466.jpg') },
  // ];
  

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} 
      />
    </View>
  );
  const navigation2 = useNavigation();
  const okz=()=>{
    navigation.navigate('AccountScreen');
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
      <Text style={styles.menuItemText2}> {item.id}</Text>
    </TouchableOpacity>
  ));

  // const renderthreeMenuItems = () =>
  //   menuData3.map(item => (
  //   <TouchableOpacity key={item.id} style={styles.menuItem3}>
  //     <Image source={item.image} style={styles.menuItemImage3} />
  //     <Text style={styles.menuItemText3}>Menu {item.id}</Text>
  //   </TouchableOpacity>
  // ));

  const navigation4 = useNavigation();
  const okg=()=>{
    navigation.navigate('MangaMaker');
  }

  const navigation5 = useNavigation();
  const oki=()=>{
    navigation.navigate('Favorite');
  }
  const navigation6 = useNavigation();
  const oks=()=>{
    navigation.navigate('All');
  }

  return (
    <View ScrollView style={styles.container}>
      {/* <FlatList
      data={people}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>
      )}
      /> */}
      {/* <View style={styles.container1}> */}
      <Text style={styles.headerText}>AGON TALES</Text>
      <Feather onPress={oky} name="search" size={24} color="black"
        style={styles.searchBtn} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>For U</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={oks}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Latest</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}

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
    {/* <Text style={styles.title2}>User</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuContainer3}>
      {renderthreeMenuItems()}
    </ScrollView> */}

      
    <View style={styles.test1}>

      {/* Five buttons at the bottom with custom icons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={require('../working-app3/assets/icon/discover.png')} style={styles.customIcon} />
          {/* <Text style={styles.bottomButtonText}>discover</Text> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={oki} style={styles.bottomButton}>
          <Image source={require('../working-app3/assets/icon/mylist1.png')} style={styles.customIcon1} />
          {/* <Text style={styles.bottomButtonText}>my list</Text> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={okg} style={[styles.bottomButton, styles.floatingButton]}>
          <Image source={require('../working-app3/assets/icon/Agontales.png')} style={styles.customIcon2} />
          {/* <Text style={styles.bottomButtonText}>Manga makre</Text> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={okx} style={styles.bottomButton}>
          <Image  source={require('../working-app3/assets/icon/browes.png')} style={styles.customIcon3} />
          {/* <Text style={styles.bottomButtonText}>borwer</Text> */}
        </TouchableOpacity>
        

        <TouchableOpacity onPress={okz} style={styles.bottomButton}>
          <Image source={require('../working-app3/assets/icon/account3.png')} style={styles.customIcon4} />
          {/* <Text style={styles.bottomButtonText}>account</Text> */}
        </TouchableOpacity>
      </View>
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
  // // test1: {
  // //   height:45,
  // //   width:490,
  // //   backgroundColor:"purple",
  // //   alignItems: 'bottom',
  // //   // marginBottom:10,
  // //   // borderRadius:10,
    
  // },
  // container1:{
  //   padding:20,
  //   paddingTop:40,
  //   backgroundColor:'purple'
  // },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: '',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginTop: 15,
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
    marginTop: -30,
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
    top: -170,
    marginLeft: -170,
    fontSize: 20,
    marginBottom: -160,
    color: 'purple',
  },

  menuContainer: {
    marginTop: -200,
    marginLeft: 0,
    bottom: -50,
  },
  menuContainer2:{
    marginTop: -220,
    marginLeft: 0,
    // marginBottom: 10,
    bottom:-120,
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
  menuItemText: {
   textAlign: 'left',
   fontSize: 10,
   fontWeight: 'bold',
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
    bottom: -90,
  },
  menuItemText2: {
    textAlign: 'left',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom:-80,
    marginTop:90,
  },
  // menuContainer3:{
  //   marginTop: -220,
  //   marginLeft: 0,
  //   // marginBottom: 10,
  //   bottom:-280,
  // },
  // title3:{
  //   top: -10,
  //   marginLeft: -340,
  //   fontSize: 20,
  //   marginBottom: -160,
  //   color: 'purple',
  // },
  // menuItem3: {
  //   marginRight: 5,
  //   // borderRadius: 8,
  //   overflow: 'visible',
  //   margin: 5,
  // },
  // menuItemImage3: {
  //   width: 100,
  //   height: 150,
  //   bottom: -90,
  // },

  // menuItemText3: {
  //   textAlign: 'left',
  //   fontSize: 10,
  //   fontWeight: 'bold',
  //   marginBottom:-80,
  //   marginTop:90,
  // },

  searchBtn: {
    marginLeft:310,
    paddingLeft: 10,
    marginTop: -20,
  },

  bottomButtonsContainer: {
    flexDirection: 'row',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: -200,
    width:400,
    height: 70,
    backgroundColor: '#D462FF', // Change the color as per your preference
    // position: 'absolute',
    bottom: 0,
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingButton: {
    bottom: 15, // Adjust the value to control the floating effect

  },
  customIcon: {
    width: 40, // Adjust the width and height according to your custom icon size
    height: 40,
    padding:30,
    marginRight: 35, // Add margin to separate the icon and text
  },
  customIcon1: {
    width: 40, // Adjust the width and height according to your custom icon size
    height: 40,
    padding:20,
    marginRight: 25, // Add margin to separate the icon and text
  },
  customIcon2: {
    width: 40, // Adjust the width and height according to your custom icon size
    height: 40,
    padding:50,
    marginRight: 39, // Add margin to separate the icon and text
  },
  customIcon3: {
    
    width: 40, // Adjust the width and height according to your custom icon size
    height: 40,
    marginRight: 45, // Add margin to separate the icon and text
  },
  customIcon4: {
    width: 40, // Adjust the width and height according to your custom icon size
    height: 40,
    marginRight: 10, // Add margin to separate the icon and text
  },
  // bottomButtonText: {
  //   color: 'white',
  //   fontWeight: 'bold',
  // },
});

export default Home;