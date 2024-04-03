import React from 'react'
import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const OpenChapters8= () => {
    [];
    const navigation = useNavigation();
        const oke=()=>{
    navigation.navigate('OpenPage8');
  }
    const navigation1 = useNavigation();
        const okx=()=>{
    navigation.navigate('ch1');
  }

  const openPDF = (chapter) => {
    // Define PDF links for each chapter
    const pdfLinks = {
        ch1: 'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Boruto%20manga%2FBoruto%20Chapter%20%2353.pdf?alt=media&token=43cfd2c0-a84d-426b-a2d7-1f44a37e74d3',
        ch2: 'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Kagurabachi%20mangas%2FKagurabachi%20CH%20-%2002%20%40Manga_Infinite.pdf?alt=media&token=92ba73cd-a9e8-479e-8774-5aefdf2dd6aa',
        ch3: 'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Kagurabachi%20mangas%2FKagurabachi%20CH%20-%2003%20%40Manga_Infinite.pdf?alt=media&token=19c065bc-ec3f-45be-9063-ed7289c40090',
        ch4: 'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Kagurabachi%20mangas%2FKagurabachi%20CH%20-%2004%20%40Manga_Infinite.pdf?alt=media&token=66f930bd-3bdb-4469-ac97-8e6cbef5ce1a',
        ch5: 'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Kagurabachi%20mangas%2FKagurabachi%20CH%20-%2005%20%40Manga_Infinite.pdf?alt=media&token=927380e3-2f13-476f-8053-3669a23dcef9',
        ch6: 'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Kagurabachi%20mangas%2FKagurabachi%20CH%20-%2006%20%40Manga_Infinite.pdf?alt=media&token=e4d62d35-3e18-4c9c-9001-119a4eafacc5',
        // ch7: 'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Kagurabachi%20mangas%2FKagurabachi%20CH%20-%2007%20%40Manga_Infinite.pdf?alt=media&token=b9d849b9-b0bf-493f-961e-c57e946812d3',
        // ch8: 'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/Kagurabachi%20mangas%2FKagurabachi%20CH%20-%2008%20%40Manga_Infinite.pdf?alt=media&token=47aadfe3-af40-4f53-81cd-6f591bead83b',
        // // Add more chapters as needed
    };

    // Get the PDF link for the specified chapter
    const pdfLink = pdfLinks[chapter];
    console.log(pdfLink);

    Linking.openURL(pdfLink)
        .catch(err => {
            console.error('Failed to open PDF:', err);
            // Add code to handle the error (e.g., show an error message to the user)
        });
      };
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
            uri:'https://firebasestorage.googleapis.com/v0/b/agontales-e51c7.appspot.com/o/manga%20image%2F8.jpeg?alt=media&token=a10e688c-6d4a-482b-bcab-da40c5443cb5'
        }}
        />
        <Text style={styles.title}>Demon Slayer: Kimetsu no Yaiba</Text>
        <Text style={styles.text}>KOYOHARU GOTOUGE</Text>
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
                  {/* Your existing UI components */}
                  <TouchableOpacity onPress={() => openPDF('ch1')}>
                <View style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText0}>Ch.01</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openPDF('ch2')}>
                <View style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText0}>Ch.02</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openPDF('ch3')}>
                <View style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText0}>Ch.03</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openPDF('ch4')}>
                <View style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText0}>Ch.04</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openPDF('ch5')}>
                <View style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText0}>Ch.05</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openPDF('ch6')}>
                <View style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText0}>Ch.06</Text>
                </View>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => openPDF('ch7')}>
                <View style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText0}>Ch.07</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openPDF('ch8')}>
                <View style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText0}>Ch.08</Text>
                </View> */}
            {/* </TouchableOpacity> */}
      </View>
        <View>
        <TouchableOpacity>
        <View style={styles.border}>
            <AntDesign name="star" size={24} color="black" style={styles.star}/>
        </View>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={okx}>
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

export default OpenChapters8 ;